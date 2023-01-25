import React from "react";
import Display from "./Display"

export default function Main() {

  const [nasaData, setNasaData] = React.useState([]);

  const [numData, setNumData] = React.useState(0);

  React.useEffect(() => {
    addNum();
  }, [])
  
  const api_key = "gQBHOwp1QgftmdeZ3bO3KTnskprBBUwud1vmWgRz";

  const displayElements = nasaData.map((el, i) => {
    return (
      <Display 
        key={i}
        copyright={el.copyright}
        date={el.date}
        explanation={el.explanation}
        hdurl={el.hdurl}
        media_type={el.media_type}
        service_version={el.service_version}
        title={el.title}
        url={el.url}
        />
      )
  })

  async function fetchNasaData() {
    // fetch(
    //   `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${1}`
    // )
    // .then(res => res.json())
    // .then(data => setNasaData(prevData => {
    //   return [...prevData, data]
    // }
    //   ))
    const newNasaData = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${1}`
      )
    const newNasaDataJson = await newNasaData.json();
    setNasaData(prevData => {
      return [...prevData, newNasaDataJson[0]]
    })
  }

  function removeNasaData() {
    setNasaData(prevData => { 
      let newArr = prevData.slice(0, -1)
      return newArr;
  })
  }

  function addNum() {
    setNumData(prevNum => (
      prevNum + 1      
    ))
    fetchNasaData();
  }

  function subtractNum() {
    
    if (numData > 1) {
      setNumData(prevNum => (
        prevNum - 1
      ))
      removeNasaData();
    }
  }
  
  return (
    <React.StrictMode>
    <div className="main--container">
      <div className="main--container-grid">{displayElements}</div>
      <div id="buttonContainer" className="button--container">
        <button className="left-button" onClick={subtractNum} name="subtract"> - </button>
          <div className="display">{numData}</div>
        <button className="right-button" onClick={addNum}> + </button>
      </div>
    </div>
    </React.StrictMode>
  );
}
