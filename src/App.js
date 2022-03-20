import './App.css';
import { Router,
  Route,
  Redirect,
  Switch
  } from 'react-router-dom';
import Login from './Components/Login';
import { history } from './Utils/history';

function PrivateRoute({children, ...rest}) {
  const token = localStorage.getItem('token')
  return (
    <Route {...rest} render={() => {
      return token ? children : <Redirect to="/signin" />
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
        <PrivateRoute exact path="/dashboard">

        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
