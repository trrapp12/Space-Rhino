import React from 'react'

export default function Display(props) {
    
    return (
        <div className="main--display">
            <h3>{props.title}  Star Date {props.date}</h3>
            <img src={props.url}></img>
            <div className="main--display-p-content-container">
                <p className="main--display-p-content">{props.explanation}</p>
            </div>

        </div>
    )
}

// copyright={el[item].copyright}
// date={el[item].date}
// explanation={el[item].explanation}
// hdurl={el[item].hdurl}
// media_type={el[item].media_type}
// service_version={el[item].service_version}
// title={el[item].title}
// url={el[item].url}