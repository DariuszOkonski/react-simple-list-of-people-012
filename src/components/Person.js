import React from 'react';

const Person = (props) => {
  const { city, name, id, line } = props;
  const lineStyle = line ? { textDecoration: 'line-through' } : { textDecoration: 'none' }

  return (
    <li>
      <h3>{props.line}</h3>
      <h3
        style={lineStyle}
      >{name}</h3>
      <p
        style={lineStyle}
      >{city}</p>
      <button
        onClick={() => props.removeClick(id)}
      >Remove</button>
      <button
        onClick={() => props.lineThrough(id)}
      >{line ? 'No-line' : 'Line-through'}</button>
    </li >
  );
}

export default Person;