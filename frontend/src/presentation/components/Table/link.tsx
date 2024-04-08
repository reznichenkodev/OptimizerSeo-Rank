import React from "react";
import { Table } from "antd";

const LinkTable = ({ analysisResult }) => {
  // Проверяем, существует ли analysisResult и содержит ли он links
  if (!analysisResult || !analysisResult.links) {
    return null; // Если нет, возвращаем null или любой другой компонент-заглушку
  }

  const columns = [
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "RedirectUrl",
      dataIndex: "redirectUrl",
      key: "redirectUrl",
    },
    {
      title: "Response",
      dataIndex: "redirectType",
      key: "redirectType",
    },
  ];

  // Подготовка данных для таблицы
  const data = analysisResult.links.map((link, index) => ({
    key: index,
    url: link.url,
    redirectUrl: link.redirectUrl,
    redirectType: link.redirectType,
  }));

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default LinkTable;
