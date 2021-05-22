import React, { useEffect, useState, useMemo } from "react";
import Table from "../../components/table";
import { request } from "../../library/request";

const home = () => {
  const [data, setData] = useState([]);
  const [isloading, setloading] = useState(false);
  const columns = useMemo(
    () => [
      {
        Header: "data-table",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Currency",
            accessor: "currency",
          },
          {
            Header: "Updated",
            accessor: "updated",
          },
        ],
      },
    ],
    []
  );
  useEffect(async () => {
    setloading(true);
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
    setData(response.data.tickers);
    setloading(false);
  }, []);
  return (
    <div className="text-2xl font-serif font-bold">
      {!isloading && <Table columns={columns} data={data} />}
    </div>
  );
};

export default home;
