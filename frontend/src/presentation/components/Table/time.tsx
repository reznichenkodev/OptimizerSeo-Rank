import React from "react";
import type { StatisticProps } from "antd";
import { Col, Row, Statistic } from "antd";

const TimeAnalyze = ({ analysisResult }) => {
  if (!analysisResult) {
    return null;
  }

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic
          title="Time taken to load page:"
          value={analysisResult.loadTime}
          style={{ margin: "20px" }}
        />
      </Col>
    </Row>
  );
};

export default TimeAnalyze;
