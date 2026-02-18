const WeatherGrid = ({ weather }) => {
  return (
    <section className="grid grid-cols-2 gap-5">
      <div className="bg-white/60 rounded-card p-6 soft-shadow flex flex-col items-center text-center">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
          <span className="material-symbols-outlined text-blue-400 text-xl fill-1">water_drop</span>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-text-main opacity-50 mb-1">Humidity</span>
        <span className="text-2xl font-bold text-text-main">{weather ? `${weather.current.humidity}%` : "Loading..."}</span>
      </div>
      <div className="bg-white/60 rounded-card p-6 soft-shadow flex flex-col items-center text-center">
        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
          <span className="material-symbols-outlined text-yellow-500 text-xl fill-1">flare</span>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-text-main opacity-50 mb-1">UV Index</span>
        <span className="text-2xl font-bold text-text-main">{weather ? `${weather.current.uv}` : "Loading..."}</span>
      </div>
      <div className="bg-white/60 rounded-card p-6 soft-shadow flex flex-col items-center text-center">
        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mb-3">
          <span className="material-symbols-outlined text-pink-400 text-xl">air</span>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-text-main opacity-50 mb-1">Wind</span>
        <span className="text-2xl font-bold text-text-main">{weather ? `${weather.current.wind_mph}` : "Loading..."}<span className="text-xs font-medium">mph</span></span>
      </div>
      <div className="bg-white/60 rounded-card p-6 soft-shadow flex flex-col items-center text-center">
        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
          <span className="material-symbols-outlined text-purple-400 text-xl">visibility</span>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-text-main opacity-50 mb-1">Visibility</span>
        <span className="text-2xl font-bold text-text-main">{weather ? `${weather.current.vis_km}` : "Loading..."}<span className="text-xs font-medium">km</span></span>
      </div>
      <div className="bg-white/60 rounded-card p-6 soft-shadow flex flex-col items-center text-center">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-3">
          <span className="material-symbols-outlined text-orange-400 text-xl">thermostat</span>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-text-main opacity-50 mb-1">Heat Index</span>
        <span className="text-2xl font-bold text-text-main">{weather ? `${weather.current.heatindex_c}°C` : "Loading..."}</span>
      </div>
      <div className="bg-white/60 rounded-card p-6 soft-shadow flex flex-col items-center text-center">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
          <span className="material-symbols-outlined text-emerald-400 text-xl">airwave</span>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-text-main opacity-50 mb-1">Wind Chill</span>
        <span className="text-2xl font-bold text-text-main">{weather ? `${weather.current.windchill_c}°C` : "Loading..."}</span>
      </div>
    </section>
  )
}
export default WeatherGrid;