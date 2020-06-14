import React from 'react';
import './List.css';
import Card from './Card.js';

function List(props) {
    const cardTitle = props.cards.map((card) => 
    <Card title = {card.title}  content = {card.content}  key = {card.id}/>
    );
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
            {cardTitle}
            <button type="button" className="List-add-button">
              + Add Random Card
            </button>
            </div>
        </section>
    );
  }
List.defaultProps = {
  cards: [],
};
export default List;

