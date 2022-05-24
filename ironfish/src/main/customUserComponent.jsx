import React from "react";


const CustomUserComponent = (props) => {
  if (props) {

    const pp1 = 210000;
    const pp2 = 105000;
    

      const rank = props.data.pools.main.rank;
      const total_points = props.data.pools.main.points;

      const node_uptime = props.data.metrics.node_uptime.count;
      const node_uptime_reward = (props.data.metrics.node_uptime.points / props.server_metrics.pp1_total_points) * pp1

      const bugs_caught = props.data.metrics.bugs_caught.count;
      const bugs_caught_reward = (props.data.metrics.bugs_caught.points / props.server_metrics.pp1_total_points) * pp1

      const transactions = props.data.metrics.send_transaction.count;
      const transactions_reward = (props.data.metrics.send_transaction.points / props.server_metrics.pp1_total_points) * pp1

      const pull_request = props.data.metrics.pull_requests_merged.count;
      const pull_request_reward = (props.data.metrics.pull_requests_merged.points / props.server_metrics.pp1_total_points) * pp2

      const user_total_reward = node_uptime_reward

      return <div>
          <span>
              user rank - {rank} <br />
              user total points - {total_points} <br />
              user total reward - {user_total_reward}
          </span>
      </div>

} else {
    return <></>;
  }
};

export default CustomUserComponent;