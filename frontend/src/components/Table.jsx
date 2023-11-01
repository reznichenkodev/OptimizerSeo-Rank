import React from "react";

const Table = ({ analysisResult, inputDomain }) => {
  if (!analysisResult) {
    return null;
  }

  const renderTableRows = () => {
    if (analysisResult.metaTags) {
      // Обработка мета-тегов
      return analysisResult.metaTags.map((tag, index) => (
        <tr key={index}>
          <td>{tag.name}</td>
          <td>{tag.content}</td>
          <td>{tag.content ? tag.content.length : 0}</td>
        </tr>
      ));
    } if (analysisResult.links) {
      // Обработка ссылок
      return analysisResult.links.map((link, index) => (
        <tr key={index}>
          <td>{link.url}</td>
          <td>{link.redirectUrl}</td>
          <td>{link.redirectType}</td>
        </tr>
      ));
    } if (analysisResult.loadTime) {

      return <tr>
    <td><p>Time taken to load page: {analysisResult.loadTime} second</p></td>
  </tr>
      
    } else if (analysisResult.index) {
      // Обработка ссылок
      return analysisResult.index.map((link, index) => (
        <tr key={index}>
          <td>{link.url}</td>
          {/* <td>{link.indexed ? true : false}</td> */}
        </tr>
      ));
    }
    return null;
  };

  const renderTableHeader = () => {
    if (analysisResult.metaTags) {
      // Заголовки для мета-тегов
      return (
        <tr>
          <th>Name</th>
          <th>Content</th>
          <th>Character Count</th>
        </tr>
      );
    } if (analysisResult.links) {
      // Заголовок для ссылок
      return (
        <tr>
          <th>Url</th>
          <th>RedirectUrl</th>
          <th>Response</th>
        </tr>
      );
      
    }  if (analysisResult.index) {
      // Заголовок для index ссылок
      return (
        <tr>
          <th>Url</th>
          <th>Indexed</th>
        </tr>
      );
    }
    return null;
  };

  return (
    <div>
      <h2>{analysisResult.metaTags ? "Meta Tags" : "Links" } Analysis</h2>
      <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableRows()}</tbody>
        {analysisResult.metaTags && (
          <tfoot>
            <tr>
              <td colSpan="3">
                Total Characters: {analysisResult.characterCount}
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default Table;
