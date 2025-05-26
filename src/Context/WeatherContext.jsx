import React, { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [lastCity, setLastCity] = useState(() => {
    return localStorage.getItem("lastCity") || "";
  });

  useEffect(() => {
    if (lastCity) {
      localStorage.setItem("lastCity", lastCity);
    }
  }, [lastCity]);

  return (
    <WeatherContext.Provider value={{ lastCity, setLastCity }}>
      {children}
    </WeatherContext.Provider>
  );
};
