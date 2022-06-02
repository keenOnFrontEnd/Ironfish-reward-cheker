import uvicorn

if __name__ == "__main__":
    uvicorn.run(
        "server:app",
        host="localhost",
        port=8080,
        log_level="info",
        reload=True
    )
