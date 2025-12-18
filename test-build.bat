@echo off
cd /d "%~dp0"
echo Testing build process...
echo.

echo Changing to frontend directory...
cd frontend

echo Installing dependencies...
call npm install

echo Running build...
call npm run build

echo Build completed!
echo.

if exist dist (
    echo ✅ Build successful! dist/ directory created.
    echo.
    echo To deploy to Vercel:
    echo 1. Push this project to GitHub
    echo 2. Import the project on Vercel
    echo 3. Set environment variable: VITE_API_BASE_URL=https://your-backend-url.com
    echo.
) else (
    echo ❌ Build failed!
)

pause
