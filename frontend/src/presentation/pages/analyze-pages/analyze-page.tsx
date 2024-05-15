import PieCharts from "../../components/PieGraph/pie-graph.tsx";
import React, { useState } from "react";
import { Layout } from "antd";
import ReqForm from "../../components/Forms/request-form.tsx";
import { Tabs } from "antd";
import TimeAnalyze from "../../components/Table/time.tsx";
import TabPane from "antd/es/tabs/TabPane";
import LinkTable from "../../components/Table/link.tsx";
import RobotsTable from "../../components/Table/robots.tsx";
import MetaTable from "../../components/Table/meta.tsx";

const AnalyzePage: React.FC = () => {
  interface AnalysisResults {
    analysisResults: any;
    result: string;
  }

  const [analysisResults, setAnalysisResults] = useState<AnalysisResults>();
  const [current, setCurrent] = useState("");

  const data = [{ name: "Group A", value: 100 }];

  return (
    <Layout className="site-layout">
      <ReqForm setAnalysisResult={setAnalysisResults} />
      <Tabs
        defaultActiveKey="links"
        onChange={(activeKey) => setCurrent(activeKey)}
      >
        <TabPane tab="Links" key="links">
          {analysisResults && (
            <>
              <div className="table-charts">
                <LinkTable analysisResult={analysisResults[2].result} />
                <PieCharts data={data} />
              </div>
            </>
          )}
        </TabPane>
        <TabPane tab="Indexed" key="idexed">
          {analysisResults && (
            <>
              <div className="table-charts">
                <RobotsTable analysisResult={analysisResults[3].result} />
                <PieCharts data={data} />
              </div>
            </>
          )}
        </TabPane>
        <TabPane tab="Meta" key="meta">
          {analysisResults && (
            <>
              <div className="table-charts">
                <MetaTable analysisResult={analysisResults[0].result} />
                <PieCharts data={data} />
              </div>
            </>
          )}
        </TabPane>
        <TabPane tab="Time" key="time">
          {analysisResults && (
            <>
              <div className="table-charts">
                <TimeAnalyze analysisResult={analysisResults[1].result} />
                <PieCharts data={data} />
              </div>
            </>
          )}
        </TabPane>
      </Tabs>
    </Layout>
  );
};

export default AnalyzePage;
