import React from "react";
import "./WeatherCard.css";
import Moment from "react-moment";
import "moment/locale/tr";
import moment from "moment";
import { Col } from "react-bootstrap";

const WeatherCard = ({ reading, nameCity }) => {
  moment().locale("tr");

  const weatherTranslations = {
    "clear sky": "Açık Hava",
    "scattered clouds": "Parçalı Bulutlu",
    "broken clouds": "Kırık Bulutlu",
    "few clouds": "Az Bulutlu",
    "light rain": "Hafif Yağmurlu",
    "light snow": "Hafif Karlı",
    snow: "Karlı",
    "overcast clouds": "Bulutlu",
    rain: "Yağmurlu"
  };

  const dateTranslations = {
    Feb: "Şubat"
  };

  const description = reading.weather[0].description;
  const dt = reading.dt;
  return (
    <Col sm={6} md={4} lg={3}>
      <div className="card animated jello">
        <div className="image-container">
          <h5 className="image">{nameCity}</h5>
          <img
            className="image"
            src={`http://openweathermap.org/img/wn/${reading.weather[0].icon}.png`}
            alt=""
          />
          <div className="content">
            <h5 className="bg-color">
              Sıcaklık: {Math.round(reading.main.temp)} °C
            </h5>
            <p className="bg-color">
              {weatherTranslations[description] || description}
            </p>
            <p className="bg-color">
              <Moment className="bg-color" format="D MMM YYYY HH:mm" unix>
                {dateTranslations[dt] || dt}
              </Moment>
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default WeatherCard;
