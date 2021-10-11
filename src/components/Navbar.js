import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ProductsView from "../pages/ProductsView";
import '../styles/navbar.scss';

function Navbar(props) {
  return (
    <Router>
      <div>
        <div className="navbar">
          <h1 className="logo">LOCO MOCO</h1>
          <div>
            <ul className="navigation">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contactUs">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <ProductsView />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path='/productDetail'>
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
