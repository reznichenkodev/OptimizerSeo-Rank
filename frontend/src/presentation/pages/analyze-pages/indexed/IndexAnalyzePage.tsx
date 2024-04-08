import PieCharts from "../../../components/PieGraph/pie-graph.tsx";
import React, { useState } from "react";
import { Layout } from "antd";
import MainMenu from "../../../components/Menu/mainMenu.tsx";
import ReqForm from "../../../components/Forms/request-form.tsx";
import RobotsTable from "../../../components/Table/robots.tsx";

const IndexAnalyzePage: React.FC = () => {
  interface AnalysisResults {
    robots: any;
  }

  const [analysisResults, setAnalysisResults] = useState<AnalysisResults>({
    robots: undefined,
  });

  const data = [{ name: "Group A", value: 100 }];

  return (
    <Layout className="site-layout">
      <MainMenu />

      <ReqForm
        setAnalysisResult={setAnalysisResults}
        endpoint="/api/analyze-robots"
      />
      {analysisResults.robots && (
        <>
          <div className="table-charts">
            <PieCharts data={data} />
            <RobotsTable analysisResult={analysisResults} />
          </div>
        </>
      )}
    </Layout>
  );
};

export default IndexAnalyzePage;
