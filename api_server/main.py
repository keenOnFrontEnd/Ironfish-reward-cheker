import uvicorn
import sqlite3 as sql

conn = sql.connect('ironfish.db')
cursor = conn.cursor()

if __name__ == "__main__":
    uvicorn.run(
        "server:app",
        host="localhost",
        port=8080,
        log_level="info",
        reload=True
    )
