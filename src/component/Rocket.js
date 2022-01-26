import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const { rocketName, rocketType, flickrImages } = rocket;

  return (
    <div>
      <p>{rocketName}</p>
      <p>{rocketType}</p>
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
  }).isRequired,
};

export default Rocket;
