# 🌦️ Weather App

A sleek, modern React-based Weather App that delivers real-time weather data and a 5-day forecast using the OpenWeatherMap API. Designed with performance, usability, and clean UI in mind — featuring auto-refreshing data, unit toggling (°C/°F), and persistent city search using React Context API.

---

## 🧠 Approach

I approached the assignment by breaking it down into key functional components: fetching current weather and forecast data, displaying it cleanly using reusable components, and enhancing user experience with features like unit switching, auto-refresh, and state persistence. I used React Context API and localStorage to remember the last searched city and reloaded data every 30 seconds using `setInterval`. Tailwind CSS was used to ensure a responsive and modern UI, and Axios handled API communication efficiently.

---

## 🔧 Features

- **🌍 City Search**: Search any city's weather across the globe.
- **📊 5-Day Forecast**: Displays one forecast per day at 12:00 PM.
- **🌡️ Unit Toggle**: Switch between Celsius (°C) and Fahrenheit (°F).
- **🔁 Auto Refresh**: Automatically updates weather data every 30 seconds.
- **💾 Persistent City**: Saves the last searched city using React Context API and `localStorage`.
- **💻 Responsive Design**: Optimized layout using Tailwind CSS.
- **🚀 Tech Stack**:
  - React.js (with Hooks & Context API)
  - Axios
  - Tailwind CSS
  - OpenWeatherMap API

---

## 🖼️ Preview

![App Screenshot](screenshot.png) <!-- Add or replace with your actual image -->

---
