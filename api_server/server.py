from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ph2_rewards import pool1

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=origins,
    allow_headers=origins,
)


@app.get("/pool1_points")
async def pool1_points():
    return pool1()
