import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Form from './components/Form';
import Table from './components/Table';
import '/Users/danilreznicenko/seo-analysis/frontend/src/App.css'

function App() {
  const [metaAnalysisResult, setMetaAnalysisResult] = useState(null);
  const [linksAnalysisResult, setLinksAnalysisResult] = useState(null);

  return (
    <div className="App">
      <h1>SEO Analyze</h1>
      <Tabs>
        <TabList>
          <Tab>Meta Tags</Tab>
          <Tab>Links</Tab>
        </TabList>

        <TabPanel>
          <Form setAnalysisResult={setMetaAnalysisResult} endpoint="/api/analyze-meta" />
          {metaAnalysisResult && <Table analysisResult={metaAnalysisResult} />}
        </TabPanel>

        <TabPanel>
  <Form setAnalysisResult={setLinksAnalysisResult} endpoint="/api/analyze-links" />
  {linksAnalysisResult && (
    <div>
      <h2>Links Analysis</h2>
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Redirect URL</th>
            <th>Redirect Type</th>
          </tr>
        </thead>
        <tbody>
          {linksAnalysisResult.map((link, index) => (
            <tr key={index}>
              <td>{link.url}</td>
              <td>{link.redirectUrl}</td>
              <td>{link.redirectType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
