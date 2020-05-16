import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { AntSwitch } from "./components/CustomSwitches";

import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";
import useLightMode from "./hooks/useLightMode";

import "./App.css";

function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);

  // Light Mode Toggle
  const [lightMode, setLightMode] = useLightMode(false);
  
  const handleChange = e => {
    setLightMode(!lightMode);
  }

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  return (
    <div>
      <Router>
        <nav className="container">
          <h1>
            React Plants <span role="img" aria-label = "plant icon">🌿</span>
          </h1>
          <ul className="steps">
            <li>
              <NavLink exact to="/">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
          <FormGroup>
            <Typography component="div">
                  <Grid component="label" container alignItems="center" spacing={1}>
                      <Grid item>Dark</Grid>
                      <Grid item>
                          <AntSwitch checked={lightMode} onChange={handleChange} name="checkedC" />
                      </Grid>
                      <Grid item>Light</Grid>
                  </Grid>
              </Typography>
          </FormGroup>
        </nav>
        <Route
          exact
          path="/"
          render={() => <PlantList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout" component={CheckoutForm} />
      </Router>
    </div>
  );
}

export default App;

