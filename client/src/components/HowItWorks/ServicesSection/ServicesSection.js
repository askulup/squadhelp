import React from 'react';
import styles from './ServicesSection.module.sass';
import ArticlesServicesList from '../ArticlesServicesList/ArticlesServicesList';

const servicesSection = (
  <section id="servicesSection" className={styles.servicesSection}>
    <div className={styles.descriptionContainer}>
      <span className={styles.noSelectedButton}>Our Services</span>
      <h2>3 Ways To Use Squadhelp</h2>
      <p>Squadhelp offers 3 ways to get you a perfect name for your business.</p>
    </div>
    <div className={styles.servicesContainer}>
      {ArticlesServicesList}
    </div>
  </section>
);

export default servicesSection;
