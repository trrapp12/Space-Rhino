import React from "react";

export default function Main() {

  const [numInput, setNumInput] = React.useState([`&count=1`]);

  function handleNumInputClick(event) {
    setNumInput(()=> {
      let randInt = Math.floor((Math.random() * event.target.value) + 1)
      return (`&count=${randInt.toString()}`)
    })
  }

  return (
    <div className="main--container">
      <h2>Main</h2>
      <form>
        <input
          type="text"
          placeholder="enter number"
          onChange={(event) => setNumInput(event.target.value)}
          />

      </form>
      <button onClick={handleNumInputClick}>set feed</button>
    </div>
  );
}
