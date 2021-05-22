import React, { useEffect, useState } from "react";
import Table from "../../components/table";
import { request } from "../../library/request";

const home = () => {
  const [state, setstate] = useState({ tickers: [] });
  useEffect(async () => {
    const response = await request({
      method: "GET",
      url: "https://api.polygon.io/v2/reference/tickers",
      params: {
        sort: "ticker",
        perpage: "50",
        page: "1",
        apiKey: "QpQBMRyMdHpMPBQzbSRpRfpRvJVW2xxp",
      },
    });
    console.log(response);
    setstate(response.data);
  }, []);
  return (
    <div className="text-2xl font-serif font-bold">
      <Table data={state.tickers} />
    </div>
  );
};

export default home;
