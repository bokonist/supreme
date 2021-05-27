import "../styles/Shop.css";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import ItemDetail from "./ItemDetail";
import Cart from "./Cart";
import ItemGallery from "./ItemGallery";
import { Switch, Route } from "react-router-dom";

interface Props {}
const Shop: React.FC<Props> = () => {
  return (
    <>
      <Navigation />
      <Sidebar />
      <div className="main-body-container">
        <Switch>
          <Route exact path="/shop/item/:id">
            <ItemDetail />
          </Route>
          <Route exact path="/shop/cart">
            <Cart />
          </Route>
          <Route exact path="/shop/category/:categoryName">
            <ItemGallery display="filter" />
          </Route>
          <Route exact path="/shop">
            <ItemGallery display="all" />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Shop;
