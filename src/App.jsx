import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Requests from './views/Requests';
import Main from './views/Main';
import Auth from './views/Auth';
import { useUser } from './context/UserContext';
export default function App() {
  const { user } = useUser();
  return (
    <>
      <Switch>
        <PrivateRoute path="/requests">
          <Requests />
        </PrivateRoute>
        <Route path="/auth">
          {user?.email ? <Redirect to="/requests" /> : <Auth />}
        </Route>
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}
