import { database } from './config';
import { ref, onValue } from "firebase/database"

export const FetchTotalPoints = async (updateTotalPoints,updateTotalPoints2) => {
    const responce = ref(database, 'total_points')
    const responce2 = ref(database, 'total_points2')
    onValue(responce, (snapshot) => {
      const data = snapshot.val()
      updateTotalPoints(data)
    })
    onValue(responce2,(snapshot) => {
      const data = snapshot.val()
      updateTotalPoints2(data)
    })
}



const FetchUserPointsForTestNet = async (id, func1, setError) => {

  const fetchlink = `https://api.allorigins.win/raw?url=https://api.ironfish.network/users/${id}/metrics?granularity=lifetime`
  try {
    await fetch(fetchlink).then(responce => responce.json()).then(data => func1(data))
  }
  catch (error) {
    setError("error")
  }
};

export const FetchUserData = async (graffiti, setUserMetrics, setTotalPoints, setError,) => {

  const fetchlink = `https://api.allorigins.win/raw?url=https://api.ironfish.network/users/find?graffiti=${graffiti}`
  try {
    await fetch(fetchlink).then(responce => responce.json()).then((data) => {
      FetchUserPointsForTestNet(data.id, setUserMetrics, setError, setTotalPoints)
    }).then(() => setTimeout(setTotalPoints(10000001)), 17000)
  }
  catch (error) {
    setError("error")
  }
};