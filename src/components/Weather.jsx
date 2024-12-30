import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../redux/features/weather/weatherSlice";
import WeatherCard from "./WeatherCard";

import weatherBanner from "../assets/weather-banner.png";

function Weather() {
  const dispatch = useDispatch();
  const { weatherData, loading, error } = useSelector((state) => state.weather);
  const [city, setCity] = useState("");

  const handleFetchWeather = (e) => {
    e.preventDefault();
    if (city.trim() === "") return; // Avoid empty input
    dispatch(fetchWeatherData(city));
    setCity(""); // Clear input field
  };

  return (
    <div className="bg-blue-300">
      <div className="px-6 py-20  container max-w-screen-lg m-auto min-h-screen">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
          Weather Dashboard
        </h1>
        <div className="w-full flex justify-center">
          <p className="text-white bg-red-500 inline-block px-2 text-center mb-6">
            fetches weather data for different cities using Redux Toolkit and
            Redux Thunk
          </p>
        </div>

        <div className="w-full flex justify-center">
          <img src={weatherBanner} alt="" />
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleFetchWeather}
          className="my-6 flex flex-wrap gap-2 md:gap-4"
        >
          <input
            type="text"
            placeholder="Enter city name..."
            className="flex-grow p-2 border rounded"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add City
          </button>
          <button
            type="button"
            onClick={() => dispatch(clearWeatherData())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear
          </button>
        </form>

        {/* Weather Cards */}
        {loading && <p className="text-center text-blue-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weatherData.map((data) => (
            <WeatherCard
              key={data.id}
              city={data.name}
              temp={data.main.temp}
              description={data.weather[0].description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Weather;
