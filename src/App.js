import React from 'react';
import './App.css';
import List from './List.js'

class App extends React.Component{
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  }
  
  render(){
    const {store} = this.props;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map((list) => 
            <List 
              header = {list.header} 
              cards = {list.cardIds.map((id) => store.allCards[id])} 
              key = {list.id}
            />
          )}
        </div>
      </main>
    );
  }
    

}

export default App;
