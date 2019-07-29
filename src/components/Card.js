import React from "react"

function Card(props){
    return (
        <div>
            <h2>{props.card.title}</h2>
            <img src={props.card.img_url} alt={props.card.title} />
            <p>{props.card.content}</p>
        </div>
    )
}

export default Card