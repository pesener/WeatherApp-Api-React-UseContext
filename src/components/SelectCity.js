import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import WeatherContext from "../context/WeatherContext";

const SelectCity = () => {
  const { city, setCity, weather } = useContext(WeatherContext);

  return (
    <div className="container">
      <h1>Wheather App</h1>

      <Formik>
        <form>
          <select name="city">
            <option value="izmir">İzmir</option>
            <option value="ankara">Ankara</option>
            <option value="istanbul">İstanbul</option>
          </select>
        </form>
      </Formik>
    </div>
  );
};

export default SelectCity;
