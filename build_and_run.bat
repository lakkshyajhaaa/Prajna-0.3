@echo off
echo Building React Frontend...
cd frontend
call npm run build
cd ..

echo Starting FastAPI Backend...
call uvicorn main:app --host 0.0.0.0 --port 8000
