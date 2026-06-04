param(
  [string]$Workspace = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

$ErrorActionPreference = "Stop"

$scriptPath = Join-Path $Workspace "script.js"
$imagesDir = Join-Path $Workspace "Imagenes"

function Normalize-Text {
  param([string]$Text)
  if (-not $Text) { return "" }
  $normalized = $Text.Normalize([Text.NormalizationForm]::FormD)
  $builder = [Text.StringBuilder]::new()
  foreach ($char in $normalized.ToCharArray()) {
    $category = [Globalization.CharUnicodeInfo]::GetUnicodeCategory($char)
    if ($category -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
      [void]$builder.Append($char)
    }
  }
  return (($builder.ToString().ToLowerInvariant() -replace "[^a-z0-9]+", " ").Trim())
}

function Get-Slug {
  param([string]$Title)
  $base = (Normalize-Text $Title) -replace "\s+", "-"
  return "roblox-$base"
}

function Find-BestGame {
  param(
    [string]$Title,
    [string]$Creator
  )

  $query = [uri]::EscapeDataString($Title)
  $url = "https://apis.roblox.com/search-api/omni-search?searchQuery=$query&sessionId=0&pageType=all"
  $search = Invoke-RestMethod -Uri $url -Headers @{ "User-Agent" = "Mozilla/5.0" }
  $contents = @()
  foreach ($group in @($search.searchResults)) {
    if ($group.contentGroupType -eq "Game") {
      $contents += @($group.contents)
    }
  }

  $targetTitle = Normalize-Text $Title
  $targetCreator = Normalize-Text $Creator

  if ($targetCreator) {
    foreach ($candidate in $contents) {
      $candidateCreator = Normalize-Text $candidate.creatorName
      if ($candidateCreator -and ($candidateCreator -eq $targetCreator -or $candidateCreator.Contains($targetCreator) -or $targetCreator.Contains($candidateCreator))) {
        return $candidate
      }
    }
  }

  $ranked = foreach ($candidate in $contents) {
    $candidateName = Normalize-Text $candidate.name
    $candidateCreator = Normalize-Text $candidate.creatorName
    $score = 0
    if ($candidateName -eq $targetTitle) { $score += 100 }
    if ($candidateName.Contains($targetTitle) -or $targetTitle.Contains($candidateName)) { $score += 45 }
    if ($targetCreator -and $candidateCreator -eq $targetCreator) { $score += 45 }
    if ($targetCreator -and ($candidateCreator.Contains($targetCreator) -or $targetCreator.Contains($candidateCreator))) { $score += 25 }
    [pscustomobject]@{ Candidate = $candidate; Score = $score }
  }

  return ($ranked | Sort-Object Score -Descending | Select-Object -First 1).Candidate
}

$lines = Get-Content -Path $scriptPath
$targets = @()

for ($i = 0; $i -lt $lines.Count; $i++) {
  $line = $lines[$i]
  if ($line -notmatch 'makeGame\("([^"]+)"') { continue }

  $title = $Matches[1]
  $hasImage = $line -match 'image:\s*"[^"]+"'
  if ($hasImage) { continue }

  $placeId = ""
  if ($line -match 'placeId:\s*([0-9]+)') {
    $placeId = $Matches[1]
  }

  $creator = ""
  if ($line -match 'creator:\s*"([^"]+)"') {
    $creator = $Matches[1]
  }

  if (-not $placeId) {
    $match = Find-BestGame -Title $title -Creator $creator
    if (-not $match -or -not $match.rootPlaceId) {
      throw "No pude resolver placeId para $title"
    }
    $placeId = [string]$match.rootPlaceId
    Start-Sleep -Milliseconds 120
  }

  $fileName = "$(Get-Slug $title).png"
  $imagePath = "Imagenes/$fileName"
  $targets += [pscustomobject]@{
    Index = $i
    Title = $title
    PlaceId = $placeId
    FileName = $fileName
    ImagePath = $imagePath
  }
}

if ($targets.Count -eq 0) {
  Write-Output "No hay juegos pendientes sin imagen."
  exit 0
}

$ids = ($targets | ForEach-Object { $_.PlaceId }) -join ","
$thumbUrl = "https://thumbnails.roblox.com/v1/places/gameicons?placeIds=$ids&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false"
$thumbs = Invoke-RestMethod -Uri $thumbUrl -Headers @{ "User-Agent" = "Mozilla/5.0" }
$thumbMap = @{}
foreach ($item in @($thumbs.data)) {
  if ($item.state -eq "Completed" -and $item.imageUrl) {
    $thumbMap[[string]$item.targetId] = [string]$item.imageUrl
  }
}

foreach ($target in $targets) {
  if (-not $thumbMap.ContainsKey($target.PlaceId)) {
    throw "No encontre thumbnail para $($target.Title) / $($target.PlaceId)"
  }
  $outPath = Join-Path $imagesDir $target.FileName
  Invoke-WebRequest -Uri $thumbMap[$target.PlaceId] -OutFile $outPath -Headers @{ "User-Agent" = "Mozilla/5.0" }
}

foreach ($target in $targets) {
  $line = $lines[$target.Index]
  if ($line -match 'image:\s*"[^"]+"') { continue }

  if ($line -match '\{') {
    if ($line -match 'placeId:\s*[0-9]+') {
      $line = $line -replace '(placeId:\s*[0-9]+,\s*)', "`$1image: `"$($target.ImagePath)`", "
    } else {
      $line = $line -replace '\{\s*', "{ placeId: $($target.PlaceId), image: `"$($target.ImagePath)`", "
    }
  } else {
    $line = $line -replace '\)(,?)\s*$', ", { placeId: $($target.PlaceId), image: `"$($target.ImagePath)`" })`$1"
  }

  $lines[$target.Index] = $line
}

Set-Content -Path $scriptPath -Value $lines -Encoding UTF8
Write-Output "Actualizados $($targets.Count) juegos sin imagen."
