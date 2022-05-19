import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header'
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Widgets from './components/widgets/Widgets';
import {login, logout, selectUser} from './features/counter/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          user: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
     { user && <Header />}
     
     {!user? (
       <Login />
     ) : (
     <div className="app__body">
     <Sidebar />
     <Feed />
     <Widgets />

   </div>
   )
    }
      
    </div>
  );
}

export default App;
