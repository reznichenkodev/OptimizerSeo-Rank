import React from "react";

const TimeTable = ({ analysisResult }) => {
  if (!analysisResult) {
    return null;
  }

  return (
    <div>
      <p>Time taken to load page: {analysisResult.loadTime} second</p>
    </div>
  );
};

export default TimeTable;
