import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((store) => store.missions);

  return (
    <div>
      <div>
        <h2>My missions</h2>
        <ListGroup>
          {missions.filter((mission) => mission.reserved).map((mission) => (
            <ListGroupItem key={mission.mission_id}>{mission.name}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default MyProfile;
