import React from "react";


const CustomUserComponent = (props) => {
    console.log(props)
    const pp1 = 210000;
    const pp2 = 105000;
    

      const rank = props.userMetrics.pools.main.rank;
      const total_points = props.userMetrics.pools.main.points;

      const node_uptime = props.userMetrics.metrics.node_uptime.count;
      const node_uptime_reward = (props.userMetrics.metrics.node_uptime.points / props.server_metrics.pp1_total_points) * pp1

      const bugs_caught = props.userMetrics.metrics.bugs_caught.count;
      const bugs_caught_reward = (props.userMetrics.metrics.bugs_caught.points / props.server_metrics.pp1_total_points) * pp1

      const transactions = props.userMetrics.metrics.send_transaction.count;
      const transactions_reward = (props.userMetrics.metrics.send_transaction.points / props.server_metrics.pp1_total_points) * pp1

      const pull_request = props.userMetrics.metrics.pull_requests_merged.count;
      const pull_request_reward = (props.userMetrics.metrics.pull_requests_merged.points / props.server_metrics.pp1_total_points) * pp2

      const user_total_reward = node_uptime_reward

      return <div>
          <span>
              user rank - {rank} <br />
              user total points - {total_points} <br />
              user total reward - {user_total_reward} <br />
          </span>
      </div>

};

export default CustomUserComponent;