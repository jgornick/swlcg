 /* eslint-disable no-unused-vars */
import NavBar from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import AppBar from 'material-ui/AppBar';

describe('<NavBar />', () => {
  it('renders an <AppBar>', () => {
    const renderedComponent = shallow(
      <AppBar />
    );
    expect(
      renderedComponent.find('AppBar').node
    ).toExist();
  });
});
