import requests as r


def pool1():
    do = True
    start = 190
    sum = 0

    while do:
        res = r.get('https://api.ironfish.network/users?before='+str(start)+'&limit=100')
        res_json = res.json()
        data = res_json['data']
        if len(data) != 0:
            print('starting id is ' + str(start))
            for i in range(len(data)):
                sum += data[i]['total_points']
            start = data[0]['id']
        else:
            do = False

    total_points = {
        "total_points": sum
    }

    with open('total_points.txt', 'w') as file:
        file.write(str(total_points))
