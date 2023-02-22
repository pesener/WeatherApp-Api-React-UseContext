import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
const Wheather = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="result">
      {weather.list?.map((data, index) => {
        if (index % 10 === 0 || index === 39) {
          return (
            <>
              <h2> {new Date(data.dt * 1000).toString().split(" ")[0]}</h2>
              <img
                className="images"
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weatherIMG"
              />
              <p></p>
              <ul className="bullets">
                <li></li>
                <li>Max : {data.main.temp_max.toFixed(1)}° </li>
                <li>Min : {data.main.temp_min.toFixed(1)}°</li>
              </ul>
            </>
          );
        }
        return "";
      })}
    </div>
  );
};

export default Wheather;
