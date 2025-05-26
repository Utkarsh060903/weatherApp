import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import { WeatherContext } from "./Context/WeatherContext";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric");

  const { lastCity, setLastCity } = useContext(WeatherContext);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const CURRENT_API = `https://api.openweathermap.org/data/2.5/weather`;
  const FORECAST_API = `https://api.openweathermap.org/data/2.5/forecast`;

  const fetchWeather = async (city, showLoading = true) => {
    if (showLoading) setLoading(true);
    setError("");
    try {
      const [currentRes, forecastRes] = await Promise.all([
        axios.get(`${CURRENT_API}?q=${city}&units=${unit}&appid=${API_KEY}`),
        axios.get(`${FORECAST_API}?q=${city}&units=${unit}&appid=${API_KEY}`),
      ]);

      setWeather(currentRes.data);
      setLastCity(city);

      const daily = forecastRes.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(daily);
    } catch (err) {
      setWeather(null);
      setForecast([]);
      if (err.response && err.response.status === 404) {
        setError("City not found. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    if (lastCity) {
      fetchWeather(lastCity);
    }
  }, [unit]);

  // Polling every 30 seconds
  useEffect(() => {
    if (!lastCity) return;

    const intervalId = setInterval(() => {
      fetchWeather(lastCity, false);
    }, 30000);

    return () => clearInterval(intervalId);
  }, [lastCity, unit]);

  const toggleUnit = () => {
    setUnit(prev => (prev === "metric" ? "imperial" : "metric"));
  };

  const unitLabel = unit === "metric" ? "°C" : "°F";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-1"></div>

      <div className="bg-black/70 text-white rounded-lg shadow-lg p-8 max-w-6xl w-full z-10">
        <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={toggleUnit}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
          >
            Switch to {unit === "metric" ? "Fahrenheit (°F)" : "Celsius (°C)"}
          </button>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <SearchBar fetchWeather={fetchWeather} />
          {loading && <p className="text-center mt-4">Loading...</p>}
        </div>

        {weather && forecast.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <WeatherCard weather={weather} unit={unitLabel} />
            </div>
            <div>
              <ForecastCard forecast={forecast} unit={unitLabel} />
            </div>
          </div>
        )}

        {weather && forecast.length === 0 && (
          <div className="max-w-md mx-auto">
            <WeatherCard weather={weather} unit={unitLabel} />
          </div>
        )}

        <ErrorMessage message={error} />

      </div>
    </div>
  );
};

export default App;