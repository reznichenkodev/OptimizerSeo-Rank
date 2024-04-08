import LinkTable from "../../components/Table/link.tsx";
import PieCharts from "../../components/PieGraph/pie-graph.tsx";
import React, { useState } from "react";
import { Layout } from "antd";
import MainMenu from "../../components/Menu/mainMenu.tsx";
import ReqForm from "../../components/Forms/request-form.tsx";

const LinkAnalyzePage: React.FC = () => {
  interface AnalysisResults {
    links: any;
  }

  const [analysisResults, setAnalysisResults] = useState<AnalysisResults>({
    links: undefined,
  });

  const data = [{ name: "Group A", value: 100 }];

  return (
    <Layout className="site-layout">
      <MainMenu />

      <ReqForm
        setAnalysisResult={setAnalysisResults}
        endpoint="/api/analyze-links"
      />
      {analysisResults.links && (
        <>
          <div className="table-charts">
            <PieCharts data={data} />
            <LinkTable analysisResult={analysisResults} />
          </div>
        </>
      )}
    </Layout>
  );
};

export default LinkAnalyzePage;
