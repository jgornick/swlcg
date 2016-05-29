import NavSearch from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<NavSearch />', () => {
  it('renders a <div>', () => {
    const renderedComponent = shallow(<NavSearch />);
    expect(
      renderedComponent.find('div').node
    ).toExist();
  });

  it('renders an <IconButton>', () => {
    const renderedComponent = shallow(
      <NavSearch />
    );
    expect(
      renderedComponent.find('IconButton').node
    ).toExist();
  });

  it('renders a <TextField>', () => {
    const renderedComponent = shallow(
      <NavSearch />
    );
    expect(
      renderedComponent.find('TextField').node
    ).toExist();
  });

  it('handles click', () => {
    const onClickSpy = expect.createSpy();
    const renderedComponent = shallow(
      <NavSearch handleClick={onClickSpy} />
    );
    renderedComponent.find('IconButton').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
