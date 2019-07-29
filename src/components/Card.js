import React from "react"

const Card = props => {
    let { card, handleCardClick} = props;

    // let cardType; 

    // switch (card.card_class) {
    //     case "":
    //         cardType = <i className="icon type" />;
    //         break;
    //     default:
    //         cardType = <div />;
    // }

    return (
        <div className="ui card">
            <div class="content">
                <img class="right floated mini ui image" src={card.img_url} alt={card.title} />
                <div class="header">
                    {card.title}
                </div>
                <div class="meta">
                    Category Placeholder
                </div>
                <div class="description">
                    {card.content}
                </div>
            </div>
            <div class="ui bottom attached button" onClick={handleCardClick}>
                <i class="add icon"></i>
                Add to Queue
            </div>
        </div>
        );
      };
      
export default Card;
