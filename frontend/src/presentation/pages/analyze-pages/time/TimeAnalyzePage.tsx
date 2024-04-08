import PieCharts from "../../../components/PieGraph/pie-graph.tsx";
import React, { useState } from "react";
import { Layout } from "antd";
import MainMenu from "../../../components/Menu/mainMenu.tsx";
import ReqForm from "../../../components/Forms/request-form.tsx";
import TimeAnalyze from "../../../components/Table/time.tsx";

const TimeAnalyzePage: React.FC = () => {
  interface AnalysisResults {
    time: any;
  }

  const [analysisResults, setAnalysisResults] = useState<AnalysisResults>({
    time: undefined,
  });

  const data = [{ name: "Group A", value: 100 }];

  return (
    <Layout className="site-layout">
      <MainMenu />
      <ReqForm
        setAnalysisResult={setAnalysisResults}
        endpoint="/api/analyze-time"
      />
      {analysisResults && (
        <>
          <div className="table-charts">
            <PieCharts data={data} />
            <TimeAnalyze analysisResult={analysisResults} />
          </div>
        </>
      )}
    </Layout>
  );
};

export default TimeAnalyzePage;
