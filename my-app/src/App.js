import React from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {

  const [nasaData, setNasaData] = React.useState({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: "",
  });

  const [numInput, setNumInput] = React.useState([`&count=1`]);

  function handleNumInputClick(event) {
    setNumInput(()=> {
      let randInt = Math.floor((Math.random() * event.target.value) + 1)
      return (`&count=${randInt.toString()}`)
    })
  }

  console.log(numInput)
  // creates count parameter
  // var countParam = "&count=" + randInt.toString();

  const api_key = "gQBHOwp1QgftmdeZ3bO3KTnskprBBUwud1vmWgRz";

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api_key}${numInput}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="app--container">
      <Header />
      <Main />
      <Footer className="" />
    </div>
  );
}
