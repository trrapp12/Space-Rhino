import React from 'react'
import Ape from '../components/images/DALL_E_ape_x_small.png'

export default function Modal(props) {

    function clickOutCloseModal(event) {
        if (event.target.id === 'modal-main--display') {
            props.closeFunc();
        } else {
            console.log('clicking inside the modal')
        }
    }

    return (
    <div id="modal-main--display" className="modal-main--display" onClick={clickOutCloseModal}>
        <div className="modal-spacer">
        <button name="close" id="close" onClick={props.closeFunc} className="material-symbols-outlined">close</button>
            <h1 className="modal-h1">{props.modalItem.title}</h1>
            <p className="margin-2em-bottom"><span className="modal-brown-highlight">Star Date {props.modalItem.date}</span></p>  
            <div className="modal-image-container">
                {props.modalItem.media_type === "image" ? <img className="margin-2em-bottom" src={props.modalItem.url} alt={props.modalItem.title}/> : <img className="margin-2em-bottom" src={Ape} style={{objectPosition: "center",
                objectFit: "cover" }} alt="image of an ape in space with the words 'image not available' in front"/>}
                <div className="modal-main--display-p-content-container margin-2em-bottom">
                    <p className="modal-main--display-p-content">{props.modalItem.explanation}</p>
                </div>
            </div>
        </div>
    </div>
    )
}