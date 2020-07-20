import React from 'react';
import data from './store.js';
import List from './List.js';

import './App.css';


const lists = data.STORE.lists;

const listMap = lists.map((list) =>
  {
    const cards = list.cardIds.map(cardId => data.STORE.allCards[cardId]);
    return <List.List header={list.header} cards={cards} />
  });
 

class App extends React.Component {
  
  
  render() {

    return (
      <main className='App'>
        <header class="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div class="App-list">
          {listMap}
        </div>  
      </main>
    )
  }
};

export default {App};