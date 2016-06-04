import Card from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Card />', () => {
  it('renders an <article>', () => {
    const renderedComponent = shallow(
      <Card title="" />
    );
    expect(
      renderedComponent.find('article').node
    ).toExist();
  });

  it('renders a title', () => {
    const title = 'Executor';
    const renderedComponent = shallow(
      <Card title={title} />
    );
    expect(
      renderedComponent.contains(title)
    ).toEqual(true);
  });

  it('renders a unique icon', () => {
    const renderedComponent = shallow(
      <Card title="" isUnique={1} />
    );
    expect(
      renderedComponent.contains('♦')
    ).toEqual(true);
  });

  it('renders traits', () => {
    const abilityTraits = [
      'Vehicle',
      'Capital Ship',
    ];
    const renderedComponent = shallow(
      <Card title="" abilityTraits={abilityTraits} />
    );
    expect(
      renderedComponent.contains(abilityTraits.map(trait => `${trait}.`))
    ).toEqual(true);
  });

  it('renders combat icons', () => {
    const renderedComponent = shallow(
      <Card
        title=""
        normalUnitDamage={1}
        normalBlastDamage={1}
        normalTactics={1}
        edgeEnabledUnitDamage={1}
        edgeEnabledBlastDamage={1}
        edgeEnabledTactics={1}
      />
    );
    expect(
      renderedComponent.contains([
        <div className="normal-unit-damage-icon" />,
        <div className="normal-blast-damage-icon" />,
        <div className="normal-tactics-icon" />,
        <div className="edge-enabled-unit-damage-icon" />,
        <div className="edge-enabled-blast-damage-icon" />,
        <div className="edge-enabled-tactics-icon" />,
      ])
    ).toEqual(true);
  });

  it('renders text');

  it('renders objective sets');

  it('renders a card type');

  it('renders an affiliaction icon');

  it('renders a cost');

  it('renders a damage capacity');

  it('renders force icons');
});
