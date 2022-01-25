
export default missionsReducer =(state=[], action) => {
  switch(action.type) {
    case 'BOOK_MISSION' : {
      return state
    }
    default:
      return state
  }
}

export const bookMission = (payload) => ({
  type : 'BOOK_MISSION',
  payload,
})