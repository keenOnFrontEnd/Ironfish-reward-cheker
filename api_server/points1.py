import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import requests as r


cred_obj = firebase_admin.credentials.Certificate('./key.json')
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL':"https://ironfish-rewards-checker-default-rtdb.europe-west1.firebasedatabase.app/"
	})


ref = db.reference("/")
total_points = ref.get()

def pool1():
    do = True
    start = 190
    sum = 0
    total_points = {
        "total_points" : sum
    }
    try:
          while do:
            res = r.get('https://api.ironfish.network/users?before='+str(start)+'&limit=100')
            res_json = res.json()
            if 'statusCode' in res_json:
              start = start + 100
            else:
              data = res_json['data']
              print('starting id is ' + str(start))
              for i in range(len(data)):
                 sum += data[i]['total_points']
              start = data[0]['id']
    finally:
            total_points = {
                "total_points": sum
                }
            print(str(total_points))
            ref.update(total_points)

pool1()
