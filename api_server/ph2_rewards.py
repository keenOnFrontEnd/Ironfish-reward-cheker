import requests as r


def pool1():
    do = True
    start = 190
    sum = 0

    while do:
        req = r.get('https://api.ironfish.network/users?before='+str(start)+'&limit=100')
        req_json = req.json()
        data = req_json['data']
        if len(data) != 0:
            for i in range(len(data)):
                sum += data[i]['total_points']
            start = data[0]['id']
            # print('starting id is ' + str(start))
        else:
            do = False
    # print('total sum is ' + str(sum))
