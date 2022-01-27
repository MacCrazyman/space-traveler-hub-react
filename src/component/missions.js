import {
  Badge, Button, Container, Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { bookMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((store) => store.missions);

  const dispatch = useDispatch();

  const handleJoin = (id) => {
    dispatch(bookMission(id));
  };

  return (
    <Container className="text-left">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <th>{mission.mission_name}</th>
              <td>
                {mission.description}
                {' '}
              </td>
              <td className="content-center">
                <Badge bg={mission.reserved ? 'secondary' : 'info'}>
                  {mission.reserved ? 'Active member' : 'NOT A MEMBER'}
                </Badge>
                {' '}
              </td>
              <td className="content-center">
                <Button variant={mission.reserved ? 'outline-danger' : 'outline-secondary'} onClick={() => { handleJoin(mission.mission_id); }}>
                  {mission.reserved ? 'Leave mission' : 'Join mission'}
                </Button>
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
