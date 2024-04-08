import React from "react";

const RobotsTable = ({ analysisResult }) => {
  if (!analysisResult) {
    return null;
  }

  const renderTableRows = () => {
    return analysisResult.robots.map((link, index) => (
      <tr key={index}>
        <td>{link.url}</td>
        <td>{link.indexed}</td>
      </tr>
    ));
  };

  const renderTableHeader = () => {
    return (
      <tr>
        <th>Url</th>
        <th>Indexed</th>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default RobotsTable;
