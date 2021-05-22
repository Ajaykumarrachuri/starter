import React, { useEffect, useState } from "react";
import { request } from "../../library/request";

const Stock = () => {
  const url = "https://random-data-api.com/api/address/random_address";
  const [state, setstate] = useState([]);
  useEffect(async () => {
    const response = await request({
      method: "get",
      url: url,
    });
    setstate(response.data);
  }, []);
  return (
    <div className="text-2xl font-serif font-bold">
      <p>home page</p>
      <span>{JSON.stringify(state, null, 10)}</span>
    </div>
  );
};

export default Stock;
