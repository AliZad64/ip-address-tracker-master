import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center p-3 gap-6 items-center bg-[url('../images/pattern-bg.png')]">
        <h1 className="text-2xl font-bold text-white"> IP Address Tracker </h1>
        {/* <div className="flex flex-row justify-center items-center"> */}
        <form className="flex flex-row justify-center items-center w-9/12 md:w-6/12">
          <input
            className="appearance-none text-gray-700 border-gray-200 rounded-l-xl py-4 px-4  w-full leading-tight focus:outline-none focus:bg-white focus:border-gray=500"
            placeholder="enter text here"
          ></input>
          <button className=" bg-black  text-white font-bold py-5 px-4 rounded-r-xl">
            <img src="../images/icon-arrow.svg" />
          </button>
        </form>
        <div className="grid grid-cols-4 divide-x  p-5 bg-white border-2 gap-9 rounded text-lg">
          <div className=" flex flex-col items-left justify-between">
            <span>IP Addres</span>
          </div>
          <div className=" flex flex-col items-center justify-between">
            <span>Location</span>
          </div>
        </div>
        {/* </div> */}
      </div>
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
