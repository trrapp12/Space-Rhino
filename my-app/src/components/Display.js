import React from 'react'

export default function Display(props) {
    
    return (
        <div className="main--display">
            <h3>{props.title}</h3>
            <img src={props.url}></img>
            <p>{props.explanation}</p>
            <p className="main--ending-paragraph">Star Date {props.date}</p>
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