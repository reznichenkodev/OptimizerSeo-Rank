import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReqForm from "../../components/Forms/request-form.tsx";
import LinkTable from "../../components/Table/link.tsx";
import MetaTable from "../../components/Table/meta.tsx";
import RobotsTable from "../../components/Table/robots.tsx";
import TimeTable from "../../components/Table/time.tsx";
import "./MetaAnalyzePage.css";
import PieCharts from "../../components/PieGraph/pie-graph.jsx";

function MetaAnalyzePage() {
  const [metaAnalysisResult, setMetaAnalysisResult] = useState(null);
  const [linksAnalysisResult, setLinksAnalysisResult] = useState(null);
  const [timeAnalysisResult, setTimeAnalysisResult] = useState(null);
  const [indexAnalysisResult, setIndexAnalysisResult] = useState(null);

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

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
          <PieCharts data={data} />
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
