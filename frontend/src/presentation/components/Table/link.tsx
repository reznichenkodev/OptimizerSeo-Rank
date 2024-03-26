import React from "react";

const LinkTable = ({ analysisResult }) => {
  if (!analysisResult) {
    return null;
  }

  const renderTableRows = () => {
    return analysisResult.links.map((link, index) => (
      <tr key={index}>
        <td>{link.url}</td>
        <td>{link.redirectUrl}</td>
        <td>{link.redirectType}</td>
      </tr>
    ));
  };

  const renderTableHeader = () => {
    return (
      <tr>
        <th>Url</th>
        <th>RedirectUrl</th>
        <th>Response</th>
      </tr>
    );
  };

  return (
    <div>
      <h2>Links Analysis</h2>
      <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default LinkTable;
