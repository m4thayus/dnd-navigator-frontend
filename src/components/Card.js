import React from "react"

function Card(props){
    return (
        <div className="ui card">
            <div class="content">
                <img class="right floated mini ui image" src={props.card.img_url} alt={props.card.title} />
                <div class="header">
                    {props.card.title}
                </div>
                <div class="meta">
                    Category Placeholder
                </div>
                <div class="description">
                    {props.card.content}
                </div>
            </div>
            <div class="ui bottom attached button">
                <i class="add icon"></i>
                Add to Queue
            </div>
        </div>
    )
}

export default Card