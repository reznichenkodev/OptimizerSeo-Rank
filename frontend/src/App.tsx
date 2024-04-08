import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MetaAnalyzePage from "./presentation/pages/meta-page/MetaAnalyzePage.tsx";
import MainPage from "./presentation/pages/main-page/MainPage.tsx";
import LinkAnalyzePage from "./presentation/pages/link-page/LinkAnalyzePage.tsx";
import IndexAnalyzePage from "./presentation/pages/indexed-page/IndexAnalyzePage.tsx";
import TimeAnalyzePage from "./presentation/pages/time-page/TimeAnalyzePage.tsx";

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
