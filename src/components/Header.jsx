const Header = ({date, location}) => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-1 mb-1">
        <span className="material-symbols-outlined text-soft-purple text-lg">location_on</span>
        <h1 className="text-2xl font-bold text-text-main">
          {location}
        </h1>
      </div>
      <p className="text-sm font-medium opacity-70">{date}</p>
    </header>
  )
}
export default Header;