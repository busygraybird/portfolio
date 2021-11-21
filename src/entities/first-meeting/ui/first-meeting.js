import React, { useEffect, useState } from 'react';
import { getNextPhrase } from '../model';
import styles from './first-meeting.module.scss';

/**
 * Block that will be displayed when me and my guest meet for the first time :)
 */
const FirstMeeting = () => {
  const [currentPhrase, setCurrentPhrase] = useState();

  useEffect(() => {
    let nextPhrase = getNextPhrase();

    setCurrentPhrase(nextPhrase.value);

    const interval = setInterval(() => {
      nextPhrase = getNextPhrase();

      if (nextPhrase.done) {
        clearInterval(interval);
      }

      setCurrentPhrase(nextPhrase.value);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.firstMeeting}>
      {!!currentPhrase && (
        <div key={currentPhrase?.order} className={styles.firstMeetingPhrase}>
          {currentPhrase?.phrase}
        </div>
      )}
    </div>
  );
};

export default FirstMeeting;
