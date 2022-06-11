import uvicorn


def server():
    uvicorn.run(
        "server:app",
        host="localhost",
        port=8080,
        log_level="info",
        reload=True,
        ssl_certfile="/etc/letsencrypt/live/ironfish-rewards-checker.ru/fullchain.pem",
        ssl_keyfile="/etc/letsencrypt/live/ironfish-rewards-checker.ru/privkey.pem"
    )


def main():
    server()


if __name__ == "__main__":
    main()
