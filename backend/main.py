from fastapi import FastAPI, UploadFile, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import aiofiles
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt 
import numpy as np 
import shutil
import os 
import uvicorn
from datetime import datetime


app = FastAPI(
    docs_url= "/api/v2/docs",
    openapi_url="/api/v2/openapi.json"
)

# CORSミドルウェアの設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Reactアプリのオリジンを許可
    allow_credentials=True,
    allow_methods=["*"],  # すべてのHTTPメソッドを許可
    allow_headers=["*"],  # すべてのヘッダーを許可
)

@app.get("/api/v2/hello-world")
async def hello():
    print(datetime.now())
    return {"message": "Hello baWorld"}

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, log_level="info",host="0.0.0.0", reload=True)
