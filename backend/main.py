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


app = FastAPI(
    docs_url= "/api/v2/docs",
    openapi_url="/api/v2/openapi.json"
)

@app.get("/api/v2/hello-world")
async def hello():
    return {"message": "Hello World"}

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, log_level="info",host="0.0.0.0")
