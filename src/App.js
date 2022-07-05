import './App.css';
import { Router,
  Route,
  Redirect,
  Switch
  } from 'react-router-dom';
import Login from './Components/Login';
import { history } from './Utils/history';
import Dashboard from './Components/Dashboard';
import Navigation from './Components/Navigation';
import { Archivo } from './Components/DocumentoPDF';

function PrivateRoute({children, ...rest}) {
  const token = localStorage.getItem('token')
  return (
    <Route {...rest} render={() => {
      return token ? children : <Redirect to="/login" />
    }} />
  )
}

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/pdf">
          <Archivo />
        </Route>
        <Route exact path="/test">
          <Navigation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
