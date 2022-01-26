import { useSelector } from 'react-redux';
import MyRocket from './MyRocket';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);

  const myRockets = rockets
    .filter((selector) => selector.reserved === true)
    .map((rocket) => (
      <MyRocket key={rocket.id} rocketName={rocket.rocketName} />
    ));

  return <div>{myRockets}</div>;
};

export default MyProfile;
