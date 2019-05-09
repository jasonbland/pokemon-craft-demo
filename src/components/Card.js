import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <div className="card" key={item.name}>
      <div className="image">
        <img src={item.sprites.front_default} alt={item.name} />
      </div>
      <div className="content">
        <Link to={`/pokemon/detail/${item.name}`}>
          <div className="header">{item.name}</div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
