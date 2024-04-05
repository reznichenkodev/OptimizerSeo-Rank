// import React from "react";

export const UrlCounter = ({ analysisResult }: any) => {
  if (!analysisResult) {
    return null;
  }

  const countRedirectingUrls = analysisResult;
  console.log(countRedirectingUrls);
  return [{ name: "Group A", value: countRedirectingUrls }];
};
