$ErrorActionPreference = "Stop"

$workspace = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$itemsDir = Join-Path $workspace "Imagenes\items"
$scriptPath = Join-Path $workspace "script.js"
New-Item -ItemType Directory -Force -Path $itemsDir | Out-Null

function Get-FandomPageImage {
  param(
    [string]$Wiki,
    [string]$Page
  )

  $encoded = [uri]::EscapeDataString($Page)
  $url = "https://$Wiki.fandom.com/api.php?action=query&prop=pageimages&titles=$encoded&pithumbsize=512&format=json&origin=*"
  $data = Invoke-RestMethod -Uri $url -Headers @{ "User-Agent" = "Mozilla/5.0" }
  $pageData = $data.query.pages.PSObject.Properties.Value | Select-Object -First 1
  return $pageData.thumbnail.source
}

function Get-FandomFileImage {
  param(
    [string]$Wiki,
    [string]$FileTitle
  )

  $encoded = [uri]::EscapeDataString($FileTitle)
  $url = "https://$Wiki.fandom.com/api.php?action=query&titles=$encoded&prop=imageinfo&iiprop=url&iiurlwidth=512&format=json&origin=*"
  $data = Invoke-RestMethod -Uri $url -Headers @{ "User-Agent" = "Mozilla/5.0" }
  $pageData = $data.query.pages.PSObject.Properties.Value | Select-Object -First 1
  $info = @($pageData.imageinfo) | Select-Object -First 1
  if ($info.thumburl) { return $info.thumburl }
  return $info.url
}

function Resolve-SourceUrl {
  param([hashtable]$Source)

  if ($Source.Type -eq "direct") { return $Source.Url }
  if ($Source.Type -eq "page") { return Get-FandomPageImage -Wiki $Source.Wiki -Page $Source.Page }
  if ($Source.Type -eq "file") { return Get-FandomFileImage -Wiki $Source.Wiki -FileTitle $Source.FileTitle }
  throw "Tipo de fuente no soportado: $($Source.Type)"
}

$sources = @(
  @{ Key = "premium-pass"; Type = "page"; Wiki = "official-brookhaven"; Page = "Gamepasses" },
  @{ Key = "premium-vehicles"; Type = "page"; Wiki = "official-brookhaven"; Page = "Vehicles" },
  @{ Key = "estates-unlocked"; Type = "page"; Wiki = "official-brookhaven"; Page = "Estates" },

  @{ Key = "bat-dragon"; Type = "page"; Wiki = "adoptme"; Page = "Bat Dragon" },
  @{ Key = "shadow-dragon"; Type = "page"; Wiki = "adoptme"; Page = "Shadow Dragon" },
  @{ Key = "frost-dragon"; Type = "page"; Wiki = "adoptme"; Page = "Frost Dragon" },

  @{ Key = "dragon-fruit"; Type = "page"; Wiki = "blox-fruits"; Page = "Dragon" },
  @{ Key = "kitsune-fruit"; Type = "page"; Wiki = "blox-fruits"; Page = "Kitsune" },
  @{ Key = "dark-blade"; Type = "page"; Wiki = "blox-fruits"; Page = "Dark Blade" },

  @{ Key = "laser-cannon"; Type = "page"; Wiki = "99-nights-in-the-forest"; Page = "Laser Cannon" },
  @{ Key = "chainsaw"; Type = "file"; Wiki = "99-nights-in-the-forest"; FileTitle = "File:Chainsaw.png" },
  @{ Key = "strong-axe"; Type = "file"; Wiki = "99-nights-in-the-forest"; FileTitle = "File:Strong axe.png" },

  @{ Key = "bug-net"; Type = "page"; Wiki = "robloxrivals"; Page = "Bug Net" },
  @{ Key = "ten-billion-skin"; Type = "file"; Wiki = "robloxrivals"; FileTitle = "File:10B dsd.png" },
  @{ Key = "glorious-skins"; Type = "file"; Wiki = "robloxrivals"; FileTitle = "File:Glorious.png" },

  @{ Key = "chroma-travelers-gun"; Type = "page"; Wiki = "murder-mystery-2"; Page = "Chroma Traveler's Gun" },
  @{ Key = "gingerscope"; Type = "page"; Wiki = "murder-mystery-2"; Page = "Gingerscope" },
  @{ Key = "travelers-axe"; Type = "page"; Wiki = "murder-mystery-2"; Page = "Traveler's Axe" },

  @{ Key = "hydra-dragon-cannelloni"; Type = "page"; Wiki = "stealabrainrot"; Page = "Hydra Dragon Cannelloni" },
  @{ Key = "dragon-cannelloni"; Type = "page"; Wiki = "stealabrainrot"; Page = "Dragon Cannelloni" },
  @{ Key = "la-supreme-combinasion"; Type = "page"; Wiki = "stealabrainrot"; Page = "La Supreme Combinasion" },

  @{ Key = "honored-one"; Type = "page"; Wiki = "jujutsu-shenanigans"; Page = "Honored One" },
  @{ Key = "vessel"; Type = "page"; Wiki = "jujutsu-shenanigans"; Page = "Vessel" },
  @{ Key = "disaster-plants"; Type = "page"; Wiki = "jujutsu-shenanigans"; Page = "Disaster Plants" },

  @{ Key = "diamond-rod"; Type = "direct"; Url = "https://fishit.web.id/images/rods/diamond-rod.webp" },
  @{ Key = "element-rod"; Type = "page"; Wiki = "fish-it"; Page = "Element Rod" },
  @{ Key = "ghostfinn-rod"; Type = "page"; Wiki = "fish-it"; Page = "Ghostfinn Rod" },

  @{ Key = "gunner-guest-1337"; Type = "file"; Wiki = "forsaken2024"; FileTitle = "File:Gunner Guest 1337.png" },
  @{ Key = "ghost-two-time"; Type = "file"; Wiki = "forsaken2024"; FileTitle = "File:Ghost Two Time.png" },
  @{ Key = "hacklord-shedletsky"; Type = "file"; Wiki = "forsaken2024"; FileTitle = "File:Hacklord.png" }
)

foreach ($source in $sources) {
  $sourceUrl = Resolve-SourceUrl -Source $source
  if (-not $sourceUrl) {
    throw "No se encontro imagen para $($source.Key)"
  }

  $outPath = Join-Path $itemsDir "$($source.Key).png"
  Invoke-WebRequest -Uri $sourceUrl -OutFile $outPath -Headers @{ "User-Agent" = "Mozilla/5.0" }
  Write-Output "Downloaded $($source.Key)"
}

$script = Get-Content -Path $scriptPath -Raw
foreach ($source in $sources) {
  $script = $script.Replace("Imagenes/items/$($source.Key).svg", "Imagenes/items/$($source.Key).png")
}
Set-Content -Path $scriptPath -Value $script -Encoding UTF8

Write-Output "Actualizadas $($sources.Count) imagenes reales de items."
