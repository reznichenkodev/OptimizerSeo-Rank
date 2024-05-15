import React from "react";
import { Table } from "antd";

const MetaTable = ({ analysisResult }) => {
  if (!analysisResult || !analysisResult.metaTags) {
    return null;
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "property",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
  ];

  const data = analysisResult.metaTags.map((tag, index) => ({
    key: index,
    name: tag.name,
    property: tag.property,
    content: tag.content,
  }));

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MetaTable;
