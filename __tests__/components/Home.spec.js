import { shallow } from 'enzyme';
import Home from '../../components/Home';

describe('test', () => {
  it('renders', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});
