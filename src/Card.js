import React from "react";

const Card = (props) => {
  return (
    <div
      className="card"
      id={`card-${props.id}`}
      style={{ backgroundImage: `url(${props.data.img})` }}
    >
      <h1 className="card__year">{props.data.year}</h1>
      <ul className="card__events">
        {props.data.events.map((event, key) => {
          return (
            <li key={key} className="card__event">
              {event}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
