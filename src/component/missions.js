import { Badge, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { bookMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((store) => store.missions);

  const dispatch = useDispatch();

  const handleJoin = (id) => {
    dispatch(bookMission(id));
  };

  return (
    <div>
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
              <td>{mission.mission_name}</td>
              <td>
                {mission.description}
                {' '}
              </td>
              <td>
                <Badge bg={mission.reserved ? 'secondary' : 'info'}>
                  {mission.reserved ? 'Active member' : 'NOT A MEMBER'}
                </Badge>
                {' '}
              </td>
              <td>
                <Button onClick={() => { handleJoin(mission.mission_id); }}>
                  {mission.reserved ? 'Leave mission' : 'Join mission'}
                </Button>
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
