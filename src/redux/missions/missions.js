const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'BOOK_MISSION': {
      return state
        .map((mission) => (mission.mission_id !== action
          .payload ? mission : { ...mission, reserved: true }));
    }
    case 'LOAD_MISSIONS': {
      return action.payload.map((mission) => {
        const { mission_id, mission_name, description } = mission; // eslint-disable-line camelcase
        return { mission_id, mission_name, description }; // eslint-disable-line camelcase
      });
    }
    default:
      return state;
  }
};

export const bookMission = (payload) => ({
  type: 'BOOK_MISSION',
  payload,
});

export const loadMissions = (payload) => ({
  type: 'LOAD_MISSIONS',
  payload,
});

export default missionsReducer;
