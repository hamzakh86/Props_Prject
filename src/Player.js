//src Player.js 
import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
//Array of attributes
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl}) => {
  return (
    <Card style={{ width: '22rem', margin: '25px' }}>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title> {name} </Card.Title>
      <Card.Text>
      Team: {team}
      <br />
      Nationality: {nationality}
      <br />
      Jerey Number: {jerseyNumber}
      <br />
      Age: {age}
      </Card.Text>
    </Card.Body>
  </Card>
  );
};
export default Player;

