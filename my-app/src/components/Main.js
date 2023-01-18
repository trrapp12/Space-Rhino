import React from "react";
import Display from "./Display"

export default function Main() {

  const [nasaData, setNasaData] = React.useState([]);

  const [numData, setNumData] = React.useState(1)

  console.log(nasaData)
  
  const api_key = "gQBHOwp1QgftmdeZ3bO3KTnskprBBUwud1vmWgRz";

  const displayElements = nasaData.map((el) => {
    return Object.keys(el).map((item, i) => 
      <Display 
        key = {i}
        copyright={el[item].copyright}
        date={el[item].date}
        explanation={el[item].explanation}
        hdurl={el[item].hdurl}
        media_type={el[item].media_type}
        service_version={el[item].service_version}
        title={el[item].title}
        url={el[item].url}
        />
      )
  })

  React.useEffect(function() {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${numData}`
    )
    .then(res => res.json())
    .then(data => setNasaData(prevData => {
      return [...prevData, data]
    }
      ))
  }, [numData])

  function addNum() {
    setNumData(prevNum => prevNum + 1)
  }

  function subtractNum() {
    setNumData(prevNum => prevNum - 1)
  }



  return (
    <React.StrictMode>
    <div className="main--container">
      {displayElements}
      <div className="button--container">
        <button 
          className="left-button"
          onClick={subtractNum}
          > - </button>
          <div className="display">{numData}</div>
        <button
        className="right-button"
        onClick={addNum}> + </button>
      </div>
    </div>
    </React.StrictMode>
  );
}
