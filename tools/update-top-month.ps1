param(
  [int]$Limit = 10
)

$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$ScriptPath = Join-Path $Root "script.js"
$ImagesDir = Join-Path $Root "Imagenes"
$RankingUrl = "https://robloxgames.org/stats/most-played"
$FallbackRankingUrl = "https://levelupplay.my/charts/top-playing"
$Headers = @{
  "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36"
}

$KnownGames = @{
  "Fish It!" = @{ PlaceId = "121864768012064"; UniverseId = "7436755782" }
  "Adopt Me!" = @{ PlaceId = "920587237"; UniverseId = "383310974" }
  "Blox Fruits" = @{ PlaceId = "2753915549"; UniverseId = "994732206" }
  "RIVALS" = @{ PlaceId = "17625359962"; UniverseId = "6035872082" }
  "Brookhaven RP" = @{ PlaceId = "4924922222"; UniverseId = "1686885941" }
  "Steal a Brainrot" = @{ PlaceId = "109983668079237"; UniverseId = "" }
  "99 Nights in the Forest" = @{ PlaceId = "79546208627805"; UniverseId = "" }
  "Murder Mystery 2" = @{ PlaceId = "142823291"; UniverseId = "66654135" }
  "Jujutsu Shenanigans" = @{ PlaceId = "9391468976"; UniverseId = "3508322461" }
  "Forsaken" = @{ PlaceId = "18687417158"; UniverseId = "" }
  "Slime RNG" = @{ PlaceId = "92416421522960"; UniverseId = "9792947201" }
  "Kick a Lucky Block" = @{ PlaceId = "89469502395769"; UniverseId = "10004244222" }
  "Anime Vanguards" = @{ PlaceId = "16146832113"; UniverseId = "" }
  "Dandy's World" = @{ PlaceId = ""; UniverseId = "" }
  "The Strongest Battlegrounds" = @{ PlaceId = "10449761463"; UniverseId = "" }
  "Fisch" = @{ PlaceId = ""; UniverseId = "" }
  "Sol's RNG" = @{ PlaceId = ""; UniverseId = "" }
  "Bee Swarm Simulator" = @{ PlaceId = "1537690962"; UniverseId = "" }
  "Dress to Impress" = @{ PlaceId = "15101393044"; UniverseId = "" }
  "Pet Simulator 99" = @{ PlaceId = ""; UniverseId = "" }
}

function Invoke-TextRequest {
  param([string]$Uri)

  $lastError = $null
  for ($attempt = 1; $attempt -le 3; $attempt++) {
    try {
      return (Invoke-WebRequest -Uri $Uri -Headers $Headers -UseBasicParsing).Content
    } catch {
      $lastError = $_
      Start-Sleep -Seconds (2 * $attempt)
    }
  }

  throw $lastError
}

function Invoke-JsonRequest {
  param([string]$Uri)

  $lastError = $null
  for ($attempt = 1; $attempt -le 3; $attempt++) {
    try {
      return Invoke-RestMethod -Uri $Uri -Headers $Headers
    } catch {
      $lastError = $_
      Start-Sleep -Seconds (2 * $attempt)
    }
  }

  throw $lastError
}

function Normalize-Title {
  param([string]$Title)

  $clean = $Title
  $clean = $clean -replace "\[[^\]]*\]", ""
  $clean = $clean -replace "^\s*DISASTERPLANTS\s+", ""
  $clean = $clean -replace "^\s*\[\]\s*", ""
  $clean = $clean -replace "\s+", " "
  $clean = $clean.Trim()

  $aliases = @{
    "Jujutsu Shenanigans" = "Jujutsu Shenanigans"
    "Adopt Me!" = "Adopt Me!"
    "99 Nights in the Forest" = "99 Nights in the Forest"
    "Murder Mystery 2" = "Murder Mystery 2"
    "Blox Fruits" = "Blox Fruits"
    "Brookhaven RP" = "Brookhaven RP"
    "RIVALS" = "RIVALS"
    "Fish It!" = "Fish It!"
    "Steal a Brainrot" = "Steal a Brainrot"
    "Kick a Lucky Block" = "Kick a Lucky Block"
    "Slime RNG" = "Slime RNG"
    "Forsaken" = "Forsaken"
  }

  foreach ($key in $aliases.Keys) {
    if ($clean -like "*$key*") {
      return $aliases[$key]
    }
  }

  return $clean
}

function Slugify {
  param([string]$Text)

  $normalized = $Text.Normalize([Text.NormalizationForm]::FormD)
  $builder = New-Object Text.StringBuilder
  foreach ($char in $normalized.ToCharArray()) {
    if ([Globalization.CharUnicodeInfo]::GetUnicodeCategory($char) -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
      [void]$builder.Append($char)
    }
  }

  return ($builder.ToString().ToLowerInvariant() -replace "[^a-z0-9]+", "-" -replace "^-+|-+$", "")
}

function Format-CompactNumber {
  param([double]$Value)

  if ($Value -ge 1000000000) {
    return ("{0:0.#}B" -f ($Value / 1000000000))
  }
  if ($Value -ge 1000000) {
    return ("{0:0.#}M" -f ($Value / 1000000))
  }
  if ($Value -ge 1000) {
    return ("{0:0.#}K" -f ($Value / 1000))
  }
  return [string][int]$Value
}

function Escape-JsString {
  param([string]$Text)

  return ($Text -replace "\\", "\\\\" -replace '"', '\"')
}

function Get-RankingRows {
  try {
    $html = Invoke-TextRequest -Uri $RankingUrl
    $pattern = '(?s)<a[^>]+href="(?<href>/stats/[^"]+)"[^>]*>\s*View Stats'
    $matches = [regex]::Matches($html, $pattern)
  } catch {
    Write-Warning "Fuente principal no disponible. Usando fallback LevelUpPlay."
    $fallbackHtml = Invoke-TextRequest -Uri $FallbackRankingUrl
    $itemMatches = [regex]::Matches($fallbackHtml, '"position":(?<pos>\d+).*?"@type":"VideoGame","name":"(?<name>[^"]+)".*?"genre":"(?<genre>[^"]*)"', "Singleline")
    if ($itemMatches.Count -eq 0) {
      throw "No pude leer el ranking fallback."
    }
    $fallbackRows = @()
    foreach ($item in $itemMatches | Select-Object -First $Limit) {
      $title = Normalize-Title $item.Groups["name"].Value
      $known = $KnownGames[$title]
      $fallbackRows += [pscustomobject]@{
        Title = $title
        StatsUrl = $FallbackRankingUrl
        UniverseId = if ($known) { $known.UniverseId } else { "" }
        PlaceId = if ($known) { $known.PlaceId } else { "" }
      }
    }
    return $fallbackRows
  }

  $rows = @()

  foreach ($match in $matches | Select-Object -First $Limit) {
    $statsUrl = "https://robloxgames.org$($match.Groups["href"].Value)"
    $statsHtml = Invoke-TextRequest -Uri $statsUrl

    $titleMatch = [regex]::Match($statsHtml, '<h1[^>]*>\s*(?<title>.*?)\s+Stats\s*</h1>', "Singleline")
    $title = if ($titleMatch.Success) { Normalize-Title (($titleMatch.Groups["title"].Value -replace "<[^>]+>", "").Trim()) } else { "Roblox Game" }

    $universeMatch = [regex]::Match($statsHtml, 'Universe ID\s*</[^>]+>\s*<[^>]+>\s*(?<id>\d+)', "Singleline")
    if (-not $universeMatch.Success) {
      $universeMatch = [regex]::Match($statsHtml, 'Universe ID\s*(?<id>\d+)', "Singleline")
    }

    $placeMatch = [regex]::Match($statsHtml, 'Place ID\s*</[^>]+>\s*<[^>]+>\s*(?<id>\d+)', "Singleline")
    if (-not $placeMatch.Success) {
      $placeMatch = [regex]::Match($statsHtml, 'Place ID\s*(?<id>\d+)', "Singleline")
    }

    $rows += [pscustomobject]@{
      Title = $title
      StatsUrl = $statsUrl
      UniverseId = if ($universeMatch.Success) { $universeMatch.Groups["id"].Value } else { "" }
      PlaceId = if ($placeMatch.Success) { $placeMatch.Groups["id"].Value } else { "" }
    }
  }

  return $rows
}

function Add-LiveStats {
  param([array]$Rows)

  foreach ($row in $Rows) {
    if ((-not $row.UniverseId) -and $row.PlaceId) {
      try {
        $universe = Invoke-JsonRequest -Uri "https://apis.roblox.com/universes/v1/places/$($row.PlaceId)/universe"
        if ($universe.universeId) {
          $row.UniverseId = [string]$universe.universeId
        }
      } catch {
        Write-Warning "No pude resolver Universe ID para $($row.Title)."
      }
    }
  }

  $withIds = $Rows | Where-Object { $_.UniverseId }
  if ($withIds.Count -eq 0) {
    return $Rows
  }

  $ids = ($withIds | ForEach-Object { $_.UniverseId }) -join ","
  $gameStats = (Invoke-JsonRequest -Uri "https://games.roblox.com/v1/games?universeIds=$ids").data
  $votes = (Invoke-JsonRequest -Uri "https://games.roblox.com/v1/games/votes?universeIds=$ids").data

  foreach ($row in $Rows) {
    $game = $gameStats | Where-Object { [string]$_.id -eq [string]$row.UniverseId } | Select-Object -First 1
    $vote = $votes | Where-Object { [string]$_.id -eq [string]$row.UniverseId } | Select-Object -First 1

    if ($game) {
      $row | Add-Member -NotePropertyName Playing -NotePropertyValue ([int]$game.playing) -Force
      $row | Add-Member -NotePropertyName Visits -NotePropertyValue ([double]$game.visits) -Force
      $row | Add-Member -NotePropertyName Favorites -NotePropertyValue ([double]$game.favoritedCount) -Force
      $row | Add-Member -NotePropertyName Creator -NotePropertyValue ([string]$game.creator.name) -Force
      $row | Add-Member -NotePropertyName SourceTitle -NotePropertyValue ([string]$game.name) -Force
      if (-not $row.PlaceId -and $game.rootPlaceId) {
        $row.PlaceId = [string]$game.rootPlaceId
      }
    }

    if ($vote) {
      $likes = [double]$vote.upVotes
      $dislikes = [double]$vote.downVotes
      $approval = if (($likes + $dislikes) -gt 0) { [math]::Round(($likes / ($likes + $dislikes)) * 100, 1) } else { 0 }
      $row | Add-Member -NotePropertyName Likes -NotePropertyValue $likes -Force
      $row | Add-Member -NotePropertyName Dislikes -NotePropertyValue $dislikes -Force
      $row | Add-Member -NotePropertyName Approval -NotePropertyValue $approval -Force
    }
  }

  return $Rows | Sort-Object -Property @{ Expression = { if ($_.Playing) { -$_.Playing } else { 0 } } }
}

function Download-Icon {
  param(
    [string]$PlaceId,
    [string]$Title
  )

  if (-not $PlaceId) {
    return ""
  }

  $fileName = "roblox-$(Slugify $Title).png"
  $relativePath = "Imagenes/$fileName"
  $outputPath = Join-Path $ImagesDir $fileName
  $thumbUrl = "https://thumbnails.roblox.com/v1/places/gameicons?placeIds=$PlaceId&size=512x512&format=Png&isCircular=false"
  $thumb = (Invoke-JsonRequest -Uri $thumbUrl).data | Select-Object -First 1

  if ($thumb -and $thumb.state -eq "Completed" -and $thumb.imageUrl) {
    Invoke-WebRequest -Uri $thumb.imageUrl -Headers $Headers -OutFile $outputPath
    return $relativePath
  }

  return ""
}

function Build-GameLine {
  param([pscustomobject]$Row)

  $image = Download-Icon -PlaceId $Row.PlaceId -Title $Row.Title
  $category = "Roblox"
  $short = "Juego destacado del ranking actual de Roblox con actividad alta y comunidad activa."
  $creator = if ($Row.Creator) { $Row.Creator } else { "Roblox Community" }
  $title = Escape-JsString $Row.Title

  return "  makeGame(`"$title`", `"$category`", `"$short`", { placeId: $($Row.PlaceId), image: `"$image`", creator: `"$(Escape-JsString $creator)`", year: `"N/D`", badges: [`"Top del mes`"] })"
}

function Update-Script {
  param([array]$Rows)

  $script = Get-Content -Path $ScriptPath -Raw
  $gamesStart = $script.IndexOf("const games = [")
  $trendStart = $script.IndexOf("const trendSectionsData")
  $gamesBlock = $script.Substring($gamesStart, $trendStart - $gamesStart)

  $currentTitles = [regex]::Matches($gamesBlock, 'makeGame\("([^"]+)"') | ForEach-Object { $_.Groups[1].Value }
  $missingRows = $Rows | Where-Object { $currentTitles -notcontains $_.Title }

  foreach ($row in $missingRows) {
    $replacementCandidates = @("Ghost Simulator", "Demon Slayer RPG 2", "My Supermarket", "Kick Off", "Super Golf", "Camping", "Starving Artists", "Project Slayers")
    $replaced = $false

    foreach ($candidate in $replacementCandidates) {
      if ($Rows.Title -contains $candidate) {
        continue
      }

      $linePattern = '(?m)^  makeGame\("' + [regex]::Escape($candidate) + '".*?\),?\r?$'
      if ([regex]::IsMatch($script, $linePattern)) {
        $newLine = Build-GameLine -Row $row
        if ([regex]::Match($script, $linePattern).Value.Trim().EndsWith(",")) {
          $newLine += ","
        }
        $script = [regex]::Replace($script, $linePattern, $newLine, 1)
        $replaced = $true
        break
      }
    }

    if (-not $replaced) {
      throw "No encontre una entrada segura para reemplazar por $($row.Title)."
    }
  }

  foreach ($row in $Rows) {
    $image = Download-Icon -PlaceId $row.PlaceId -Title $row.Title
    if (-not $image) {
      continue
    }

    $linePattern = '(?m)^  makeGame\("' + [regex]::Escape($row.Title) + '".*?\),?\r?$'
    $lineMatch = [regex]::Match($script, $linePattern)
    if ($lineMatch.Success) {
      $line = $lineMatch.Value
      if ($line -match 'image:\s*"[^"]*"') {
        $line = [regex]::Replace($line, 'image:\s*"[^"]*"', "image: `"$image`"")
      } else {
        $line = $line -replace '\}\)(,?)$', ", image: `"$image`" })`$1"
      }
      if ($row.PlaceId -and $line -notmatch 'placeId:\s*\d+') {
        $line = $line -replace '\{\s*', "{ placeId: $($row.PlaceId), "
      }
      $script = [regex]::Replace($script, $linePattern, [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $line }, 1)
    }
  }

  $itemLines = foreach ($row in $Rows | Select-Object -First $Limit) {
    $metric = if ($row.Playing) { "$(Format-CompactNumber $row.Playing) jugando" } else { "N/D jugando" }
    $meta = if ($row.Approval) { "$($row.Approval)% aprobacion" } else { "N/D aprobacion" }
    $likes = if ($row.Likes -ne $null) { Format-CompactNumber $row.Likes } else { "N/D" }
    $dislikes = if ($row.Dislikes -ne $null) { Format-CompactNumber $row.Dislikes } else { "N/D" }
    $favorites = if ($row.Favorites -ne $null) { Format-CompactNumber $row.Favorites } else { "N/D" }
    $visits = if ($row.Visits -ne $null) { Format-CompactNumber $row.Visits } else { "N/D" }
    $context = "Actualizado automaticamente desde ranking live: $metric, $visits visitas y $favorites favoritos."
    "      { title: `"$(Escape-JsString $row.Title)`", metric: `"$metric`", meta: `"$meta`", likes: `"$likes`", dislikes: `"$dislikes`", favorites: `"$favorites`", context: `"$context`" }"
  }

  $newItems = "    items: [`r`n" + ($itemLines -join ",`r`n") + "`r`n    ]"
  $topStart = $script.IndexOf('id: "top-mes"')
  $itemsStart = $script.IndexOf("    items: [", $topStart)
  $nextSection = $script.IndexOf('  },' + "`r`n" + '  {' + "`r`n" + '    id: "revelacion-semana"', $itemsStart)
  if ($nextSection -lt 0) {
    $nextSection = $script.IndexOf("  },`n  {`n    id: `"revelacion-semana`"", $itemsStart)
  }
  if ($topStart -lt 0 -or $itemsStart -lt 0 -or $nextSection -lt 0) {
    throw "No pude encontrar el bloque Top del mes para actualizar."
  }

  $script = $script.Substring(0, $itemsStart) + $newItems + "`r`n" + $script.Substring($nextSection)
  Set-Content -Path $ScriptPath -Value $script -Encoding UTF8
}

$ranking = Get-RankingRows
$ranking = Add-LiveStats -Rows $ranking
Update-Script -Rows ($ranking | Select-Object -First $Limit)

Write-Output "Top del mes actualizado: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
