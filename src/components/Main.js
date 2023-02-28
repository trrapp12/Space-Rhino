import React from "react";
import Modal from "./Modal"
import DisplayElements from "./DisplayElements";

export default function Main() {

  const [nasaData, setNasaData] = React.useState([]);

  const [numData, setNumData] = React.useState(1);

  const [showModal, setShowModal] = React.useState();

  const [modalItem, setModalItem] = React.useState(null);

  console.log(showModal, modalItem)

  const api_key = process.env.REACT_APP_API_KEY;

  async function fetchNasaData() {

    try {
      const newNasaData = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${1}`
        )
      const newNasaDataJson = await newNasaData.json();
      setNasaData(prevData => {
        return [...prevData, newNasaDataJson[0]]
      })
    } catch (err) {
      console.error(`Nasa Data error: ${err}`)
    }
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

  function updateModalItem (item) {
    setModalItem(item)
  }

  function openModal() {
    setShowModal(true)
  }

  function closeModal() {
    setShowModal(false)
  }

  function scrollDown() {
    setTimeout(() => {

      let totalHeight = document.body.scrollHeight
      let windowHeight = window.innerHeight;

      window.scrollTo({
        top: totalHeight - 800,
        behavior: 'smooth'
      });
      console.log({
        totalHeight,
        windowHeight
      })
    }, 250) //! ALT + up / down to move lines

  }


  React.useEffect(() => {
    fetchNasaData();
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
      {showModal && modalItem && <Modal
        modalItem = {modalItem}
        closeFunc = {closeModal}
        
      />}
      <div className="main--container-grid">
        <DisplayElements 
          nasaData={nasaData}
          openModal={openModal}
          updateModalItem={updateModalItem}
        />
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
