@echo off
echo Dang khoi dong server...
cd /d "%~dp0server"
start "" node server.js
timeout /t 2 >nul
start "" "http://localhost:3000"
echo Server da chay tai http://localhost:3000
