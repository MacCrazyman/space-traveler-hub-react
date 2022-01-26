import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rocketsSelector = useSelector((state) => state.rockets);

  const rockets = rocketsSelector.map((rocket) => (
    <Rocket key={rocket.id} rocket={rocket} />
  ));

  return (
    <div>
      <div>{rockets}</div>
      <hr />
    </div>
  );
};

export default Rockets;
