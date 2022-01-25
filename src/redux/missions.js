const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'BOOK_MISSION': {
      return state.concat(action.payload);
    }
    default:
      return state;
  }
};

export const bookMission = (payload) => ({
  type: 'BOOK_MISSION',
  payload,
});

export default missionsReducer;
