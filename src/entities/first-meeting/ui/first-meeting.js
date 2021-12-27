import React, { useEffect, useState } from 'react';
import { getNextPhrase } from '../model';
import styles from './first-meeting.module.scss';
import { appSettings } from '../../../app';
import { setItemToLS } from '../../../shared/helpers/localStorage';

/**
 * Block that will be displayed when me and my guest meet for the first time :)
 */
const FirstMeeting = ({ close }) => {
  const [currentPhrase, setCurrentPhrase] = useState();

  useEffect(() => {
    let nextPhrase = getNextPhrase();

    setCurrentPhrase(nextPhrase.value);

    const interval = setInterval(() => {
      nextPhrase = getNextPhrase();

      if (nextPhrase.done) {
        // TODO: rename item
        setItemToLS('isNotFirstMeeting', true);
        clearInterval(interval);
        close();
      }

      setCurrentPhrase(nextPhrase.value);
    }, appSettings.firstMeetingSlideDuration);

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
