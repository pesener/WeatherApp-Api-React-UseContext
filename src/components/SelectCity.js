import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import WeatherContext from "../context/WeatherContext";
import Wheather from "./Wheather";

const SelectCity = () => {
  const { city, setCity, weather } = useContext(WeatherContext);
  const handleSelect = (e) => {
    setCity(e.target.value);
  };
  console.log(weather.list);
  return (
    <div className="container">
      <h1>Wheather App</h1>

      <Formik>
        <form>
          <select name="city" onChange={handleSelect}>
            <option value="izmir">İzmir</option>
            <option value="ankara">Ankara</option>
            <option value="istanbul">İstanbul</option>
          </select>
        </form>
      </Formik>

      <Wheather />
    </div>
  );
};

export default SelectCity;
