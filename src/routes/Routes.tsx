import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from "../components/App";
import { Error404 } from "../components/utility-components/404";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/" component={Error404}></Route>
      </Switch>
    </Router>
  );
};
