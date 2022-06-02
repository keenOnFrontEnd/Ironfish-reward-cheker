from fastapi import FastAPI

app = FastAPI()


@app.get("/total_points")
async def total_points():
    return {"total_points": 100000}
