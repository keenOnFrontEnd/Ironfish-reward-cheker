import ast
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests as r


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=origins,
    allow_headers=origins,
)


@app.get("/user_by_name/{name}")
async def get_user(name):
    return get_user_by_name(name)


@app.get("/pool1_points")
async def pool1_points():
    with open('total_points.txt', 'r') as file:
        return ast.literal_eval(file.read())


def get_user_by_name(name):
    res = r.get(f'https://api.ironfish.network/users/find?graffiti={name}&with_rank=true')
    res_json = res.json()
    id = res_json['id']

    res = r.get(f'https://api.ironfish.network/users/{id}/metrics?granularity=lifetime')
    res_json = res.json()
    data = {
        "pool1_total_points": res_json['pools']['main']['points'],
        "bug_caught": res_json['metrics']['bugs_caught']['points'],
        "pull_requests_merged": res_json['metrics']['pull_requests_merged']['points'],
        "node_uptime": res_json['metrics']['node_uptime']['points'],
        "send_transaction": res_json['metrics']['send_transaction']['points']
    }
    return data
