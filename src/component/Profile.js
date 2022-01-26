import { ListGroup, ListGroupItem } from 'react-bootstrap';
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
    <div>
      <div>
        <h2>My missions</h2>
        <ListGroup>
          {missions.filter((mission) => mission.reserved).map((mission) => (
            <ListGroupItem key={mission.mission_id}>{mission.mission_name}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div>{myRockets}</div>
    </div>
  );
};

export default MyProfile;
