import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReqForm from "../components/Forms/request-form";
import LinkTable from "../components/Table/link";
import MetaTable from "../components/Table/meta";
import RobotsTable from "../components/Table/robots";
import TimeTable from "../components/Table/time";
import "../pages/MetaAnalyzePage";

function MetaAnalyzePage() {
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
          <ReqForm
            setAnalysisResult={setMetaAnalysisResult}
            endpoint="/api/analyze-meta"
          />
          {metaAnalysisResult && (
            <MetaTable analysisResult={metaAnalysisResult} />
          )}
        </TabPanel>

        <TabPanel>
          <ReqForm
            setAnalysisResult={setLinksAnalysisResult}
            endpoint="/api/analyze-links"
          />
          {linksAnalysisResult && (
            <LinkTable analysisResult={linksAnalysisResult} />
          )}
        </TabPanel>
        <TabPanel>
          <ReqForm
            setAnalysisResult={setIndexAnalysisResult}
            endpoint="/api/analyze-robots"
          />
          {indexAnalysisResult && (
            <RobotsTable analysisResult={indexAnalysisResult} />
          )}
        </TabPanel>
        <TabPanel>
          <ReqForm
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

export default MetaAnalyzePage;
