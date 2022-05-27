import React, { useState } from "react";


const CustomUserComponent = (props) => {
    console.log(props)
    const pp1 = 210000;
    const pp2 = 105000;
    
    const [moniker, setMoniker] = useState(props.moniker)

      const rank = props.userMetrics.pools.main.rank;
      const total_points = props.userMetrics.pools.main.points;

      const node_uptime = props.userMetrics.metrics.node_uptime.count;
      const node_uptime_reward =  Math.round((props.userMetrics.metrics.node_uptime.points / props.server_metrics.pp1_total_points) * pp1)

      const bugs_caught = props.userMetrics.metrics.bugs_caught.count;
      const bugs_caught_reward =  Math.round((props.userMetrics.metrics.bugs_caught.points / props.server_metrics.pp1_total_points) * pp1)

      const transactions = props.userMetrics.metrics.send_transaction.count;
      const transactions_reward =  Math.round((props.userMetrics.metrics.send_transaction.points / props.server_metrics.pp1_total_points) * pp1)

      const pull_request = props.userMetrics.metrics.pull_requests_merged.count;
      const pull_request_reward =  Math.round((props.userMetrics.metrics.pull_requests_merged.points / props.server_metrics.pp1_total_points) * pp2)

      const user_total_reward = Math.round(node_uptime_reward + bugs_caught_reward + transactions_reward + pull_request_reward)

      return <div className="userContainer">
          <div className="userHeader">Your total testnet reward, <b>{moniker}</b>:</div>
          <div className="rewardContainer"> {user_total_reward} $IRON</div>
          <div className="rewardDetails">
              <span>Hosting Node: <div>{node_uptime_reward} $IRON</div></span>
              <span>Sending Transactions: <div>{transactions_reward} $IRON</div></span>
              <span>Finding Bugs: <div>{bugs_caught_reward} $IRON</div></span>
              <span>Submitting Pull Requests: <div>{pull_request_reward} $IRON</div></span>
          </div>
      </div>

};

export default CustomUserComponent;