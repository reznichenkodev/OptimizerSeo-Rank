import React from "react";
import Button from "../../components/Buttons/button.tsx";
import { useNavigate } from "react-router-dom";
import "../main-page/MainPage.css";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/meta");
  };

  return (
    <div className="main-page">
      <h1>Ceо анализ</h1>
      <p className="sub-title">
        Это инструмент для комплексного анализа веб-страницы с целью оптимизации
        ее поисковой видимости. Проект предоставляет удобный интерфейс,
        разделенный на четыре вкладки, каждая из которых обеспечивает уникальный
        аспект SEO-анализа.
      </p>
      <Button onClick={handleButtonClick}>К анализу</Button>
    </div>
  );
};

export default MainPage;
