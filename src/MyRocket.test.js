import MyRocket from "./component/MyRocket";
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<MyRocket rocketName='Rocket number 1' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
