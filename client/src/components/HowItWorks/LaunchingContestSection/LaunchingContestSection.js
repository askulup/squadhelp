import React from 'react';
import styles from './LaunchingContestSection.module.sass';
import FAQ from '../FAQ/FAQ';
import NavFAQ from '../NavFAQ/NavFAQ';

const LaunchingContestSection = (
  <section id="launching" className={styles.sectionLaunching}>
    <aside className={styles.nav}>
      {NavFAQ}
    </aside>
    <div className={styles.faq}>
      {FAQ}
    </div>
  </section>
);


export default LaunchingContestSection;
