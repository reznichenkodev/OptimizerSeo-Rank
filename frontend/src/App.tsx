import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MetaAnalyzePage from "./presentation/pages/meta-page/MetaAnalyzePage.tsx";
import MainPage from "./presentation/pages/main-page/MainPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/analyze" element={<MetaAnalyzePage />} />
      </Routes>
    </Router>
  );
}

export default App;
