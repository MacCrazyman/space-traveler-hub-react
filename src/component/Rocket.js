import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket, reserveRocket, cancelReservation }) => {
  const { rocketName, rocketType, flickrImages } = rocket;
  let button;
  if (rocket.reserved) {
    button = (
      <button type="button" onClick={cancelReservation}>
        Cancel Reservation
      </button>
    );
  } else {
    button = (
      <button type="button" onClick={reserveRocket}>
        Reserve Rocket
      </button>
    );
  }
  return (
    <div>
      <p>{rocketName}</p>
      <p>{rocketType}</p>
      {button}
      <p>
        <img src={flickrImages} alt="Rocket" />
      </p>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocketName: PropTypes.string.isRequired,
    rocketType: PropTypes.string.isRequired,
    flickrImages: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
  reserveRocket: PropTypes.func.isRequired,
  cancelReservation: PropTypes.func.isRequired,
};

export default Rocket;
