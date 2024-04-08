import React from "react";
import { Table } from "antd";

const RobotsTable = ({ analysisResult }) => {
  if (!analysisResult || !analysisResult.robots) {
    return null;
  }

  // Define the columns for the table
  const columns = [
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Indexed",
      dataIndex: "indexed",
      key: "indexed",
    },
  ];

  // Prepare the data for the table
  const data = analysisResult.robots.map((link, index) => ({
    key: index,
    url: link.url,
    indexed: link.indexed,
  }));

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RobotsTable;
