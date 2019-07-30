import React from "react"

const renderQueueButton = (type, card, handleClick) => {
    if (type === "this-turn") {
        return (
            <div className="ui bottom attached disabled button" >
                Current Turn
            </div>
        )
    } else {
        return (
            <div className="ui bottom attached green button" onClick={() => handleClick(card)} >
                <i className="check icon"></i>
                    Confirm Next Turn
            </div>
        )
    }
}

const Card = props => {
    let { card, handleClick, type } = props;

    return (
        !!card
        ? 
            <div className="ui card">
                <div className="content">
                    <img className="right floated mini ui image" src={card.img_url} alt={card.title} />
                    <div className="header">
                        {card.title}
                    </div>
                    <div className="meta">
                        Category Placeholder
                    </div>
                    <div className="description">
                        {card.content}
                    </div>
                </div>
                { type === "list" 
                ?  
                    <div className="ui bottom attached button" onClick={() => handleClick(card)}>
                        <i className="add icon"></i>
                        Add to Queue
                    </div>
                : 
                    renderQueueButton(type, card, handleClick)
                }   
            </div>
        :
            <div className="ui card">
                <div className="content">
                    <div className="ui fluid placeholder">
                        <div className="image header">
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div className="paragraph">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="ui bottom attached button">
                    Please Select A Card 
                </div>
            </div>
    );
};
      
export default Card;
