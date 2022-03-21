import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Entry from '../Entry/Entry';

export default function Entries(props) {
  const row = props.row;
  console.log(row);
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          {row.map(entry => (
            <Col key={entry.id}>
              <Entry row={entry} />
            </Col>
          ))}
        </Row>
      </Container>
    </div >
  );
}

