import NavBar from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<NavBar />', () => {
  it('renders an <AppBar>', () => {
    const renderedComponent = shallow(
      <NavBar />
    );
    expect(
      renderedComponent.find('AppBar').node
    ).toExist();
  });
});
