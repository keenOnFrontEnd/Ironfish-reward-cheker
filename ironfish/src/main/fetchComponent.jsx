const FetchUserPointsForTestNet = async (id,func1,func2) => {

    const fetchlink = `https://cors-anywhere.herokuapp.com/https://api.ironfish.network/users/${id}/metrics?granularity=lifetime`
        try {
            await fetch(fetchlink).then(responce => responce.json()).then(data => func1(data)).then(() => {
                func2(false)
            })
        }
        catch (error) {
         return error
        }
  };

export const FetchUserData = async (graffiti,userStateUpdate,userPointsStateUpdate,setIsLoading) => {
    
 const fetchlink = `https://cors-anywhere.herokuapp.com/https://api.ironfish.network/users/find?graffiti=${graffiti}&with_rank=true`
 setIsLoading(true)
     try {
         await fetch(fetchlink).then(responce => responce.json()).then((data) => {
             userStateUpdate(data)
             FetchUserPointsForTestNet(data.id,userPointsStateUpdate,setIsLoading)
            })
     }
     catch (error) {
       return error
     }
};