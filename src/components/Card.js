import React from "react";
import Button from 'react-bootstrap/Button';

function Card(props) {
console.log(props)
  return (
    <div className="card text-dark p-2">
      <div className="card-header bg-info text-light">Love seekers near you!</div>
      <div className="card-body row">
        <div className="col">
          <h3 className="card-text ">
            {props.person.name.title} {props.person.name.first} {props.person.name.last} 
          </h3>
          <p className="card-text">
            Gender: {props.person.gender}
          </p>
          <p className="card-text">
            Cellphone Number: {props.person.cell}
          </p>
          <p className="card-text">
            Country: {props.person.location.country}
          </p> 

        </div>

        <img src={props.person.picture.large} className="col img-fluid" alt="Love person near you" />
      </div>
      <div>
        <p className="card-text row p-2">login: {props.person.login.username}</p>
        <p className="card-text row p-2">password: {props.person.login.password}</p>
       </div>
       <div>
       <Button variant="info" size="small">Meet me</Button>
       </div>
      
    </div>
  );
}

export default Card;
