import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [nasaData, setNasaData] = React.useState({});

  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=gQBHOwp1QgftmdeZ3bO3KTnskprBBUwud1vmWgRz"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="">
      <Header className="" />
      <Main className="" />
      <Footer className="" />
    </div>
  );
}
