function Generate-ConfigFile {
  $ConfigPath = Join-Path -Path $PWD -ChildPath 'config.dhall'
  $BinName = 'dhall-to-json'
  $Arguments = @("--file $ConfigPath")

  $PInfo = New-Object -TypeName System.Diagnostics.ProcessStartInfo
  $PInfo.FileName = $BinName
  $PInfo.RedirectStandardError = $true
  $PInfo.RedirectStandardOutput = $true
  $PInfo.UseShellExecute = $false
  $PInfo.Arguments = $Arguments

  $Process = New-Object -TypeName System.Diagnostics.Process
  $Process.StartInfo = $PInfo
  $Process.Start() | Out-Null
  $Process.WaitForExit()

  $StdOut = $Process.StandardOutput.ReadToEnd()

  Out-File -FilePath 'config.json' -InputObject $StdOut
  Write-Host -ForegroundColor Green "Config file generated!"
}
