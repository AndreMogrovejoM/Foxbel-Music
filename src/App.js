
import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './conteiners/auth/login/Login';
import HomeScreen from './conteiners/homeScreen/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";
import { auth } from './backend/firebase';

function App() {
  const user = useSelector(selectUser);
  //use to manipulate the user state
  const dispatch = useDispatch();

  //To use API
  const [data, setData] = useState([]);
	const [current, setCurrent] = useState([]);
	const [volume, setVolume] = useState(0);
	const [principal, setPrincipal] = useState([]);

  //Listeners to users login state(authentication state changes)
  useEffect(() => {
    //pass a clean up function on user Authenticated state Listener
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //Logged IN
        //push the user into the store(dispatch an object into the store)
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);


  return (
    <div className="app">
      <Router>
        {!user? (
          <Login />
        ): (
          <Switch>
            <Route exact path='/'>
              <HomeScreen />
            </Route>
          </Switch>
        )

        }
      </Router>
    </div>
  );
}

export default App;
