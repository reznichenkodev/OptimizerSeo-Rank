// import React, { useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import ReqForm from "../../components/Forms/request-form.tsx";
// import LinkTable from "../../components/Table/link.tsx";
import LinkTable from "../../components/Table/link.tsx";
// import RobotsTable from "../../components/Table/robots.tsx";
// import TimeTable from "../../components/Table/time.tsx";
import PieCharts from "../../components/PieGraph/pie-graph.tsx";
// import MainMenu from "../../components/Menu/mainMenu.tsx";
// import "./MetaAnalyzePage.css";

// function MetaAnalyzePage() {
//   interface AnalysisResults {
//     meta: any;
//     links: any;
//     robots: any;
//     time: any;
//   }

//   const [analysisResults, setAnalysisResults] = useState<AnalysisResults>({
//     meta: undefined,
//     links: undefined,
//     robots: undefined,
//     time: undefined,
//   });

//   const setTabAnalysisResult = (tab: string, result: string) => {
//     setAnalysisResults((prevResults) => ({
//       ...prevResults,
//       [tab]: result,
//     }));
//   };

//   const data = [{ name: "Group A", value: 100 }];

//   return (
//     <div className="App">
//       <h1>Analyze service</h1>
//       <MainMenu />
//       <Tabs>
//         <TabList>
//           <Tab>Meta Tags</Tab>
//           <Tab>Links</Tab>
//           <Tab>Index pages</Tab>
//           <Tab>Page Load Time</Tab>
//         </TabList>

//         <TabPanel>
//           <ReqForm
//             setAnalysisResult={(result: string) =>
//               setTabAnalysisResult("meta", result)
//             }
//             endpoint="/api/analyze-meta"
//           />
//           {analysisResults.meta && (
//             <>
//               <div className="table-charts">
//                 <MetaTable analysisResult={analysisResults.meta} />
//                 <PieCharts data={data} />
//                 {/* {analysisResults.meta.metaTags.length} */}
//               </div>
//             </>
//           )}
//         </TabPanel>

//         <TabPanel>
//           <ReqForm
//             setAnalysisResult={(result: string) =>
//               setTabAnalysisResult("links", result)
//             }
//             endpoint="/api/analyze-links"
//           />
//           {analysisResults.links && (
//             <>
//               <div className="table-charts">
//                 <LinkTable analysisResult={analysisResults.links} />
//                 <PieCharts data={data} />

//                 {analysisResults.links.links.length}
//               </div>
//             </>
//           )}
//         </TabPanel>
//         <TabPanel>
//           <ReqForm
//             setAnalysisResult={(result: string) =>
//               setTabAnalysisResult("robots", result)
//             }
//             endpoint="/api/analyze-robots"
//           />
//           {analysisResults.robots && (
//             <>
//               <div className="table-charts">
//                 <RobotsTable analysisResult={analysisResults.robots} />
//                 <PieCharts data={data} />
//                 {analysisResults.robots.robots.length}
//               </div>
//             </>
//           )}
//         </TabPanel>
//         <TabPanel>
//           <ReqForm
//             setAnalysisResult={(result: string) =>
//               setTabAnalysisResult("time", result)
//             }
//             endpoint="/api/analyze-time"
//           />
//           {analysisResults.time && (
//             <>
//               <div className="table-charts">
//                 <TimeTable analysisResult={analysisResults.time} />
//                 <PieCharts data={data} />
//               </div>
//             </>
//           )}
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// }

// export default MetaAnalyzePage;

import React, { useState } from "react";
import { Layout } from "antd";
import MainMenu from "../../components/Menu/mainMenu.tsx";
import ReqForm from "../../components/Forms/request-form.tsx";
import RobotsTable from "../../components/Table/robots.tsx";

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
