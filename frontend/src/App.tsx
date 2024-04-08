import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TimeAnalyzePage from "./presentation/pages/analyze-pages/time/TimeAnalyzePage.tsx";
import IndexAnalyzePage from "./presentation/pages/analyze-pages/indexed/IndexAnalyzePage.tsx";
import LinkAnalyzePage from "./presentation/pages/analyze-pages/link/LinkAnalyzePage.tsx";
import MetaAnalyzePage from "./presentation/pages/analyze-pages/meta/MetaAnalyzePage.tsx";
import MainPage from "./presentation/pages/main-page/MainPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/meta" element={<MetaAnalyzePage />} />
        <Route path="/links" element={<LinkAnalyzePage />} />
        <Route path="/indexed" element={<IndexAnalyzePage />} />
        <Route path="/time" element={<TimeAnalyzePage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
