import React from "react";

const WeatherCard = ({ city, temp, description }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold">{city}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-2xl font-semibold">{temp}°C</p>
    </div>
  );
};

export default WeatherCard;
