const ENDPOINT = 'https://api.spacexdata.com/v3/rockets';
const LOAD_ROCKETS = 'spaceTraveler/rockets/GET_ROCKETS';

const initialState = [];

export const getRocketsFromApi = async () => {
  const response = await fetch(ENDPOINT);
  const rockets = await response.json();
  return rockets;
};

export const getRockets = () => async (dispatch) => {
  const rockets = getRocketsFromApi();
  rockets.then((rocket) => {
    const { id, rocket_name, rocket_type, flickr_images } = rocket;
    dispatch(loadRockets({ id, rocket_name, rocket_type, flickr_images }));
  });
};

export const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
};
