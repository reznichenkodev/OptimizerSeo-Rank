import React from "react";
import Button from "../../components/Buttons/button.tsx";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

import { Card, Space } from "antd";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("./analyze-page");
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

      <div className="sub-title">
        <Space direction="horizontal" size={16}>
          <Card
            title="Мета-анализ"
            extra={<a href="./analyze-page">More</a>}
            style={{ width: 300, height: 200 }}
          >
            <p>
              Это позволяет легко проверить и оптимизировать мета-информацию для
              повышения привлекательности страницы в поисковых результатах.
            </p>
          </Card>
          <Card
            title="Редиректы"
            extra={<a href="./analyze-page">More</a>}
            style={{ width: 300, height: 200 }}
          >
            <p>
              Это важно для обеспечения правильной навигации и предотвращения
              нежелательных потерь трафика.
            </p>
          </Card>
          <Card
            title="Индексация"
            extra={<a href="./analyze-page">More</a>}
            style={{ width: 300, height: 200 }}
          >
            <p>
              Таким образом, можно эффективно контролировать, какие части
              контента подлежат индексации поисковыми системами.
            </p>
          </Card>
          <Card
            title="Время"
            extra={<a href="./analyze-page">More</a>}
            style={{ width: 300, height: 200 }}
          >
            <p>
              Время за которое страница прогружается на клиенте.
            </p>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default MainPage;
