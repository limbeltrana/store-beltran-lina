import React from "react";
import { Card } from "react-bootstrap";

const HistoryCard = ({
  productImage,
  category,
  productName,
}) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={productImage} />
        <Card.Body>
          <small className="text-muted">{category}</small>
          <Card.Text>{productName}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default HistoryCard;
