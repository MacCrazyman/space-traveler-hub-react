import React from 'react';
import PropTypes from 'prop-types';

const MyRocket = ({ rocketName }) => (
  <div>
    <p>{rocketName}</p>
  </div>
);

MyRocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
};

export default MyRocket;
