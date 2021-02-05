import React from "react";

function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <div className="card-header">Hot person near you!</div>
      <div className="card-body">
      <span className="card-text">
          {props.person.name.title}
        </span>
      <span className="card-text">
          {props.person.name.first}
        </span>
        <span className="card-text">
          {props.person.name.last}
        </span>
        <img src={props.person.picture.large} />
        
      </div>
    </div>
  );
}

export default Card;
