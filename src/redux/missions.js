const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'BOOK_MISSION': {
      return state.concat(action.payload);
    }
    case 'LOAD_MISSIONS': {
      return action.payload;
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
