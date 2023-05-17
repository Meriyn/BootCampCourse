import './App.css';
import React from 'react';
import { useState } from "react";
import { useQuery } from 'react-query';

const App = () => {
  const [cityName, setCityName] = useState("");
  
  const fetchWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=250d4ebd906279665f1ad04f46b48a73&units=metric`;
    const res = await fetch(url);
    return res.json();
  }
  


      const { data, status, refetch } = useQuery("weatherData", fetchWeatherData, { enabled: false });
  // const { data, status } = useQuery(["weatherData", cityName], fetchWeatherData);
  
  return (
    <>
      <div>
        {/* Search Box */}
        <input id="srst" className="styling" type="text" placeholder="Country/City" onChange={(e) => setCityName(e.target.value)}/>
        <button type='button' className="styling" onClick={refetch}>Search</button>
      </div>
      <div className="App">
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && data && data.main && data.weather && (
  <div>
    <p>City: {data.name}</p>
    <p>Temperature: {data.main.temp}</p>
    <p>{data.weather[0]?.main}</p>
  </div>
)}


{/* {data.data[0].main === "Clear" ? (
  <marquee style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </marquee>
) : data.data[0].main === "Clouds" ? (
  <marquee style={{ color: "#fff" }}>
    <img width = "300px" height="250px" src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cloud-PNG/Cartoon_Clouds_Set_Transparent_PNG_Clip_Art_Image.png?m=1507172105" />
  </marquee>
) : data.data[0].main === "Rain" ? (
  <marquee  style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://static.vecteezy.com/system/resources/previews/018/931/623/original/cartoon-rain-icon-png.png" />
  </marquee>
) : data.data[0].main === "Drizzle" ? (
  <marquee style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://cdn-icons-png.flaticon.com/512/2412/2412691.png" />
  </marquee>
) : data.data[0].main === "Snow" ? (
  <marquee style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://png.pngtree.com/png-clipart/20211202/ourmid/pngtree-christmas-snow-festival-celebration-png-image_4048352.png" />
  </marquee>
) : data.data[0].main === "Sunny" ? (
  <marquee size = "50px" style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://static.vecteezy.com/system/resources/previews/009/304/897/original/sun-icon-set-clipart-design-illustration-free-png.png" />
  </marquee>
) : data.data[0].main === "Fog" ? (
  <marquee size = "50px" style={{ color: "#000" }}>
    <img width = "300px" height="250px" src="https://c1.wallpaperflare.com/preview/285/678/392/foggy-tree-landscape-fog.jpg" />
  </marquee>
) :
null
} */}

      </div>
    </>
  );
};

export default App;