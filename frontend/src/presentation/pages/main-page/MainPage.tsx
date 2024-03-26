import React from "react";
import Button from "../../components/Buttons/button.tsx";
import { useNavigate } from "react-router-dom";
import "../main-page/MainPage.css";
import Card from "../../components/CardProps/Card.tsx";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/analyze");
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
      <div className="card-description">
        <Card
          title="Мета-анализ"
          description="Первая вкладка погружается в мета-теги страницы, предоставляя подробную информацию о заголовках, описаниях и ключевых словах."
          additionalContent={
            <p>
              Это позволяет легко проверить и оптимизировать мета-информацию для
              повышения привлекательности страницы в поисковых результатах.
            </p>
          }
        />
        <Card
          title="Редиректы"
          description="Вторая вкладка фокусируется на анализе ссылок и редиректов, помогая выявить потенциальные проблемы с перенаправлениями."
          additionalContent={
            <p>
              Это важно для обеспечения правильной навигации и предотвращения
              нежелательных потерь трафика.
            </p>
          }
        />
        <Card
          title="Индексация"
          description="Третья вкладка сканирует страницу для выявления ссылок, определяя их статус индексации."
          additionalContent={
            <p>
              Таким образом, можно эффективно контролировать, какие части
              контента подлежат индексации поисковыми системами.
            </p>
          }
        />
      </div>
    </div>
  );
};

export default MainPage;
