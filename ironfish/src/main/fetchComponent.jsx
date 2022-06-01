import React, { useState } from "react";


const FetchUserPointsForTestNet = async (id,func1) => {

    const fetchlink = `https://cors-anywhere.herokuapp.com/https://api.ironfish.network/users/${id}/metrics?granularity=lifetime`
        try {
            await fetch(fetchlink).then(responce => responce.json()).then(data => func1(data))
        }
        catch (error) {
         return error
        }
  };

export const FetchUserData = async (graffiti,userStateUpdate,userPointsStateUpdate,setIsLoading) => {
    
 const fetchlink = `https://cors-anywhere.herokuapp.com/https://api.ironfish.network/users/find?graffiti=${graffiti}&with_rank=true`
     try {
         await fetch(fetchlink).then(responce => responce.json()).then((data) => {
             userStateUpdate(data)
             FetchUserPointsForTestNet(data.id,userPointsStateUpdate)
            })
     }
     catch (error) {
       return error
     }
};