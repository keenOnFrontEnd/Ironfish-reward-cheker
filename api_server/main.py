import uvicorn


def server():
    uvicorn.run(
        "server:app",
        host="localhost",
        port=8080,
        log_level="info",
        reload=True
    )


def main():
    server()


if __name__ == "__main__":
    main()
