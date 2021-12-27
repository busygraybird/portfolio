import React, { useState } from 'react';
import Portfolio from '../pages/portfolio';
import styles from './styles/app.module.scss';
import FirstMeeting from '../entities/first-meeting/ui';
/*import Reminders from '../entities/reminders/ui';*/
import { RecoilRoot } from 'recoil';
import { getItemFromLS } from '../shared/helpers/localStorage';
import '../shared/api/index';
import { ApolloProvider } from '@apollo/client';
import githubClient from '../shared/api';

const App = () => {
  const [isFirstMeeting, setIsFirstMeeting] = useState(
    // TODO: rename item
    !getItemFromLS('isNotFirstMeeting'),
  );

  const closeFirstMeeting = () => setIsFirstMeeting(false);

  return (
    <ApolloProvider client={githubClient}>
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
    </ApolloProvider>
  );
};

export default App;
