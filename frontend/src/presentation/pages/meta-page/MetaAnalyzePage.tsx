import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReqForm from "../../components/Forms/request-form.tsx";
import LinkTable from "../../components/Table/link.tsx";
import MetaTable from "../../components/Table/meta.tsx";
import RobotsTable from "../../components/Table/robots.tsx";
import TimeTable from "../../components/Table/time.tsx";
import PieCharts from "../../components/PieGraph/pie-graph.tsx";
import "./MetaAnalyzePage.css";
import { UrlCounter } from "../../components/PieGraph/utils/url-counter.tsx";

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
      <h1>Analyze service</h1>
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
            <>
              <div className="table-charts">
                {/* <UrlCounter analysisResult={metaAnalysisResult} /> */}
                <MetaTable analysisResult={metaAnalysisResult} />
                <PieCharts data={data} />
              </div>
            </>
          )}
        </TabPanel>

        <TabPanel>
          <ReqForm
            setAnalysisResult={setLinksAnalysisResult}
            endpoint="/api/analyze-links"
          />
          {linksAnalysisResult && (
            <>
              <div className="table-charts">
                {/* <UrlCounter analysisResult={linksAnalysisResult} /> */}
                <LinkTable analysisResult={linksAnalysisResult} />
                <PieCharts data={UrlCounter(linksAnalysisResult)} />
              </div>
            </>
          )}
        </TabPanel>
        <TabPanel>
          <ReqForm
            setAnalysisResult={setIndexAnalysisResult}
            endpoint="/api/analyze-robots"
          />
          {indexAnalysisResult && (
            <>
              <div className="table-charts">
                <RobotsTable analysisResult={indexAnalysisResult} />
                <PieCharts data={data} />
              </div>
            </>
          )}
        </TabPanel>
        <TabPanel>
          <ReqForm
            setAnalysisResult={setTimeAnalysisResult}
            endpoint="/api/analyze-time"
          />
          {timeAnalysisResult && (
            <>
              <div className="table-charts">
                <TimeTable analysisResult={timeAnalysisResult} />
                <PieCharts data={data} />
              </div>
            </>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MetaAnalyzePage;
