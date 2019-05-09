import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card" key={item.name}>
      <div className="image">
        <img src={item.sprites.front_default} />
      </div>
      <div className="content">
        <a className="header">{item.name}</a>
      </div>
    </div>
  );
};

export default Card;
