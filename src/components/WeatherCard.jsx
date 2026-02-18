const WeatherCard = ({ weather }) => {
  return (
    <section className="flex flex-col items-center justify-center mb-10">
      <div className="relative w-40 h-40 flex items-center justify-center bg-white/40 rounded-full soft-shadow mb-6">
        <img src={weather ? `${weather.current.condition.icon}` : ""} alt="" />
      </div>
      <div className="text-center">
        <div className="flex items-start justify-center">
          <span className="text-8xl font-bold tracking-tighter text-text-main">{weather ? `${weather.current.temp_c}` : "Loading..."}</span>
          <span className="text-4xl font-semibold text-soft-purple mt-2">°</span>
        </div>
        <div className="mt-2 inline-flex items-center gap-3 px-6 py-2 bg-white/60 rounded-full soft-shadow">
          <span className="text-sm font-bold text-text-main uppercase tracking-wider">{weather ? `${weather.current.condition.text}` : "Loading..."}</span>
          <div className="w-1 h-1 bg-text-main/20 rounded-full"></div>
          <span className="text-sm font-medium opacity-80">{`${weather ? `Feels like  ${weather.current.feelslike_c}°C` : "Loading..."}`}</span>
        </div>
      </div>
    </section>
  )
}
export default WeatherCard;