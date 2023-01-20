import { Amplify, API } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import APIFile from "./components/api";
Amplify.configure(awsExports);






function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <p>Response from API:</p>
      <APIFile />
    </>
  );
}

export default withAuthenticator(App);
