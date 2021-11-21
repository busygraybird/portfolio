import React, { useEffect, useState } from 'react';
import Portfolio from '../pages/portfolio';
import styles from './styles/app.module.scss';
import FirstMeeting from '../entities/first-meeting/ui';

const App = () => {
  const [isFirstMeeting, setIsFirstMeeting] = useState();

  useEffect(() => {
    const isFirstMeeting = true;

    setIsFirstMeeting(isFirstMeeting);
  }, []);

  return (
    <div className={styles.app}>
      {isFirstMeeting ? <FirstMeeting /> : <Portfolio />}
    </div>
  );
};

export default App;
