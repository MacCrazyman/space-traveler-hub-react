const ENDPOINT = 'https://api.spacexdata.com/v3/rockets';
const LOAD_ROCKETS = 'spaceTraveler/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'spaceTraveler/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'spaceTraveler/rockets/CANCEL_ROCKET';

const initialState = [];

export const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

export const reserve = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancel = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

export const getRocketsFromApi = async () => {
  const response = await fetch(ENDPOINT);
  const rockets = await response.json();
  return rockets;
};

export const getRockets = () => async (dispatch) => {
  const rocketItems = getRocketsFromApi();
  rocketItems.then((rockets) => {
    rockets.forEach((rocket) => {
      const data = {
        id: rocket.id,
        rocketName: rocket.rocket_name,
        rocketType: rocket.rocket_type,
        flickrImages: rocket.flickr_images[0],
      };
      dispatch(loadRockets(data));
    });
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKETS: {
      return [...state, action.payload];
    }
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload.id) return rocket;
        return { ...rocket, reserved: true };
      });

      return newState;
    }
    case CANCEL_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload.id) return rocket;
        return { ...rocket, reserved: false };
      });

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
