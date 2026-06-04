$ErrorActionPreference = "Stop"

$workspace = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$itemsDir = Join-Path $workspace "Imagenes\items"
New-Item -ItemType Directory -Force -Path $itemsDir | Out-Null

$items = @(
  @{ File = "premium-pass.svg"; Label = "P"; Title = "Premium Pass"; A = "#4f7cff"; B = "#a5b4fc" },
  @{ File = "premium-vehicles.svg"; Label = "V"; Title = "Premium Vehicles"; A = "#0ea5e9"; B = "#67e8f9" },
  @{ File = "estates-unlocked.svg"; Label = "E"; Title = "Estates"; A = "#f59e0b"; B = "#fde68a" },
  @{ File = "bat-dragon.svg"; Label = "BD"; Title = "Bat Dragon"; A = "#7c2d12"; B = "#fb923c" },
  @{ File = "shadow-dragon.svg"; Label = "SD"; Title = "Shadow Dragon"; A = "#111827"; B = "#a78bfa" },
  @{ File = "frost-dragon.svg"; Label = "FD"; Title = "Frost Dragon"; A = "#0284c7"; B = "#bae6fd" },
  @{ File = "dragon-fruit.svg"; Label = "DR"; Title = "Dragon Fruit"; A = "#dc2626"; B = "#fca5a5" },
  @{ File = "kitsune-fruit.svg"; Label = "KI"; Title = "Kitsune Fruit"; A = "#7c3aed"; B = "#f0abfc" },
  @{ File = "dark-blade.svg"; Label = "DB"; Title = "Dark Blade"; A = "#020617"; B = "#64748b" },
  @{ File = "laser-cannon.svg"; Label = "LC"; Title = "Laser Cannon"; A = "#0891b2"; B = "#22d3ee" },
  @{ File = "chainsaw.svg"; Label = "CS"; Title = "Chainsaw"; A = "#b45309"; B = "#fbbf24" },
  @{ File = "strong-axe.svg"; Label = "AX"; Title = "Strong Axe"; A = "#166534"; B = "#86efac" },
  @{ File = "bug-net.svg"; Label = "BN"; Title = "Bug Net"; A = "#16a34a"; B = "#bbf7d0" },
  @{ File = "ten-billion-skin.svg"; Label = "10B"; Title = "10B Skin"; A = "#2563eb"; B = "#bfdbfe" },
  @{ File = "glorious-skins.svg"; Label = "GL"; Title = "Glorious Skins"; A = "#ca8a04"; B = "#fef08a" },
  @{ File = "chroma-travelers-gun.svg"; Label = "CT"; Title = "Chroma Traveler's Gun"; A = "#be185d"; B = "#67e8f9" },
  @{ File = "gingerscope.svg"; Label = "GS"; Title = "Gingerscope"; A = "#c2410c"; B = "#fed7aa" },
  @{ File = "travelers-axe.svg"; Label = "TA"; Title = "Traveler's Axe"; A = "#7f1d1d"; B = "#f87171" },
  @{ File = "hydra-dragon-cannelloni.svg"; Label = "HD"; Title = "Hydra Dragon Cannelloni"; A = "#166534"; B = "#fde68a" },
  @{ File = "dragon-cannelloni.svg"; Label = "DC"; Title = "Dragon Cannelloni"; A = "#991b1b"; B = "#fdba74" },
  @{ File = "la-supreme-combinasion.svg"; Label = "LS"; Title = "La Supreme Combinasion"; A = "#581c87"; B = "#f9a8d4" },
  @{ File = "honored-one.svg"; Label = "HO"; Title = "Honored One"; A = "#1d4ed8"; B = "#e0f2fe" },
  @{ File = "vessel.svg"; Label = "VE"; Title = "Vessel"; A = "#991b1b"; B = "#fca5a5" },
  @{ File = "disaster-plants.svg"; Label = "DP"; Title = "Disaster Plants"; A = "#15803d"; B = "#bef264" },
  @{ File = "diamond-rod.svg"; Label = "DI"; Title = "Diamond Rod"; A = "#0891b2"; B = "#cffafe" },
  @{ File = "element-rod.svg"; Label = "EL"; Title = "Element Rod"; A = "#7c3aed"; B = "#fef3c7" },
  @{ File = "ghostfinn-rod.svg"; Label = "GF"; Title = "Ghostfinn Rod"; A = "#475569"; B = "#dbeafe" },
  @{ File = "gunner-guest-1337.svg"; Label = "GG"; Title = "Gunner Guest 1337"; A = "#334155"; B = "#93c5fd" },
  @{ File = "ghost-two-time.svg"; Label = "GT"; Title = "Ghost Two Time"; A = "#0f172a"; B = "#c4b5fd" },
  @{ File = "hacklord-shedletsky.svg"; Label = "HS"; Title = "Hacklord Shedletsky"; A = "#065f46"; B = "#5eead4" }
)

foreach ($item in $items) {
  $path = Join-Path $itemsDir $item.File
  $svg = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="$($item.Title)">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="$($item.A)"/>
      <stop offset="1" stop-color="$($item.B)"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <circle cx="48" cy="14" r="12" fill="rgba(255,255,255,.28)"/>
  <path d="M11 48 C21 37 31 55 43 38 C48 31 53 35 57 29" fill="none" stroke="rgba(255,255,255,.42)" stroke-width="5" stroke-linecap="round"/>
  <text x="32" y="38" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="800" fill="#fff">$($item.Label)</text>
</svg>
"@
  Set-Content -Path $path -Value $svg -Encoding UTF8
}

Write-Output "Generated $($items.Count) item icons."
