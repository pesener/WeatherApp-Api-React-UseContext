import { Formik } from "formik";
import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import Wheather from "./Wheather";

const SelectCity = () => {
  const { city, setCity, weather } = useContext(WeatherContext);
  const handleSelect = (e) => {
    setCity(e.target.value);
  };
  console.log(weather);
  return (
    <div className="container">
      <h1>Wheather App</h1>

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

      <Wheather />
    </div>
  );
};

export default SelectCity;
