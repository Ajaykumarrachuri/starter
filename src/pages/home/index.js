import React, { useEffect, useState } from "react";
import { request } from "../../library/request";

const home = () => {
  const url = "https://random-data-api.com/api/address/random_address";
  const [state, setstate] = useState([]);
  useEffect(async () => {
    const response = await request(url);
    console.log(response);
    setstate(response.data);
  }, []);
  return (
    <div className="text-2xl font-serif font-bold">
      <p>home page</p>
      <span>{JSON.stringify(state, null, 10)}</span>
    </div>
  );
};

export default home;
