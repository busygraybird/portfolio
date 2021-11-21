import React, { useEffect, useState } from 'react';
import Portfolio from '../pages/portfolio';
import styles from './styles/app.module.scss';
import FirstMeeting from '../entities/first-meeting/ui';
import Reminders from '../entities/reminders/ui';
import { RecoilRoot } from 'recoil';

const App = () => {
  const [isFirstMeeting, setIsFirstMeeting] = useState();

  useEffect(() => {
    const isFirstMeeting = true;

    setIsFirstMeeting(isFirstMeeting);
  }, []);

  return (
    <RecoilRoot>
      <div className={styles.app}>
        {isFirstMeeting ? <FirstMeeting /> : <Portfolio />}
        <Reminders />
      </div>
    </RecoilRoot>
  );
};

export default App;
