import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Row, Col, Image, Button, Badge,
} from 'react-bootstrap';

const Rocket = ({ rocket, reserveRocket, cancelReservation }) => {
  const { rocketName, description, flickrImages } = rocket;
  let button;
  let badge;
  if (rocket.reserved) {
    button = (
      <button
        type="button"
        onClick={cancelReservation}
        className="btn btn-outline-secondary"
      >
        Cancel Reservation
      </button>
    );

    badge = <Badge bg="info">Reserved</Badge>;
  } else {
    button = (
      <Button type="button" onClick={reserveRocket} variant="primary" size="sm">
        Reserve Rocket
      </Button>
    );

    badge = '';
  }
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col sm={3}>
            <Image fluid src={flickrImages} />
          </Col>
          <Col sm={9}>
            <p>
              {badge}
              <strong>
                {' '}
                {rocketName}
              </strong>
            </p>
            <p>{description}</p>
            <p>{button}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImages: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
  reserveRocket: PropTypes.func.isRequired,
  cancelReservation: PropTypes.func.isRequired,
};

export default Rocket;
