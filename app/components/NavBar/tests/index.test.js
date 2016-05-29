 /* eslint-disable no-unused-vars */
import NavBar from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavSearch from '../../NavSearch/index';

describe('<NavBar />', () => {
  it('renders an <AppBar>', () => {
    const renderedComponent = shallow(
      <AppBar />
    );
    expect(
      renderedComponent.find('AppBar').node
    ).toExist();
  });

  it('renders its props', () => {
    const renderedComponent = shallow(
      <AppBar
        title="SWLCG"
        iconElementRight={<NavSearch />}
      />
    );
    expect(
      renderedComponent.contains('SWLCG')
    ).toEqaul(true);
    expect(
      renderedComponent.contains(<NavSearch />)
    ).toEqaul(true);
  });
});
