import {
  Col, Container, ListGroup, ListGroupItem, Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MyRocket from './MyRocket';

const MyProfile = () => {
  const missions = useSelector((store) => store.missions);
  const rockets = useSelector((state) => state.rockets);

  const myRockets = rockets
    .filter((selector) => selector.reserved === true)
    .map((rocket) => (
      <MyRocket key={rocket.id} rocketName={rocket.rocketName} />
    ));

  return (
    <Container className="text-left">
      <Row>
        <Col>
          <h2>My missions</h2>
          <ListGroup>
            {missions.filter((mission) => mission.reserved).map((mission) => (
              <ListGroupItem key={mission.mission_id}>
                <p>
                  {mission.mission_name}
                </p>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <h2>My rockets</h2>
          <ListGroup>{myRockets}</ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
