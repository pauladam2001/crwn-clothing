import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import './App.css';
import { GlobalStyle } from './global.styles';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = () => {
  const currentUser = useSelector(selectCurrentUser); // useSelector is always going to run when the selectCurrentUser function receives a new value
  const dispatch = useDispatch();

  useEffect(() => {         // componentDidMount
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
  <div>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
      <Route  exact path='/checkout' component={CheckoutPage} />
      <Route  exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
    </Switch>
  </div>
  );

}

export default App;
