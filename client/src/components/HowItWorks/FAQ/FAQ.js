import React from 'react';
import parser from 'react-html-parser';
import faqItems from './FAQ.json';
import Collapsible from '../Collapsible/Collapsible';
import styles from './FAQ.sass';

const faq = faqItems.map(({ sectionTitle, sectionID, items }) => (
  <ul key={sectionID} className={styles.bottomBorder}>
    <h2 id={sectionID}>{sectionTitle}</h2>
    {
        items.map(({ question, answer }) => (
          <li>
            <Collapsible title={question}>
              <div>{parser(answer)}</div>
            </Collapsible>
          </li>
        ))
    }
  </ul>
));

export default faq;
