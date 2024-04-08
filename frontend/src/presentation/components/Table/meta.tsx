import React from "react";
import { Table } from "antd";

const MetaTable = ({ analysisResult }) => {
  if (!analysisResult || !analysisResult.metaTags) {
    return null; // Если нет, возвращаем null или любой другой компонент-заглушку
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
  ];

  // Подготовка данных для таблицы
  const data = analysisResult.metaTags.map((tag, index) => ({
    key: index,
    name: tag.name,
    content: tag.content,
  }));

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MetaTable;
