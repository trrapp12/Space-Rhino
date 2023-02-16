import React from "react";

export default function Footer() {

  const [visibility, toggleVisibility] = React.useState(true)

  window.addEventListener('scroll', () => {
    console.log('scrolling in footer')
    const footer = document.getElementById('footer--container')
    toggleVisibility(false)
  })

  return (
      <div id="footer--container" className={visibility ? "footer--container visible" : "footer--container"}> 
        <h3 className="footer--text">Information displayed is made available through <span className="blue"><a href="https://api.nasa.gov/">Nasa &#123; APIS &#125; </a></span></h3>
        <p className="lower-opacity">All materials used are part of the public domain</p>
      </div>
  );
}
