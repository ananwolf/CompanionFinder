import React from "react";
import { Button, Accordion, Card } from "react-bootstrap";

const PetCard = ({ animals }) => {
  return (
    <div>
      {animals.map(animal => animal)}
    </div>
  );
};

export default PetCard;