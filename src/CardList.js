import React from 'react';

function Card({title, image, price}) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
}

function CardList({cards}) {
  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={card.id} title={card.title} image={card.image} price={card.price} />
      ))}
    </div>
  );
}

export default CardList;
