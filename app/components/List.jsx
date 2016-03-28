import React from 'react';
import Item from './Item';

const List = (props) => {
  return (
    <ul>
      {
        props.items.map((item, index) => {
          return <Item key={index} text={item.text} />;

        })
      }
    </ul>
  );
}

export default List;
