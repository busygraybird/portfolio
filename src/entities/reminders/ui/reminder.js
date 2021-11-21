import React, { memo } from 'react';
import styles from './reminders.module.scss';

const Reminder = ({ href, altText, icon }) => (
  <div className={styles.remindersContainerReminder}>
    <a
      className={styles.reminderLink}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <img className={styles.reminderImg} src={icon} alt={altText} />
    </a>
  </div>
);

export default memo(Reminder);
