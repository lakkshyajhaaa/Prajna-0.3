# Stage 1: Build Frontend
FROM node:20 AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build Backend
FROM python:3.10-slim

# Set up user for Hugging Face Spaces (must run as user 1000)
RUN useradd -m -u 1000 user
USER user
ENV PATH="/home/user/.local/bin:$PATH"

WORKDIR /app

# Copy requirements and install
COPY --chown=user requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY --chown=user . .

# Copy built frontend from Stage 1
COPY --from=frontend-builder --chown=user /app/frontend/dist ./frontend/dist

# Pre-download PyTorch models during build phase to prevent startup hangs
RUN python download_models.py

# Expose Hugging Face's default port
EXPOSE 7860

# Start Uvicorn on 0.0.0.0:7860
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]
