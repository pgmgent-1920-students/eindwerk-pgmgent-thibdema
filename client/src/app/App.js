import React, {} from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { AuthProvider, FirebaseProvider, FirestoreProvider } from './services';
import { RouteWithLayout } from './utilities';

import { BaseLayout } from './layouts';
import { Home, MessagesPage, SignInPage, BookmarksPage, PokemonsPage, Register} from './pages';

import * as Routes from './routes';

import './App.scss';

function App() {
  return (
    <div className="app">
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <Router basename={'/eindwerk-pgmgent-thibdema'}>
              <Switch>
                <RouteWithLayout exact path={Routes.LANDING} layout={ BaseLayout } component={ Home }/>
                <Redirect from={Routes.HOME} to={Routes.LANDING}/>
                <RouteWithLayout exact path={Routes.MESSAGES} layout={ BaseLayout } component={ MessagesPage }/>
                <RouteWithLayout exact path={Routes.BOOKMARKS} layout={ BaseLayout } component={ BookmarksPage }/>
                <RouteWithLayout exact path={Routes.POKEMONS} layout={ BaseLayout } component={ PokemonsPage }/>
                <RouteWithLayout exact path={Routes.AUTH_SIGN_IN} layout={ BaseLayout } component={ SignInPage }/>
                <RouteWithLayout exact path={Routes.REGISTER} layout={ BaseLayout } component={ Register }/>
              </Switch>
            </Router>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
