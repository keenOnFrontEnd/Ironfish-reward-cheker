import React, {  useState } from "react";
import axios from "axios";
import { FetchUserData, server_metric, test_state } from "./fetchComponent";
import CustomUserComponent from "./customUserComponent";

const IndexComponent = () => {


  const [isLoading, setIsLoading] = useState();
  const [userState, setUserState] = useState();
  const [userMetrics,setUserMetrics] = useState();
  const [userMoniker, setUserMoniker] = useState()

  // async function fetchData() {
  //   try {
  //     await fetch(
  //       `https://cors-anywhere.herokuapp.com/https://api.ironfish.network/users?order_by=rank&limit=100`
  //     )
  //       .then((responce) => responce.json())
  //       .then((data) => setUserState(data));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const search = () => {
    FetchUserData(userMoniker,setUserState,setUserMetrics,setIsLoading)
  }

  console.log(userState)
  console.log(userMetrics)
  console.log(isLoading)

  // console.log(searchData)

  return <div>
    <input placeholder="put your graffiti here" onChange={(e) => setUserMoniker(e.target.value)} />
    <button onClick={() => search()}>Find</button>

    <CustomUserComponent data={test_state} server_metrics={server_metric}/>
  </div>;
};

export default IndexComponent;
