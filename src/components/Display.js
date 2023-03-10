import React from 'react'
import Ape from '../components/images/DALL_E_ape_x_small.png'
import Rhino from '../components/images/DALL_E_Rhino_640.png'

export default function Display(props) {
    
    // const [clicked, setClick] = React.useState(false)
    const [clicked2, setClick2] = React.useState(false)    
    const [clicked3, setClick3] = React.useState(false)
    
    const bookMarkTitle = props.title; 
    const bookMarkURL = props.url;
    // console.log(bookMarkTitle, bookMarkURL)

    function clickHandler1(event) {
        console.log('props.setclick is ' + props.setClick)
        props.setClick(prevState => !prevState) 
        checkFavorites();
    }

    function checkFavorites() {
        const currentLocalData = [];

        if (localStorage.length === 0) {
            setFavorites();
        } else {
            for (let i = 0; i < localStorage.length; i++) {
                console.log(currentLocalData)
               currentLocalData.push(localStorage.getItem(localStorage.key(i)));
               if (JSON.parse(currentLocalData[i].includes(bookMarkTitle)) && props.clicked) {
                 removeFavorites()
               } else if (JSON.parse(currentLocalData[i].includes(bookMarkTitle)) && !props.clicked) {
                return
               } else {
                setFavorites();
               }
            }
        }
    }

    function removeFavorites() {
        console.log('firing remove favorites')
        localStorage.removeItem(bookMarkTitle);
    }

    function setFavorites() {
        const bookMarkObj = JSON.stringify({
            title: bookMarkTitle,
            url: bookMarkURL
        })
        localStorage.setItem(bookMarkTitle, bookMarkObj)    
    }
    
    function clickHandler2(event) {
        setClick2(prevData => !prevData)
        props.open();
        props.update(props.el)
    }

    async function clickHandler3(event) {
        setClick3(!props.clicked)

        try {

            if (!navigator.share) {
                throw new Error('Share API not supported')
            }

            const text = 'Check out amazing astro-photography straight from NASA';
            const title = 'Space Rhino';
            const url = 'https://space-rhino.com'
            const imageBlob = await fetch(Rhino).then(response => response.blob());
            const file = new File([imageBlob], 'image.png', { type: 'image/png' });

            console.log(imageBlob)
            const shareData = {
                title: title,
                text: text,
                url: url,
                files: [file],
            };

           await navigator.share(shareData);

            console.log("Shared successfully");

        } catch (error) {

            console.error("Error sharing: ", error)
        }

    }

    return (
        <div className="main--display">
            <h3>{bookMarkTitle}</h3>
            <p className="margin-2em-bottom"><span className="brown-highlight">Star Date {props.date}</span></p>  
            <div className="image-container">
                {props.media_type === "image" ? <img className="margin-2em-bottom" src={bookMarkURL} alt={bookMarkTitle}></img> : <img className="margin-2em-bottom" src={Ape} alt={bookMarkTitle} style={{objectPosition: "center",
                objectFit: "cover" }}></img>}
            </div>
            <div className="main--display-p-content-container margin-2em-bottom">
                <p className="main--display-p-content">{props.explanation}</p>
            </div>
            <div className="icon-holder">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" onClick={clickHandler1} className={props.clicked ? "clicked" : ""}>
                    <path d="m480 972-74-68Q296 803 226.5 732.5T117 608q-40-54-54.5-99.5T48 414q0-105 72-176.5T298 166q48 0 96 19.5t86 54.5q38-35 86-54.5t96-19.5q106 0 178 71.5T912 414q0 49-14.5 94.5T843 608q-40 54-109.5 124.5T554 904l-74 68Zm0-144q98-89 161-151.5t100-109q37-46.5 51-82t14-71.5q0-61-40.5-101.5T662 272q-45 0-86 27t-46 59H430q-5-32-46-59t-86-27q-63 0-103.5 40.5T154 414q0 36 14 71.5t51 82q37 46.5 100 109T480 828Zm0-278Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" onClick={clickHandler2} className={clicked2 ? "clicked" : ""}>
                    <path d="M194 968q-43.725 0-74.863-31.138Q88 905.725 88 862V290q0-43.725 31.137-74.862Q150.275 184 194 184h305v106H194v572h572V557h106v305q0 43.725-31.138 74.862Q809.725 968 766 968H194Zm191-223-74-74 381-381H579V184h293v293H766V364L385 745Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" onClick={clickHandler3} className={clicked3 ? "clicked" : ""}>
                    <path d="M725.176 994Q669 994 629.5 954.917 590 915.833 590 860q0-6.5 1-13.464 1-6.965 3-12.536L322 678q-18 15-40.5 22.5T236 708q-56.667 0-96.333-39.118-39.667-39.117-39.667-95Q100 518 139.667 479q39.666-39 96.333-39 23 0 45.5 7.5T322 470l272-156.022q-2-5.708-3-12.843T590 288q0-55.833 39.323-94.917Q668.647 154 724.824 154 781 154 820.5 193.118q39.5 39.117 39.5 95Q860 344 820.333 383 780.667 422 724 422q-23 0-45.5-7.5T638 392L366 548q2 5.571 3 12.536 1 6.964 1 13.464t-1 13.464q-1 6.965-3 12.536l272 156q18-15 40.5-22.5T724 726q56.667 0 96.333 39.118 39.667 39.117 39.667 95Q860 916 820.677 955q-39.324 39-95.501 39Zm-.404-678q12.228 0 20.728-8.272 8.5-8.272 8.5-20.5t-8.272-20.728q-8.272-8.5-20.5-8.5t-20.728 8.272q-8.5 8.272-8.5 20.5t8.272 20.728q8.272 8.5 20.5 8.5Zm-490 286q12.228 0 20.728-8.272 8.5-8.272 8.5-20.5t-8.272-20.728q-8.272-8.5-20.5-8.5t-20.728 8.272q-8.5 8.272-8.5 20.5t8.272 20.728q8.272 8.5 20.5 8.5Zm490 286q12.228 0 20.728-8.272 8.5-8.272 8.5-20.5t-8.272-20.728q-8.272-8.5-20.5-8.5t-20.728 8.272q-8.5 8.272-8.5 20.5t8.272 20.728q8.272 8.5 20.5 8.5ZM725 287ZM235 573Zm490 286Z"/>
                </svg>
            </div>
        </div>
    )
}

