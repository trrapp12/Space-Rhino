import React from "react";
import Display from "./Display"

export default function Main() {

  const [nasaData, setNasaData] = React.useState([]);

  const [numData, setNumData] = React.useState(
    {up: true, 
    num: 1});


  console.log(nasaData); 
  
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

  React.useLayoutEffect(function() {

    if (numData.up === true) {
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${1}`
      )
      .then(res => res.json())
      .then(data => setNasaData(prevData => {
        return [...prevData, data]
      }
        ))
    } else {
        setNasaData(prevData => { 
          let newArr = [];
          for (let i = 0; i < prevData.length; i++) {
            if (i < prevData.length - 1) {
              newArr.push(prevData[i])
            } else {
              console.log('last one')
            } 
          }
          return newArr
      })
    }

  }, [numData.num])

  function addNum() {
    console.log('add fired')
    setNumData(prevNum => ({
      num: prevNum.num + 1,
      up: true
    }))
  }

  function subtractNum() {
    
    if (numData.num === 1) {
      setNumData(prevNum => ({
        num: 1,
        up: false
        }))
    } else {
      setNumData(prevNum => ({
        num: prevNum.num - 1,
        up: false
      }))
    }
    console.log('subtact fired')
  }
 
  console.log(numData.num)
  return (
    <React.StrictMode>
    <div className="main--container">
      {displayElements}
      <div className="button--container">
        <button className="left-button" onClick={subtractNum} name="subtract"> - </button>
          <div className="display">{numData.num}</div>
        <button className="right-button" onClick={addNum}> + </button>
      </div>
    </div>
    </React.StrictMode>
  );
}
