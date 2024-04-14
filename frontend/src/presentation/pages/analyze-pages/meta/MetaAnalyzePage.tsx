import MetaTable from "../../../components/Table/meta.tsx";
import PieCharts from "../../../components/PieGraph/pie-graph.tsx";
import React, { useState } from "react";
import { Layout } from "antd";
import MainMenu from "../../../components/Menu/mainMenu.tsx";
import ReqForm from "../../../components/Forms/request-form.tsx";

const MetaAnalyzePage: React.FC = () => {
  interface AnalysisResults {
    meta: any;
  }
  const [current, setCurrent] = useState("meta");
  const [analysisResults, setAnalysisResults] = useState<AnalysisResults>({
    meta: undefined,
  });

  const data = [{ name: "Group A", value: 100 }];

  return (
    <Layout className="site-layout">
      <MainMenu current={current} setCurrent={setCurrent} />
      <ReqForm
        setAnalysisResult={setAnalysisResults}
        endpoint="/api/analyze-meta"
      />
      {analysisResults && (
        <>
          <div className="table-charts">
            <PieCharts data={data} />
            <MetaTable analysisResult={analysisResults} />
          </div>
        </>
      )}
    </Layout>
  );
};

export default MetaAnalyzePage;
