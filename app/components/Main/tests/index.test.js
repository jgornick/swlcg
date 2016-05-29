import Main from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Main />', () => {
  it('renders a <MuiThemeProvider>', () => {
    const renderedComponent = shallow(
      <Main />
    );
    expect(
      renderedComponent.find('MuiThemeProvider').node
    ).toExist();
  });

  it('renders a <main>', () => {
    const renderedComponent = shallow(
      <Main />
    );
    expect(
      renderedComponent.find('main').node
    ).toExist();
  });

  it('renders a <NavBar>', () => {
    const renderedComponent = shallow(
      <Main />
    );
    expect(
      renderedComponent.find('NavBar').node
    ).toExist();
  });

  it('renders children prop', () => {
    const children = <div></div>;
    const renderedComponent = shallow(
      <Main children={children} />
    );
    expect(
      renderedComponent.contains(children)
    ).toEqual(true);
  });
});
