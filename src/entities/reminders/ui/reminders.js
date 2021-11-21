import React from 'react';
import ReactDOM from 'react-dom';
import { useRecoilState } from 'recoil';
import styles from './reminders.module.scss';
import Reminder from './reminder';
import { remindersState } from '../model';

const Reminders = () => {
  const [reminders] = useRecoilState(remindersState);

  const remindersJsx = (
    <div className={styles.remindersContainer}>
      {!!reminders?.length &&
        reminders.map((reminder) => (
          <Reminder
            key={reminder.id}
            href={reminder.href}
            altText={reminder.alt}
            icon={reminder.icon}
          />
        ))}
    </div>
  );

  return ReactDOM.createPortal(
    remindersJsx,
    document.querySelector('#reminders'),
  );
};

export default Reminders;
