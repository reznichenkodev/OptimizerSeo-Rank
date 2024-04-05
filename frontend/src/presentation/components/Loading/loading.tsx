import React from "react";
import OrbitProgress from "react-loading-indicators/dist/OrbitProgress";
import "../Loading/loading.css";

const Loading = () => (
  <div className="loading-state">
    <OrbitProgress
      variant="track-disc"
      color="#4d4766"
      size="large"
      text="Loading"
      textColor="#000000"
    />
  </div>
);

export default Loading;
