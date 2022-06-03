from fastapi import FastAPI
from ph2_rewards import pool1

app = FastAPI()


@app.get("/pool1_points")
async def pool1_points():
    return pool1()
