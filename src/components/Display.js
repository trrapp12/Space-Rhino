import React from 'react'
import Ape from '../components/images/DALL_E_ape_x_small.png'
import Rhino from '../components/images/DALL_E_Rhino_640.png'

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

    async function clickHandler3() {

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

// This works but doesn't include the photo

        // const shareData = {
        //     title: 'My shared item',
        //     text: 'Check out this cool thing I found!',
        //     url: 'https://example.com/my-item'
        //   };
          
        //   navigator.share(shareData)
        //     .then(() => console.log('Shared successfully!'))
        //     .catch(error => console.error('Error sharing:', error));

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
            <div className="icon-holder">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" onClick={clickHandler1} className={clicked ? "clicked" : ""}>
                    <path d="m12 21.9-1.85-1.7q-2.75-2.525-4.487-4.288Q3.925 14.15 2.925 12.8t-1.363-2.488Q1.2 9.175 1.2 7.95q0-2.625 1.8-4.413Q4.8 1.75 7.45 1.75q1.2 0 2.4.487 1.2.488 2.15 1.363.95-.875 2.15-1.363 1.2-.487 2.4-.487 2.65 0 4.45 1.787 1.8 1.788 1.8 4.413 0 1.225-.362 2.362-.363 1.138-1.363 2.488t-2.737 3.112Q16.6 17.675 13.85 20.2Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" onClick={clickHandler2} className={clicked2 ? "clicked" : ""}>
                    <path d="M4.55 19.45v-5.5H7.2v2.85h2.85v2.65Zm0-9.4v-5.5h5.5V7.2H7.2v2.85Zm9.4 9.4V16.8h2.85v-2.85h2.65v5.5Zm2.85-9.4V7.2h-2.85V4.55h5.5v5.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" onClick={clickHandler3}>
                    <path d="M727.118 997q-55.701 0-95.91-40.43Q591 916.14 591 862.055q0-7.707 2-18.549 2-10.842 4-20.297L330.288 667Q311 687 286.654 699.5T234.448 712q-54.937 0-95.192-40.368Q99 631.265 99 575.882q0-55.382 40.256-95.132Q179.511 441 234.448 441q27.506 0 51.529 10.5Q310 462 330 482l267-154.292q-2-6.936-4-18.129-2-11.192-2-18.965 0-54.947 40.091-94.781Q671.181 156 726.882 156q54.618 0 94.868 39.868Q862 235.735 862 291.118q0 55.382-40.255 95.132Q781.489 426 726.552 426q-29.213 0-52.459-7.969-23.246-7.969-41.381-28.031L365 536.209q2 8.741 3.5 20.94 1.5 12.199 1.5 19.092 0 6.894-1.5 16.352-1.5 9.457-3.5 18.198L632.712 761q18.135-16.062 40.558-25.531Q695.692 726 726.552 726q54.937 0 95.193 40.368Q862 806.735 862 862.118q0 54.382-40.132 94.632Q781.735 997 727.118 997Z"/>
                </svg>
            </div>
        </div>
    )
}

