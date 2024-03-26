import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Form from "./components/Form";
import LinkTable from "./components/Table/link_table";
import MetaTable from "./components/Table/meta_table";
import RobotsTable from "./components/Table/robots_table";
import TimeTable from "./components/Table/time_table";
import "../src/App.css";

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
          <Tab>Index pages</Tab>
          <Tab>Page Load Time</Tab>
        </TabList>

        <TabPanel>
          <Form
            setAnalysisResult={setMetaAnalysisResult}
            endpoint="/api/analyze-meta"
          />
          {metaAnalysisResult && (
            <MetaTable analysisResult={metaAnalysisResult} />
          )}
        </TabPanel>

        <TabPanel>
          <Form
            setAnalysisResult={setLinksAnalysisResult}
            endpoint="/api/analyze-links"
          />
          {linksAnalysisResult && (
            <LinkTable analysisResult={linksAnalysisResult} />
          )}
        </TabPanel>
        <TabPanel>
          <Form
            setAnalysisResult={setIndexAnalysisResult}
            endpoint="/api/analyze-robots"
          />
          {indexAnalysisResult && (
            <RobotsTable analysisResult={indexAnalysisResult} />
          )}
        </TabPanel>
        <TabPanel>
          <Form
            setAnalysisResult={setTimeAnalysisResult}
            endpoint="/api/analyze-time"
          />
          {timeAnalysisResult && (
            <TimeTable analysisResult={timeAnalysisResult} />
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
