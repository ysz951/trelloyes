import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from './store';

describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    for (let i = 0; i < 4; i++){
      let tree = renderer
        .create(<List header={STORE.lists[i].header} cards = {STORE.lists[i].cardIds.map((id) => STORE.allCards[id])}/>)
        .toJSON();
      expect(tree).toMatchSnapshot();  
    }
  });

});