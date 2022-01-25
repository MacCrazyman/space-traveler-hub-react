import { useSelector } from 'react-redux';

const Missions = () => {
  const number = useSelector((store) => store.missions);
  return (
    <div>
      missions
    </div>
  );
};

export default Missions;
