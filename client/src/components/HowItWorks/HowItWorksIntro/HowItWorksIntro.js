import React from 'react';
import styles from './HowItWorksIntro.module.sass';
import PlayButton from '../PlayButton/PlayButton';

const HowItWorksIntro = (
  <section id="intro" className={styles.sectionIntro}>
    <div className={styles.contentContainer}>
      <span className={styles.noSelectedButton}>World&apos;s #1 Naming Platform</span>
      <h1>How Does Squadhelp Work?</h1>
      <p>
        Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing
        with sophisticated technology and Agency-level validation services.
      </p>
      {PlayButton}
    </div>
    <img src="https://www.squadhelp.com/resources/assets/svg/illustrations/app-user.svg" alt="user application" className={styles.introImg} />
  </section>
);


export default HowItWorksIntro;
