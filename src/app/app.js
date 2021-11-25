import React, { useState } from 'react';
import Portfolio from '../pages/portfolio';
import styles from './styles/app.module.scss';
import FirstMeeting from '../entities/first-meeting/ui';
/*import Reminders from '../entities/reminders/ui';*/
import { RecoilRoot } from 'recoil';
import { getItemFromLS } from '../shared/helpers/localStorage';

const App = () => {
  const [isFirstMeeting, setIsFirstMeeting] = useState(
    !getItemFromLS('isNotFirstMeeting'),
  );

  const closeFirstMeeting = () => setIsFirstMeeting(false);

  return (
    <RecoilRoot>
      <div className={styles.app}>
        {isFirstMeeting ? (
          <FirstMeeting close={closeFirstMeeting} />
        ) : (
          <Portfolio />
        )}

        {/* maybe i need it someday */}
        {/*<Reminders />*/}
      </div>
    </RecoilRoot>
  );
};

export default App;
