/**
*
* Card
*
*/

import React from 'react';

import styles from './styles.css';

function Card({
  title,
  isUnique,
  abilityTraits,
  normalUnitDamage,
  normalBlastDamage,
  normalTactics,
  edgeEnabledUnitDamage,
  edgeEnabledBlastDamage,
  edgeEnabledTactics,
  text,
  type,
  affiliation,
  side,
  cost,
  damageCapacity,
  forceIcons,
}) {
  return (
    <article className={styles.card}>
      <header>
        <h1>{isUnique ? '♦' : false} {title}</h1>
        <h2>{abilityTraits.map(trait => `${trait}.`)}</h2>
      </header>
      <section className="combat-icons">
        {[...Array(normalUnitDamage)].map((x, index) => <div key={index} className="normal-unit-damage-icon" />)}
        {[...Array(normalBlastDamage)].map((x, index) => <div key={index} className="normal-blast-damage-icon" />)}
        {[...Array(normalTactics)].map((x, index) => <div key={index} className="normal-tactics-icon" />)}
        {[...Array(edgeEnabledUnitDamage)].map((x, index) => <div key={index} className="edge-enabled-unit-damage-icon" />)}
        {[...Array(edgeEnabledBlastDamage)].map((x, index) => <div key={index} className="edge-enabled-blast-damage-icon" />)}
        {[...Array(edgeEnabledTactics)].map((x, index) => <div key={index} className="edge-enabled-tactics-icon" />)}
      </section>
      <section className="text">
        {text}
      </section>
      <aside>
        <section className="card-type">{type}</section>
        <div className={`${affiliation.replace(' ', '-')} ${side}`.toLowerCase()} />
        <div className="cost">{cost}</div>
        <div className="damageCapacity">{damageCapacity}</div>
        <div className="forceIcons">{forceIcons}</div>
      </aside>
    </article>
  );
}

Card.propTypes = {
  title: React.PropTypes.string.isRequired,
  isUnique: React.PropTypes.number,
  abilityTraits: React.PropTypes.array,
  normalUnitDamage: React.PropTypes.number,
  normalBlastDamage: React.PropTypes.number,
  normalTactics: React.PropTypes.number,
  edgeEnabledUnitDamage: React.PropTypes.number,
  edgeEnabledBlastDamage: React.PropTypes.number,
  edgeEnabledTactics: React.PropTypes.number,
  text: React.PropTypes.string,
  type: React.PropTypes.string,
  affiliation: React.PropTypes.string,
  side: React.PropTypes.string,
  cost: React.PropTypes.number,
  damageCapacity: React.PropTypes.number,
  forceIcons: React.PropTypes.forceIcons,
};

Card.defaultProps = {
  isUnique: 0,
  abilityTraits: [],
  normalUnitDamage: 0,
  normalBlastDamage: 0,
  normalTactics: 0,
  edgeEnabledUnitDamage: 0,
  edgeEnabledBlastDamage: 0,
  edgeEnabledTactics: 0,
  text: '',
  affiliation: 'Neutral',
  side: 'Light',
};

export default Card;
