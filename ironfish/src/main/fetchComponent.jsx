import React, { useState } from "react";


const FetchUserPointsForTestNet = (id,func1) => {

    // const [userMetricsError, setUserMetricsError] = useState()
    const fetchlink = `https://cors-anywhere.herokuapp.com/https://api.ironfish.network/users/${id}/metrics?granularity=lifetime`

    async function fetchingData () {
        try {
            fetch(fetchlink).then(responce => responce.json()).then(data => {
                func1(data) 
                console.log(data)})
        }
        catch (error) {
            // setUserMetricsError(error)
            // console.log(userMetricsError)        
        }
    }
    
    fetchingData()
    return 0
  };

export const FetchUserData = (graffiti,userStateUpdate,userPointsStateUpdate,setIsLoading) => {
    
// const [user, setUser] = useState()
 const fetchlink = `https://cors-anywhere.herokuapp.com/https://api.ironfish.network/users/find?graffiti=${graffiti}&with_rank=true`

 async function fetchData () {
     try {
         fetch(fetchlink).then(responce => responce.json()).then(data => {
             userStateUpdate(data)
             FetchUserPointsForTestNet(data.id,userPointsStateUpdate)
            }).then(() => setIsLoading(false))
     }
     catch (error) {
        //  setUserStateError(error)
        //  console.log(userStateError)
     }
 }

 fetchData()

 return 0
};



export const test_state = {
    "user_id": 63181,
    "granularity": "lifetime",
    "points": 30994,
    "pools": {
      "main": {
        "rank": 3,
        "points": 30994,
        "count": 30760
      },
      "code": {
        "rank": 4963,
        "points": 0,
        "count": 0
      }
    },
    "node_uptime": {
      "total_hours": 8,
      "last_checked_in": "2022-05-24T17:50:36.462Z"
    },
    "metrics": {
      "blocks_mined": {
        "count": 0,
        "points": 0
      },
      "bugs_caught": {
        "count": 0,
        "points": 0
      },
      "community_contributions": {
        "count": 0,
        "points": 0
      },
      "pull_requests_merged": {
        "count": 0,
        "points": 0
      },
      "social_media_contributions": {
        "count": 0,
        "points": 0
      },
      "node_uptime": {
        "count": 26,
        "points": 260
      },
      "send_transaction": {
        "count": 30734,
        "points": 30734
      }
    }
  }
export const test_user_state = {
    "id": 63181,
    "country_code": "DEU",
    "graffiti": "cryptofermer",
    "total_points": 0,
    "created_at": "2022-05-24T16:08:28.240Z",
    "rank": 57215
};

export const server_metric = {
    "pp1_total_points": 300000,
    "pp2_total_points": 0
}
