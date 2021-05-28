import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Shop from "../components/Shop";

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
