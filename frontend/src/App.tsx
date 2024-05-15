import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./presentation/pages/main-page/MainPage.tsx";
import AnalyzePage from "./presentation/pages/analyze-pages/analyze-page.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/analyze-page" element={<AnalyzePage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
