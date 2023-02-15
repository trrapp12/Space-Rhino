import React from 'react'
import Ape from '../components/images/DALL_E_ape_x_small.png'

export default function Display(props) {

    const [clicked, setClick] = React.useState(false)
    const [clicked2, setClick2] = React.useState(false)    

    function clickHandler1(event) {
        setClick(!clicked)
    }

    function clickHandler2(event) {
        setClick2(!clicked2)
        props.open();
        props.update(props.el)
    }

    return (
        <div className="main--display">
            <h3>{props.title}</h3>
            <p className="margin-2em-bottom"><span className="brown-highlight">Star Date {props.date}</span></p>  
            <div className="image-container">
                {props.media_type === "image" ? <img className="margin-2em-bottom" src={props.url}></img> : <img className="margin-2em-bottom" src={Ape} style={{objectPosition: "center",
                objectFit: "cover" }}></img>}
            </div>
            <div className="main--display-p-content-container margin-2em-bottom">
                <p className="main--display-p-content">{props.explanation}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" onClick={clickHandler1} className={clicked ? "clicked" : ""}>
                <path d="m12 21.9-1.85-1.7q-2.75-2.525-4.487-4.288Q3.925 14.15 2.925 12.8t-1.363-2.488Q1.2 9.175 1.2 7.95q0-2.625 1.8-4.413Q4.8 1.75 7.45 1.75q1.2 0 2.4.487 1.2.488 2.15 1.363.95-.875 2.15-1.363 1.2-.487 2.4-.487 2.65 0 4.45 1.787 1.8 1.788 1.8 4.413 0 1.225-.362 2.362-.363 1.138-1.363 2.488t-2.737 3.112Q16.6 17.675 13.85 20.2Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" onClick={clickHandler2} className={clicked2 ? "clicked" : ""}>
                <path d="M4.55 19.45v-5.5H7.2v2.85h2.85v2.65Zm0-9.4v-5.5h5.5V7.2H7.2v2.85Zm9.4 9.4V16.8h2.85v-2.85h2.65v5.5Zm2.85-9.4V7.2h-2.85V4.55h5.5v5.5Z"/>
            </svg>
        </div>
    )
}

