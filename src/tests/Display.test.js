import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders a String given by props', () => {
    const props = {
      value: 'such a nice value!'
    }
    const display = shallow(<Display  {...props} />)
    expect(display.text()).toMatch(props.value)
  });
}); 