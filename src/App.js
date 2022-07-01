import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/search"
          render={ (props) => <Search { ...props } /> }
        />
        <Route
          path="/album/:id"
          render={ (props) => <Album { ...props } /> }
        />
        <Route
          path="/favorites"
          render={ (props) => <Favorites { ...props } /> }
        />
        <Route
          exact
          path="/profile"
          render={ (props) => <Profile { ...props } /> }
        />
        <Route
          path="/profile/edit"
          render={ (props) => <ProfileEdit { ...props } /> }
        />
        <Route
          exact
          path="/"
          render={ (props) => <Login { ...props } /> }
        />
        <Route
          path="*"
          render={ (props) => <NotFound { ...props } /> }
        />
      </Switch>
    );
  }
}

export default App;
