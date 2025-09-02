from fastapi import FastAPI
from fastapi.responses import FileResponse
import promo_builder
import os

app = FastAPI()

@app.on_event("startup")
async def build_on_start():
    # Run once when container starts
    promo_builder.main()

@app.get("/")
async def home():
    return {"message": "Promo Builder running. Go to /download to grab your zip."}

@app.get("/download")
async def download():
    file_path = "promo_pack.zip"
    if os.path.exists(file_path):
        return FileResponse(file_path, filename="promo_pack.zip")
    return {"error": "No zip found. Check logs."}