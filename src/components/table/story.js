import React from "react";

import Table from "./index";

export default {
  component: Table,
  title: "Table",
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
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
  data: [],
};
