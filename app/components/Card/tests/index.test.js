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

  it('renders text', () => {
    const text = 'While this unit is undamaged, it cannot be targeted by enemy card efects.';
    const renderedComponent = shallow(
      <Card title="" text={text} />
    );
    expect(
      renderedComponent.contains(text)
    ).toEqual(true);
  });

  it('renders objective sets'); // TODO

  it('renders a card type', () => {
    const type = 'Unit';
    const renderedComponent = shallow(
      <Card title="" type={type} />
    );
    expect(
      renderedComponent.contains(type)
    ).toEqual(true);
  });

  it('renders an affiliation/side icon', () => {
    const affiliation = 'Rebel Alliance';
    const side = 'Light';
    const renderedComponent = shallow(
      <Card title="" affiliation={affiliation} side={side} />
    );
    expect(
      renderedComponent.contains(
        <div className={`${affiliation.replace(' ', '-')} ${side}`.toLowerCase()} />
      )
    ).toEqual(true);
  });

  it('renders a cost', () => {
    const cost = 8;
    const renderedComponent = shallow(
      <Card title="" cost={cost} />
    );
    expect(
      renderedComponent.contains(
        <div className="cost">{cost}</div>
      )
    ).toEqual(true);
  });

  it('renders a damage capacity', () => {
    const damageCapacity = 10;
    const renderedComponent = shallow(
      <Card title="" damageCapacity={damageCapacity} />
    );
    expect(
      renderedComponent.contains(
        <div className="damageCapacity">{damageCapacity}</div>
      )
    ).toEqual(true);
  });

  it('renders force icons', () => {
    const forceIcons = 3;
    const renderedComponent = shallow(
      <Card title="" forceIcons={forceIcons} />
    );
    expect(
      renderedComponent.contains(
        <div className="forceIcons">{forceIcons}</div>
      )
    ).toEqual(true);
  });
});
