import './App.css';
// import background from './Background.jpg';

function App() {

  const unsplashUrl = 'https://e0.pxfuel.com/wallpapers/109/855/desktop-wallpaper-ma-in-criminal-justice-and-crime-control-university-of-hull.jpg';
  const styles = {
    backgroundImage: `url(${unsplashUrl})`,
    backgroundSize: 'cover',
    height: '100vh'
  };
  return (
    <>
    <div style={styles} >
    {/* <div className="main" style= {{backgroundImage:`url(${background})`}}>     */}
    <nav className="navbar bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* </div> */}
</div>
</>
  );
}

export default App;
