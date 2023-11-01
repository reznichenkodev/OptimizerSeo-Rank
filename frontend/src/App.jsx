import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Form from "./components/Form";
import Table from "./components/Table";
import "/Users/danilreznicenko/seo-analysis/frontend/src/App.css";

function App() {
  const [metaAnalysisResult, setMetaAnalysisResult] = useState(null);
  const [linksAnalysisResult, setLinksAnalysisResult] = useState(null);
  const [timeAnalysisResult, setTimeAnalysisResult] = useState(null);
  const [indexAnalysisResult, setIndexAnalysisResult] = useState(null);

  return (
    <div className="App">
      <h1>SEO Analyze</h1>
      <Tabs>
        <TabList>
          <Tab>Meta Tags</Tab>
          <Tab>Links</Tab>
          <Tab>Page Load Time</Tab>
          <Tab>Index pages</Tab>
        </TabList>

        <TabPanel>
          <Form
            setAnalysisResult={setMetaAnalysisResult}
            endpoint="/api/analyze-meta"
          />
          {metaAnalysisResult && <Table analysisResult={metaAnalysisResult} />}
        </TabPanel>

        <TabPanel>
          <Form
            setAnalysisResult={setLinksAnalysisResult}
            endpoint="/api/analyze-links"
          />
          {linksAnalysisResult && <Table analysisResult={linksAnalysisResult} />}
        </TabPanel>
        <TabPanel>
          <Form
          setAnalysisResult={setTimeAnalysisResult}
            endpoint="/api/analyze-time"
          />
         {timeAnalysisResult && <Table analysisResult={timeAnalysisResult} />}
        </TabPanel>

        <TabPanel>
          <Form
          setAnalysisResult={setIndexAnalysisResult}
            endpoint="/api/analyze-robots"
          />
         {indexAnalysisResult && <Table analysisResult={indexAnalysisResult} />}
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
