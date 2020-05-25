import React, { useState } from 'react'
import firebase from 'firebase'
import { Redirect } from 'react-router-dom'



function Signup() { 

    const [loginValues, setLoginValues] = useState({
        email: "",
        password: ""
    });

    function updateEmail(newEmailAddress: string) {
        setLoginValues(
            {
                email: newEmailAddress,
                password: loginValues.password
            }
        )
    }
    function updatePassword(newPassword: string) {
        setLoginValues(
            {
                email: loginValues.email,
                password: newPassword
            }
        )
    }

    function getCurrentUser() {
        return firebase.auth().currentUser;
    } 
    function submitForm() {
        if (loginValues.email != "" && loginValues.password != "") {
            firebase.auth().createUserWithEmailAndPassword(loginValues.email, loginValues.password)
        }
    }

    if (getCurrentUser() != null) {
        console.log("is logged in")
        return (
            <Redirect to="/app" />
        )
    } else {
        return (
            <div>
                <h1>Signup Page</h1>
                <p>
                  <span>
                      Email
                  </span>
                  <input onChange={(e) =>updateEmail(e.currentTarget.value)} />
                </p>
                <p>
                  <span>
                      Password
                  </span>
                  <input type="password" onChange={(e) =>updatePassword(e.currentTarget.value)} />
                </p>
                <button onClick={() => submitForm() }>
                    Submit
                </button>
            </div>
        )

    }

}

export default Signup