@echo off
REM Len Courier Services Setup Script for Windows

echo Len Courier Services - Setup Script
echo ====================================

REM Install backend dependencies
echo Installing backend dependencies...
cd backend
call npm install
copy .env.example .env
echo Frontend setup complete

REM Install frontend dependencies
echo Installing frontend dependencies...
cd ..\frontend
call npm install
copy .env.example .env
echo Frontend setup complete

echo.
echo ====================================
echo Setup complete!
echo.
echo Next steps:
echo 1. Update .env files with your configuration
echo 2. Start MongoDB: mongod
echo 3. Start backend: cd backend ^&^& npm run dev
echo 4. Start frontend: cd frontend ^&^& npm start
echo.
echo Or use Docker: docker-compose up
