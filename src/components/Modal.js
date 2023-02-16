import React from 'react'
import Ape from '../components/images/DALL_E_ape_x_small.png'

export default function Modal(props) {



    return (
    <div className="modal-main--display">
        <div className="modal-spacer">
        <span onClick={props.closeFunc} className="material-symbols-outlined">Close</span>
            <h1 className="modal-h1">{props.modalItem.title}</h1>
            <p className="margin-2em-bottom"><span className="modal-brown-highlight">Star Date {props.modalItem.date}</span></p>  
            <div className="modal-image-container">
                {props.modalItem.media_type === "image" ? <img className="margin-2em-bottom" src={props.modalItem.url}></img> : <img className="margin-2em-bottom" src={Ape} style={{objectPosition: "center",
                objectFit: "cover" }}></img>}
                <div className="modal-main--display-p-content-container margin-2em-bottom">
                    <p className="modal-main--display-p-content">{props.modalItem.explanation}</p>
                </div>
            </div>
        </div>

    </div>
    )
}