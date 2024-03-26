import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { regexpURL } from "../../utils/regexpURL.tsx";
import Button from "../Buttons/button.tsx";
import "../Forms/form.css";
import "react-toastify/dist/ReactToastify.css";

const ReqForm = ({ setAnalysisResult, endpoint }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!regexpURL(url)) {
      toast.error("URL validation error!");
      return;
    }
    try {
      const response = await axios.post(`http://localhost:3001${endpoint}`, {
        url,
      });
      setAnalysisResult(response.data);
    } catch (error) {
      toast.error("Server error!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <Button type="submit">Анализ</Button>
      <ToastContainer />
    </form>
  );
};

export default ReqForm;
