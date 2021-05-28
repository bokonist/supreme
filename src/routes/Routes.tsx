import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Shop from "../components/Shop";
import { Page404 } from "../components/utility-components/Page404";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/" component={Shop}></Route>
      </Switch>
    </Router>
  );
};
