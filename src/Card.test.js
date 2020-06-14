import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';
import STORE from './store';

describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', (i = 2) => {
    const tree = renderer
      .create(<Card title='First card' content = 'lorem ipsum'/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});