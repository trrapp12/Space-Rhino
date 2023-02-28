import React from "react";
import "../components/images/DALL_E_Rhino.png"

export default function Header() {

  const [bookmarkData, setBookMarkData] = React.useState([])
  const [active, setActive] = React.useState(false)

  const localData = () => {
    const x = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.length < 1) {
        return
      } else {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key))
        x.push({
          title: value.title,
          url: value.url,
        })
      }
    }
    console.log(x)
    return x;
  }

  function clickHandler() {
    const data = localData();
    console.log(data)
    setBookMarkData(data)
    setActive(prevData => !prevData)
  }


  return (
    <>
      <div className="header--container">
        <div className="triangle"></div>
        <h1>Space Rhino:</h1>
        <p className="brown-highlight sub-title">A media galaxy for NASA enthusiasts</p>
      </div>
      <button className="button-bookmark" onClick={clickHandler}> 
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
          <path d="m480 714 182-182-52-51-130 130-130-130-52 51 182 182Zm-.458 278q-85.182 0-161.022-33.02-75.84-33.02-132.16-89.34-56.32-56.32-89.34-132.291T64 576q0-86.272 33.079-162.149 33.079-75.878 89.686-132.47 56.606-56.592 132.216-88.986Q394.59 160 479.557 160q86.329 0 162.512 32.395 76.183 32.394 132.557 89Q831 338 863.5 414.042q32.5 76.041 32.5 162.5 0 85.458-32.395 160.797-32.394 75.338-88.986 131.921-56.592 56.582-132.616 89.661Q565.979 992 479.542 992Zm.458-73q142.513 0 242.756-100.744Q823 717.513 823 576q0-142.513-100.244-242.756Q622.513 233 480 233q-141.513 0-242.256 100.244Q137 433.487 137 576q0 141.513 100.744 242.256Q338.487 919 480 919Zm0-343Z"/>
        </svg>
      </button>
      <div className={active ? "drop-down-active" : "drop-down"}>
        <h1>Rhino Favorites: On Point</h1>
      {
        bookmarkData.map((item) => {
              var title = item.title;
              var url = item.url;
          return (
            <>
              <a href={url} target="_blank">{title}</a>
            </>
          )
        })
      }
      </div>
    </>
  );
}
