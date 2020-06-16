import React, {} from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { AuthProvider, FirebaseProvider, FirestoreProvider } from './services';
import { RouteWithLayout } from './utilities';

import { BaseLayout } from './layouts';
import { HomePage, MessagesPage, AddStreamPage, SignInPage, RegisterPage, SpecificStreamPage, CategoryPage, CategoryDetailPage, BrowsePage, Error404Page, PrivacyPolicyPage, FAQPage, SettingsPage} from './pages';

import * as Routes from './routes';

import './App.scss';

function App() {
  return (
    <div className="app">
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <Router basename={Routes.ROUTERPREFIX}>
              <Switch>
                <RouteWithLayout exact path={Routes.LANDING} layout={ BaseLayout } component={ HomePage }/>
                <Redirect from={Routes.HOME} to={Routes.LANDING}/>
                <RouteWithLayout exact path={Routes.MESSAGES} layout={ BaseLayout } component={ MessagesPage }/>
                <RouteWithLayout exact path={Routes.CATEGORIES} layout={ BaseLayout } component={ CategoryPage }/>
                <RouteWithLayout exact path={Routes.CATEGORYDETAIL} layout={ BaseLayout } component={ CategoryDetailPage }/>
                <RouteWithLayout exact path={Routes.BROWSE} layout={ BaseLayout } component={ BrowsePage }/>
                <RouteWithLayout exact path={Routes.STREAM} layout={ BaseLayout } component={ AddStreamPage }/>
                <RouteWithLayout exact path={Routes.SPECSTREAM} layout={ BaseLayout } component={ SpecificStreamPage }/>
                <RouteWithLayout exact path={Routes.AUTH_SIGN_IN} layout={ BaseLayout } component={ SignInPage }/>
                <RouteWithLayout exact path={Routes.REGISTER} layout={ BaseLayout } component={ RegisterPage }/>
                <RouteWithLayout exact path={Routes.PRIVACYPOLICY} layout={ BaseLayout } component={ PrivacyPolicyPage }/>
                <RouteWithLayout exact path={Routes.FAQ} layout={ BaseLayout } component={ FAQPage }/>
                <RouteWithLayout exact path={Routes.SETTINGS} layout={ BaseLayout } component={ SettingsPage }/>
                <RouteWithLayout exact path={Routes.ERROR404} layout={ BaseLayout } component={ Error404Page }/>
              </Switch>
            </Router>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
