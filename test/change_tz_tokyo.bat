@echo off
rem UTC-08:00 => Pacific Standard Time
rem UTC+00:00 => GMT Standard Time
rem UTC+09:00 => Tokyo Standard Time
:Set
tzutil /s "Tokyo Standard Time"
exit /b
