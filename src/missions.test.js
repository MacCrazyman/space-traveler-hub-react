import renderer from 'react-test-renderer';
import Missions from './component/missions';

it('Mission component renders correctly', () => {
  const tree = renderer.create(<Missions />).toJSON();
  expect(tree).toMatchSnapshot();
});
