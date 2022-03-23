import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import PropTypes from 'prop-types';
import React from 'react';

export default function Entry(props) {
  const row = props.row;

  return (
    <div>
      <Card className="float-right mr-3 mb-3" style={{ maxWidth: 200, height: 500 }}>
        <Card.Img variant="top" src={row.animals} />
        <Card.Body>
          <Card.Title className="">{row.companyName}</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <ListGroup className="">
          <ListGroupItem>{row.firstName}</ListGroupItem>
          <ListGroupItem>{row.lastName}</ListGroupItem>
          <ListGroupItem>{row.date}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="" href={row.animals}>Image Online</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

Entry.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    animals: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired
  })
}