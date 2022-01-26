import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { reserve, cancel } from '../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const rocketsSelector = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const reserveRocket = (rocketId) => {
    const rocket = {
      id: rocketId,
    };

    dispatch(reserve(rocket));
  };

  const cancelRocketReservation = (rocketId) => {
    const rocket = {
      id: rocketId,
    };

    dispatch(cancel(rocket));
  };

  const rockets = rocketsSelector.map((rocket) => (
    <Rocket
      key={rocket.id}
      rocket={rocket}
      reserveRocket={() => reserveRocket(rocket.id)}
      cancelReservation={() => cancelRocketReservation(rocket.id)}
    />
  ));

  return (
    <Container>
      <Row>
        <Col sm={12}>{rockets}</Col>
      </Row>
    </Container>
  );
};

export default Rockets;
