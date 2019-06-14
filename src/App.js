import React from 'react';
import List from './List';
import './App.css'

function App(props) {
    props.lists.forEach(listItem => {
      listItem.cards = listItem.cardIds.map(cardId => props.allCards[cardId])
    });
  const arrayOfList = props.lists.map(list => List(list))
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {arrayOfList}
      </div>
    </main>
  );
}

export default App;
