import { FunctionComponent, useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebase } from 'config/initFirebase';

const firebaseAuthConfig = {
  signInFlow: 'popup',
  autoUpgradeAnonymousUsers: true,
  signInSuccessUrl: '/signIn',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    {
      provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
    },
  ],
};

const FirebaseAuth: FunctionComponent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div>
      {show && (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
};

export default FirebaseAuth;
