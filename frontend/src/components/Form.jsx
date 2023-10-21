import React, { useState } from "react";
import axios from "axios";

const Form = ({ setAnalysisResult, endpoint }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001${endpoint}`, {
        url,
      });
      setAnalysisResult(response.data);
    } catch (error) {
      console.error(error);
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
      <button type="submit">Анализ</button>
    </form>
  );
};

export default Form;
