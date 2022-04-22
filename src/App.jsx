import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const position = [51.505, -0.09];
function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [IPdata, setIPdata] = useState();
  const onclicky = (e) => {
    e.preventDefault();
    axios
      .get("https://geo.ipify.org/api/v2/country", {
        params: {
          apiKey: "at_cefe5hBivnardwUi9WYjieAGJ1hVr",
          ipAddress: search,
        },
      })
      .then((res) => {
        setIPdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center p-3 gap-6 items-center bg-[url('../images/pattern-bg.png')] relative">
        <h1 className="text-2xl font-bold text-white"> IP Address Tracker </h1>
        {/* <div className="flex flex-row justify-center items-center"> */}
        <form className="flex flex-row justify-center items-center w-9/12 md:w-6/12">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="appearance-none text-gray-700 border-gray-200 rounded-l-xl py-4 px-4  w-full leading-tight focus:outline-none focus:bg-white focus:border-gray=500"
            placeholder="enter text here"
          ></input>
          <button onClick={onclicky} className=" bg-black  text-white font-bold py-5 px-4 rounded-r-xl">
            <img src="../images/icon-arrow.svg" />
          </button>
        </form>
        {IPdata ? (
          <div className="grid grid-cols-1 text-center lg:grid-cols-4 lg:divide-x  p-5 bg-white border-2 gap-9 rounded-xl  bottom-0 -mb-10 z-50">
            <div className=" flex flex-col items-left justify-between gap-4">
              <span className="text-sm text-Dark-Gray text-left tracking-wide ">IP ADDRESS</span>
              <span className="text-lg">{IPdata.ip}</span>
            </div>
            <div className=" flex flex-col items-left justify-between gap-4">
              <span className="text-sm text-Dark-Gray text-left tracking-wide ">Location</span>
              <span className="text-lg">
                {IPdata.location.country} - {IPdata.location.region}
              </span>
            </div>
            <div className=" flex flex-col items-left justify-between gap-4">
              <span className="text-sm text-Dark-Gray text-left tracking-wide ">IP ADDRESS</span>
              <span className="text-lg">{IPdata.location.timezone}</span>
            </div>
            <div className=" flex flex-col items-left justify-between gap-4">
              <span className="text-sm text-Dark-Gray text-left tracking-wide ">IP ADDRESS</span>
              <span className="text-lg">{IPdata.isp}</span>
            </div>
          </div>
        ) : (
          <div> </div>
        )}

        {/* </div> */}
      </div>
      <MapContainer className="z-10" center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      {/* IP Address Tracker */}
      {/* Search for any IP address or domain */}
      {/* IP Address */}
      {/* Location */}
      {/* Timezone */}
      {/* UTC <!-- add offset value dynamically using the API --> */}
      ISP
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
