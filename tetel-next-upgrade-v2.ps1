<# 
tetel-next-upgrade-v2.ps1 (TetelPontocom)
Fix: pass arguments as an array (PowerShell does NOT split a single string).
Run (from project root with package.json):
  powershell -ExecutionPolicy Bypass -File .\tetel-next-upgrade-v2.ps1
#>

$ErrorActionPreference = 'Stop'

function Step([string]$msg) {
  Write-Host ''
  Write-Host ('==> ' + $msg)
}

function HasCmd([string]$name) {
  return [bool](Get-Command $name -ErrorAction SilentlyContinue)
}

function DetectPM {
  if (Test-Path '.\pnpm-lock.yaml') { return 'pnpm' }
  if (Test-Path '.\yarn.lock')      { return 'yarn' }
  if (Test-Path '.\package-lock.json') { return 'npm' }
  return 'npm'
}

function Run([string]$cmd, [string[]]$args) {
  $print = ($args -join ' ')
  Write-Host ('>> ' + $cmd + ' ' + $print)
  & $cmd @args
}

Step 'TetelPontocom - Upgrade Next.js (v2)'

if (-not (Test-Path '.\package.json')) {
  throw 'package.json not found. Run this script in the project root.'
}

$pm = DetectPM
Step ('Package manager: ' + $pm)

if (-not (HasCmd 'node')) { throw 'node not found in PATH.' }
$nodev = & node -v
Write-Host ('Node: ' + $nodev)

# Prefer pnpm if lockfile exists (your project has pnpm-lock.yaml)
if ($pm -eq 'pnpm') {
  if (-not (HasCmd 'pnpm')) { throw 'pnpm-lock.yaml found but pnpm is not installed.' }

  Step 'Install dependencies (current state)'
  Run 'pnpm' @('install')

  Step 'Upgrade Next.js to patched version (security)'
  # Use the minimum safe version flagged by your scanner; adjust if needed.
  Run 'pnpm' @('add','next@15.2.6','react@latest','react-dom@latest')

  Step 'Run dev (pnpm dev)'
  Run 'pnpm' @('dev')

  Step 'DONE'
  exit 0
}

# Fallbacks
if ($pm -eq 'yarn') {
  if (-not (HasCmd 'yarn')) { throw 'yarn.lock found but yarn is not installed.' }
  Step 'Install dependencies'
  Run 'yarn' @('install')
  Step 'Upgrade next/react/react-dom'
  Run 'yarn' @('add','next@15.2.6','react@latest','react-dom@latest')
  Step 'Run dev'
  Run 'yarn' @('dev')
  Step 'DONE'
  exit 0
}

if (-not (HasCmd 'npm')) { throw 'npm not found in PATH.' }
Step 'Install dependencies'
Run 'npm' @('install')
Step 'Upgrade next/react/react-dom'
Run 'npm' @('install','next@15.2.6','react@latest','react-dom@latest')
Step 'Run dev'
Run 'npm' @('run','dev')
Step 'DONE'
