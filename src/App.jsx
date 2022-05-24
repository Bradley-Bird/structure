import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Requests from './views/Requests';
import Main from './views/Main';
import Auth from './views/Auth';
import { useUser } from './hooks/user';
import Header from './views/Header';
import Request from './views/Request';
import CreateRequest from './views/CreateRequest';
import Edit from './views/Edit';
export default function App() {
  const { user } = useUser();
  return (
    <>
      <Header />
      <Switch>
        <Route path="/auth">
          {user?.email ? <Redirect to="/requests" /> : <Auth />}
        </Route>
        <PrivateRoute path="/requests/:id">
          <Request />
        </PrivateRoute>
        <PrivateRoute path="/requests">
          <Requests />
        </PrivateRoute>
        <PrivateRoute path="/create">
          <CreateRequest />
        </PrivateRoute>
        <PrivateRoute path="/edit">
          <Edit />
        </PrivateRoute>
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}
