import React, { useEffect, useState } from "react";
import data from '../data.json';
import LogoComponent from "./logo";

const CustomUserComponent = (props) => {
    
    const pp1 = 210000;
    
    const [moniker, setMoniker] = useState(props.moniker)

    useEffect(() => {
        if(props.moniker) {
            setMoniker(props.moniker)
        }
    },[props.moniker])

    if(props.userMetrics.error) {
        return <div className="userContainer errorClass">
           Searching failed <br />
            Check Your Moniker
        </div>
    }

    if (props.isLoading) {
        return <LogoComponent className={props.isLoading === true ? ('') : ('logoFadeOut')} />
    }

    if(props.isSearching) {
        return <div className="userContainer">
        <div className="userHeader">Your total testnet reward, <b>------</b> :</div>
        <div className="rewardContainer"> 0 $IRON</div>
        <div className="rewardDetails">
            <span>Hosting Node: <div> 0 $IRON</div></span>
            <span>Sending Transactions: <div> 0 $IRON</div></span>
            <span>Finding Bugs: <div> 0 $IRON</div></span>
            <span>Submitting Pull Requests: <div> 0 $IRON</div></span>
        </div>
    </div>
    } else {
        const rank = props.userMetrics.pools.main.rank;
      const total_points = props.userMetrics.pools.main.points;

      const node_uptime = props.userMetrics.metrics.node_uptime.count;
      const node_uptime_reward =  Math.round((props.userMetrics.metrics.node_uptime.points / data.total_points) * pp1)

      const bugs_caught = props.userMetrics.metrics.bugs_caught.count;
      const bugs_caught_reward =  Math.round((props.userMetrics.metrics.bugs_caught.points / data.total_points) * pp1)

      const transactions = props.userMetrics.metrics.send_transaction.count;
      const transactions_reward =  Math.round((props.userMetrics.metrics.send_transaction.points / data.total_points) * pp1)

      const pull_request = props.userMetrics.metrics.pull_requests_merged.count;
      const pull_request_reward =  Math.round((props.userMetrics.metrics.pull_requests_merged.points / data.total_points) * pp1)

      const user_total_reward = Math.round(node_uptime_reward + bugs_caught_reward + transactions_reward + pull_request_reward)

      
      return <div className="userContainer">
          <div className="userHeader">Your total testnet reward, <b>{moniker}</b> :</div>
          <div className="rewardContainer"> {user_total_reward} $IRON</div>
          <div className="rewardDetails">
              <span>Hosting Node: <div>{node_uptime_reward} $IRON</div></span>
              <span>Sending Transactions: <div>{transactions_reward} $IRON</div></span>
              <span>Finding Bugs: <div>{bugs_caught_reward} $IRON</div></span>
              <span>Submitting Pull Requests: <div>{pull_request_reward} $IRON</div></span>
          </div>
      </div>
    }

      

};

export default CustomUserComponent;