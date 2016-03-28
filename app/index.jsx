import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';

const items = [
  { text: 'item 1' },
  { text: 'item 2' },
  { text: 'item 3' },
  { text: 'item 4' }
];

ReactDOM.render(<List items={items} />, document.getElementById('app'));
