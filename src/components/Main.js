import React from "react";
import Display from "./Display"

export default function Main() {

  const [nasaData, setNasaData] = React.useState([]);

  const [numData, setNumData] = React.useState(0);

  const api_key = "gQBHOwp1QgftmdeZ3bO3KTnskprBBUwud1vmWgRz";

  async function fetchNasaData() {
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
    // scrollDown();
  }

  function subtractNum() {
    
    if (numData > 1) {
      setNumData(prevNum => (
        prevNum - 1
      ))
      removeNasaData();
    }
  }

  function scrollDown() {
    setTimeout(() => {

      let totalHeight = document.body.scrollHeight
      let windowHeight = window.innerHeight;
      // let h = document.querySelector('.main--container').getBoundingClientRect().innerHeight
      // window.scrollTo(0, totalHeight - windowHeight);
      window.scrollTo({
        top: totalHeight - 800,
        behavior: 'smooth'
      });
      console.log({
        totalHeight,
        windowHeight
      })
    }, 250) //! ALT + up / down to move lines
      // window.scrollTo(0, h);
    }


  const DisplayElements = () => nasaData.map((el, i) => 
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

  
  React.useEffect(() => {
    addNum();
  }, []) // empty deps array - means only run once on component mount

  // React.useEffect(() => {
  //   addNum();
  // }) // no deps array - run EVERY STATE CHANGE - ALL THE TIME

  React.useEffect(() => {
    scrollDown();
  }, [nasaData])
  
  return (
    <React.StrictMode>
    <div className="main--container">
      <div className="main--container-grid">
        <DisplayElements />
         </div>
      <div id="buttonContainer" className="button--container">
        <button className="left-button" onClick={subtractNum} name="subtract"> - </button>
          <div className="display">{numData}</div>
        <button className="right-button" onClick={addNum}></button>
      </div>
    </div>
    </React.StrictMode>
  );
}
