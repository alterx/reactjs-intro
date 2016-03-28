import React from 'react';
import Counter from './Counter';

const Item = (props) => {
  return (
    <li>
      {props.text}
      <Counter />
    </li>
  );
}

export default Item;
