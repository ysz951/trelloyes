import React from 'react';
import './App.css';
import List from './List.js'

function App(props) {
  const arrayOfLis = props.lists.map((list) => 
    <List header = {list.header} cards = {list.cardIds.map((id) => props.allCards[id])} key = {list.id}/>
  );
 
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {arrayOfLis}
      </div>
    </main>
  );
}
App.defaultProps = {
  lists: [],
};
export default App;
