const missionsEndpoint = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = () => (
  fetch(missionsEndpoint).then((response) => response.json())
);
