import React, { useEffect, useState } from "react";
import { FetchTotalPoints, FetchUserData } from "./fetchComponent";
import CustomUserComponent from "./customUserComponent";
import LogoComponent from "./logo";

const IndexComponent = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [userMetrics, setUserMetrics] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [totalPoints2, setTotalPoints2] = useState(0)
  const [userMoniker, setUserMoniker] = useState();
  const [userMonikerUploaded, setUserMonikerUploaded] = useState();
  const [error, setError] = useState([]);
  

  const [errorCatched, setErrorCatched] = useState(false);


  const isMobile = window.matchMedia(
    "only screen and (max-width: 1026px)"
  ).matches;

  const [isSearching, setIsSearching] = useState(false);

  const search = () => {
    setIsSearching(true)
    setUserMetrics([]);
    FetchTotalPoints(setTotalPoints,setTotalPoints2)
    FetchUserData(
      userMoniker,
      setUserMetrics,
      setTotalPoints,
      setError
    )
    setUserMonikerUploaded(userMoniker);
    setErrorCatched(false);
    setError([]);
  };

  useEffect(() => {
    if (userMetrics.metrics) {
      setIsSearching(false);
    }
  }, [userMetrics])

  useEffect(() => {
    if(userMetrics.metrics) {
      setIsLoading(false)
    }
  }, [userMetrics])

  useEffect(() => {
    if (error === "error") {
      setErrorCatched(true);
    }
  }, [error]);
  
  if (isMobile) {
    return (
      <div className="desctopSupport">
        Currently, we support only desktop website version.
      </div>
    );
  }
  return (
    <div className="container">
      <div className="mainText">IronFish Rewards Checker</div>

      <div
        className={errorCatched ? "searchContainerError" : "searchContainer"}
      >
        <input
          placeholder="To calculate rewards, put graffiti here"
          onChange={(e) => setUserMoniker(e.target.value)}
          type="search"
        />
        <button type="submit" onClick={() => search()}>
          Search
        </button>
      </div>

      {isLoading ? (
        <LogoComponent className={isLoading === true ? "" : "logoFadeOut"} />
      ) : (
        <CustomUserComponent
          errorCatched={errorCatched}
          totalPoints={totalPoints}
          totalPoints2={totalPoints2}
          userMetrics={userMetrics.metrics}
          moniker={userMonikerUploaded}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
      )}
    </div>
  );
};

export default IndexComponent
