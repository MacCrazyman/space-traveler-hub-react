import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Missions = () => {
  const missions = useSelector((store) => store.missions);

  const dispatch = useDispatch();

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
                <Button>Not a member</Button>
                {' '}
              </td>
              <td><Button>Join mission</Button></td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
