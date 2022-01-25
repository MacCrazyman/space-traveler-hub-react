import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from '../fetchData';
import { loadMissions } from '../redux/missions';

const Missions = () => {
  const missions = useSelector((store) => store.missions);

  const dispatch = useDispatch();

  useEffect(async () => {
    if (missions.length) return;
    const missionsFetched = await fetchMissions();
    dispatch(loadMissions(missionsFetched));
  }, []);
  return (
    <div>
      Fetching missions
    </div>
  );
};

export default Missions;
