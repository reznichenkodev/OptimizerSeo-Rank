import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { regexpURL } from "../../utils/regexpURL.tsx";
import { Button, Form, Input } from "antd";
import Loading from "../Loading/loading.tsx";
import "../Forms/form.css";
import "react-toastify/dist/ReactToastify.css";

const ReqForm = ({ setAnalysisResult, endpoint }) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!regexpURL(url)) {
      toast.error("URL validation error!");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`http://localhost:3001${endpoint}`, {
        url,
      });
      setAnalysisResult(response.data);
    } catch (error) {
      toast.error("Server error!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form layout="vertical" onFinish={handleSubmit} className="form">
        <Form.Item
          name="URL"
          label="Enter URL:"
          rules={[{ required: true }, { type: "url", warningOnly: true }]}
        >
          <Input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" disabled={isLoading}>
          Анализ
        </Button>
        <ToastContainer />
      </Form>
      {isLoading && <Loading />}
    </>
  );
};

export default ReqForm;
