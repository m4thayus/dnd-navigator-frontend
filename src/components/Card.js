import React from "react"

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
                <div className="ui bottom attached red button" onClick={() => handleClick(card)} >
                    <i className="add icon"></i>
                    Confirm
                </div>
                }
            </div>
        :
            <div className="ui card">
                <div className="content">
                    <div class="ui fluid placeholder">
                        <div class="image header">
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <div class="paragraph">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
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
