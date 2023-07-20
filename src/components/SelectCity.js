import { Formik } from "formik";
import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import Weather from "./Weather";

const SelectCity = () => {
  const { city, setCity, weather } = useContext(WeatherContext);
  const handleSelect = (e) => {
    setCity(e.target.value);
  };
  console.log(weather);
  return (
    <div className="container">
      <h1>Weather App</h1>

      <Formik>
        <form>
          <select
            className="select"
            name="city"
            value={city}
            onChange={handleSelect}
          >
            <option value="izmir">Izmir</option>
            <option value="ankara">Ankara</option>
            <option value="istanbul">Istanbul</option>
          </select>
        </form>
      </Formik>

      <Weather />
    </div>
  );
};

export default SelectCity;
