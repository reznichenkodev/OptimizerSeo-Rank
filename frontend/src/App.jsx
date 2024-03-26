import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MetaAnalyzePage from "./presentation/pages/MetaAnalyzePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MetaAnalyzePage />} />
      </Routes>
    </Router>
  );
}

export default App;
