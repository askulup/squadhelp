import React from 'react';
import faqItems from '../FAQ/FAQ.json';
import styles from './NavFAQ.module.sass';

const liFAQ = faqItems.map(({ sectionTitle, sectionID }) => (
  <li key={sectionID}><a href={"#" + sectionID}>{sectionTitle}</a></li>
));

const NavFAQ = (
  <nav>
    <ul className={styles.menu}>
      {liFAQ}
    </ul>
  </nav>
);

export default NavFAQ;
