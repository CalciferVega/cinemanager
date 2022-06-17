export default function HomeHeader({handleSearch}) {
  const logo = './assets/logo.png';
  const searchIcon = './assets/search.png';
  
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-btn">
        <button onClick={() => handleSearch()}>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
    </header>
  );
}