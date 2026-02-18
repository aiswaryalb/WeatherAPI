import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import { useEffect } from 'react';
import WeatherGrid from './components/WeatherGrid';
import WeatherCard from './components/WeatherCard';

function App() {

  const [location, setLocation] = useState(null);
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ipinfo.io/json"
      );
      const data = await response.json();
      // Get latitude and longitude
      const locString = data.loc;
      const [lat, lon] = locString.split(",");

      // Get the user's locale
      const locale = navigator.language;

      const formattedDate = new Date().toLocaleDateString(locale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: data.timezone,
      });

      setLocation(`${data.city}, ${data.country}`);
      setDate(formattedDate);

      const weatherResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=d0034aeb89df42dda5e150530261702&q=${lat},${lon}`);
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
    };

    fetchData();
  }, []);
  return (
    <main className="antialiased overflow-hidden">
      <div className="max-w-md mx-auto min-h-screen relative flex flex-col px-6 pt-12 pb-8">
        <div className="cloud-shape-1"></div>
        <div className="cloud-shape-2"></div>
        <div className="relative z-10 flex-1 flex flex-col">
          <Header date={date} location={location || "Loading location..."} />
          <WeatherCard weather={weather}/>
          <WeatherGrid weather={weather}/>
        </div>
      </div>

    </main>
  )
}

export default App
