import React from 'react';
import './List.css';
import Card from './Card';

function List(props) {
  const cardsArray = props.cards.map(card => Card(card));
  return (
    <section className='List' key={props.id}>
       <header className="List-header">
          <h2>
            {props.header}
          </h2>
        </header>
        <div className="List-cards">
            {cardsArray}
        </div>
    </section>
  );
}

export default List;