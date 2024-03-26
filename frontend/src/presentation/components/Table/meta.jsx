import React from "react";

const MetaTable = ({ analysisResult }) => {
  if (!analysisResult) {
    return null;
  }

  const renderTableRows = () => {
    return analysisResult.metaTags.map((tag, index) => (
      <tr key={index}>
        <td>{tag.name}</td>
        <td>{tag.content}</td>
        <td>{tag.content ? tag.content.length : 0}</td>
      </tr>
    ));
  };

  const renderTableHeader = () => {
    return (
      <tr>
        <th>Name</th>
        <th>Content</th>
        <th>Character Count</th>
      </tr>
    );
  };

  return (
    <div>
      <h2>Meta Tags Analysis</h2>
      <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default MetaTable;
