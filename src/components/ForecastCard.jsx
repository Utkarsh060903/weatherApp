import React from "react";

const ForecastCard = ({ forecast, unit }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-center mb-4 text-white">5-Day Forecast</h3>
      <div className="space-y-4">
   
        <div className="grid grid-cols-3 gap-3">
          {forecast.slice(0, 3).map((day) => (
            <div
              key={day.dt}
              className="bg-white/20 p-3 rounded-lg text-center text-white"
            >
              <p className="font-semibold text-xs mb-2">
                {new Date(day.dt_txt).toLocaleDateString(undefined, { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="w-10 h-10 mx-auto"
              />
              <p className="font-bold text-sm">{Math.round(day.main.temp)} {unit}</p>
              <p className="capitalize text-xs text-gray-300">
                {day.weather[0].description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {forecast.slice(3, 5).map((day) => (
            <div
              key={day.dt}
              className="bg-white/20 p-3 rounded-lg text-center text-white"
            >
              <p className="font-semibold text-xs mb-2">
                {new Date(day.dt_txt).toLocaleDateString(undefined, { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="w-10 h-10 mx-auto"
              />
              <p className="font-bold text-sm">{Math.round(day.main.temp)}°C</p>
              <p className="capitalize text-xs text-gray-300">
                {day.weather[0].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ForecastCard;