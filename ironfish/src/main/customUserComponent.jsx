import React, { useEffect, useState } from "react";

const CustomUserComponent = (props) => {
 
    const pp1 = 210000;
    const pp2 = 105000;

    const [moniker, setMoniker] = useState(props.moniker)

    useEffect(() => {
        if(props.moniker) {
            setMoniker(props.moniker)
        }
    },[props.moniker])

    if(props.errorCatched === true) {
        return <div className="userContainer errorClass">
           Searching failed <br />
            Check Your Moniker
        </div>
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


        const node_uptime_reward =  Math.round((props.userMetrics.node_uptime.points / props.totalPoints) * pp1)
        
      const bugs_caught_reward =  Math.round((props.userMetrics.bugs_caught.points / props.totalPoints) * pp1)

      const transactions_reward =  Math.round((props.userMetrics.send_transaction.points / props.totalPoints) * pp1)

      const pull_request_reward =  Math.round((props.userMetrics.pull_requests_merged.points / props.totalPoints2) * pp2)

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