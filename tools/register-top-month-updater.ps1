param(
  [string]$TaskName = "WikiRobloxTopMonthUpdater",
  [string]$At = "09:00"
)

$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$Updater = Join-Path $Root "tools\update-top-month.ps1"
$PowerShell = (Get-Command powershell.exe).Source

$action = New-ScheduledTaskAction -Execute $PowerShell -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$Updater`""
$trigger = New-ScheduledTaskTrigger -Daily -At $At
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -AllowStartIfOnBatteries

Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Settings $settings -Description "Actualiza automaticamente el Top del mes de Roblox Mini Wiki." -Force | Out-Null

Write-Output "Tarea programada registrada: $TaskName a las $At"
