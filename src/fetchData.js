const missionsEndpoint = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = () => (
  fetch(missionsEndpoint).then((response) => response.json())
);

export default fetchMissions;
