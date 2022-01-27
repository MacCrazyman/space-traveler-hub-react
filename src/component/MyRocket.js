import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const MyRocket = ({ rocketName }) => (
  <ListGroupItem>
    <p>{rocketName}</p>
  </ListGroupItem>
);

MyRocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
};

export default MyRocket;
