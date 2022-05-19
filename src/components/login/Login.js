import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/counter/userSlice';
import { auth } from '../../firebase';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert("Please enter Full Name");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePicture
            })
            .then(() =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePicture,
                }))
            })
        }).catch(error => alert(error));
    }

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error));
    }

  return (
    <div className="login">
      <img src="https://www.pcelectric.at/files/Medien/Icons/Linkedin-Logo.png" alt="LinkedIn logo" />

      <form>
          <input placeholder="Full Name (required if registering)" 
                 value={name} 
                 onChange={(e) => setName(e.target.value)} 
                 type="text" />
          <input placeholder="Profile Pic URL (optional)"
                 type="text"
                 value={profilePicture}
                 onChange={(e) => setProfilePicture(e.target.value)}/>
          <input type="email" 
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Password"
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}/>  

          <button type="submit" onClick={loginToApp}>Sing In</button>
      </form>

      <p>Not a Member?
          <span class="login__register" onClick={register}>Register Now!</span>
      </p>

    </div>
  )
}

export default Login
