import React, {  useEffect, useState } from "react";
import axios from "axios";
import { FetchUserData, test_state } from "./fetchComponent";
import CustomUserComponent from "./customUserComponent";
import LogoComponent from "./logo";
const IndexComponent = () => {


  const [isLoading, setIsLoading] = useState(true);
  const [userState, setUserState] = useState([]);
  const [userMetrics, setUserMetrics] = useState([]);
  const [userMoniker, setUserMoniker] = useState();
  const [userMonikerUploaded,setUserMonikerUploaded] = useState();
  const isMobile = window.matchMedia("only screen and (max-width: 1026px)").matches;




  const search = () => {
    FetchUserData(userMoniker, setUserState, setUserMetrics, setIsLoading);
    setUserMonikerUploaded(userMoniker)
  };

  useEffect(() => {
    if(userMetrics.user_id || userMetrics.error) {
      setIsLoading(false)
    }
  },[userMetrics])

if(isMobile) {
  return <div className="desctopSupport">
    Currently, we support only desktop website version.
  </div>
}

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
          moniker={userMonikerUploaded}
        />
      ) : (
        <LogoComponent className={isLoading === true ? ('') : ('logoFadeOut')} />
      )}
    </div>
  );
};

export default IndexComponent;
