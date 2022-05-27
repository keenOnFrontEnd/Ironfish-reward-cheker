import React, { useEffect, useState } from "react";
import axios from "axios";
import { FetchUserData, server_metric, test_state } from "./fetchComponent";
import CustomUserComponent from "./customUserComponent";
import styles from "../css/main.css";
import LogoComponent from "./logo";

const IndexComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userState, setUserState] = useState([]);
  const [userMetrics, setUserMetrics] = useState([]);
  const [userMoniker, setUserMoniker] = useState();

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
    FetchUserData(userMoniker, setUserState, setUserMetrics, setIsLoading);
  };

  console.log(isLoading);
  console.log(userState);
  console.log(userMetrics);

  return (
    <div className="container">
      <div className="mainText">IronFish Rewards Checker</div>

      <div className="searchContainer">
        <input
          placeholder="To calculate rewards, put graffiti here"
          onChange={(e) => setUserMoniker(e.target.value)}
          type="search"
        />
        <button onClick={() => search()}>Search</button>
      </div>

      {isLoading === false ? (
        <CustomUserComponent
          userMetrics={userMetrics}
          server_metrics={server_metric}
          moniker={userMoniker}
        />
      ) : (
        <LogoComponent className={isLoading === true ? ('') : ('logoFadeOut')} />
      )}
    </div>
  );
};

export default IndexComponent;
