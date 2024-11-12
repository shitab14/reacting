// src/routes.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EmailPage from './pages/EmailPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/email" component={EmailPage} />
    </Switch>
  </Router>
);

export default Routes;