import React from "react";
// import PlayerView from "./PlayerView";
import Card from "../components/Card";


class DMView extends React.Component {
   state = {
       cards: [],
       loading: true,
       turns: [],
       selected: null
   };

   componentDidMount () {
       fetch("http://localhost:3000/api/v1/cards")
       .then(response => response.json())
       .then(cards => this.setState({ cards, loading: false}));
   }
   handleCardClick = selected => {
       this.setState({ selected});
   

   const add = !this.state.turns.filter(Card => Card.id === selected.id).length;

   if (add) {
       const turn = [...this.state.turn, selected];
       this.setState({ turn });
    }
 };

 render() {
     const {selected} = this.state;
     if (selected){
         return (
             <Card
                card={selected}
                handleCardClick={this.handleCardClick}
            />
         );
     }
  
     
 }
}

export default DMView;