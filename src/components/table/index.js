import { array } from "prop-types";
import React from "react";

// adjustable params
// columns, rows, sortable by coulmn, pagination, background color
const Table = ({ data }) => {
  return (
    <div className="bg-blue-300 rounded-lg m-5">
      <table className="table-fixed m-10">
        <thead>
          <tr>
            <th className="w-1/2 ...">Title</th>
            <th className="w-1/4 ...">Author</th>
            <th className="w-1/4 ...">Views</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, currency, updated }, index) => {
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{currency}</td>
                <td>{updated}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: array,
};

export default Table;
