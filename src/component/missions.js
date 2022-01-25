import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../fetchData';
import { bookMission } from '../redux/missions';

const Missions = () => {
  const number = useSelector((store) => store.missions);

  const dispatch = useDispatch();

  useEffect(async () => {
    const missionsFetched = await fetchMissions();
    dispatch(bookMission(missionsFetched));
  }, []);
  return (
    <div>
      Fetching missions
    </div>
  );
};

export default Missions;
