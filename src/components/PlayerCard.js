import React from "react"

function PlayerCard(props){
    let { card } = props;

    return (
        <div className="item">
            <div className="image">
                <img className="ui rounded image" src={card.img_url} alt={card.title} />
            </div>
            <div className="content">
                <div className="header">
                    {card.title}
                </div>
                <div className="meta">
                    <span>{card.type}</span>
                </div>
                <div className="description">
                    <p>{card.content}</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard