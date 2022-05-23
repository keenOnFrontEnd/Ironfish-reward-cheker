import React, { useEffect, useState } from "react";
import axios from "axios";

const IndexComponent = () => {
  // const [isLoading, setIsLoading] = useState()
  useEffect(() => {
    async function fetchData() {
      try {
        await fetch(
          `https://cors-anywhere.herokuapp.com/api.ironfish.network/users?order_by=rank&limit=100`,
          {
            headers: {
              'origin': 'http://localhost:3000/'
            }
          }
        )
          .then((responce) => responce.json())
          .then((data) => console.log(data));
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  //  console.log(isLoading)

  return <div>test</div>;
};

export default IndexComponent;
