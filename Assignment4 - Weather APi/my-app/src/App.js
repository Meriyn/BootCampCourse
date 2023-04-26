import logo from './logo.svg';
    import './App.css';
    import { useState } from "react";

    function App() {

      const[search, setSearch] = useState("");
      const[weather, setWeather] = useState({});

      const searched = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=8d83c5a3b95256f46f5f781dfaa264d8`)
        .then((res) => res.json())
        .then((result) =>{
          setWeather(result)
        });
      };
      return (
        <div className="App">
          <header className="App-header">
            Weather App
            <div className="pad">
            {/* Search Box */}
            <input id="srst" className = "styling" type="text" placeholder="Country/City" onChange={(e) => setSearch(e.target.value)}/>
            <button className = "styling" onClick={searched}>Search</button>
            </div>

            {typeof weather.main!== "undefined" ? (
          <div>

          
          {/* Location */}
          <p>{weather.name}</p>
          {/* Temperature */}
          <p>{weather.main.temp}°C</p>
          {/* Condition */}
          <p>{weather.weather[0].main}</p>
          {weather.weather[0].main === "Clear" ? (
  <marquee style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </marquee>
) : weather.weather[0].main === "Clouds" ? (
  <marquee style={{ color: "#fff" }}>
    <img width = "300px" height="250px" src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cloud-PNG/Cartoon_Clouds_Set_Transparent_PNG_Clip_Art_Image.png?m=1507172105" />
  </marquee>
) : weather.weather[0].main === "Rain" ? (
  <marquee  style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://static.vecteezy.com/system/resources/previews/018/931/623/original/cartoon-rain-icon-png.png" />
  </marquee>
) : weather.weather[0].main === "Drizzle" ? (
  <marquee style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://cdn-icons-png.flaticon.com/512/2412/2412691.png" />
  </marquee>
) : weather.weather[0].main === "Snow" ? (
  <marquee style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://png.pngtree.com/png-clipart/20211202/ourmid/pngtree-christmas-snow-festival-celebration-png-image_4048352.png" />
  </marquee>
) : weather.weather[0].main === "Sunny" ? (
  <marquee size = "50px" style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://static.vecteezy.com/system/resources/previews/009/304/897/original/sun-icon-set-clipart-design-illustration-free-png.png" />
  </marquee>
) : weather.weather[0].main === "Fog" ? (
  <marquee size = "50px" style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://c1.wallpaperflare.com/preview/285/678/392/foggy-tree-landscape-fog.jpg" />
  </marquee>
) :
null
}
          </div>
          )
          :(
          ""
          )
          }
          
          </header>
        </div>
      );
    }

    export default App;