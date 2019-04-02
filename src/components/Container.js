import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { auth } from './firebase';
import firebase from 'firebase';

class Container extends React.Component {
    state = {
        SignedUp: false,
        email: '',
        password: '',
        loginEmail: '',
        loginPassword: '',
        isLoggedIn: false,
        uid: ''
      }

      // TODO: goLogin

    handleSignUp = (email, password) => {
      auth.createUserWithEmailAndPassword(email, password).catch(err => console.error(err))
      this.setState({
        SignedUp: true,
        email,
        password
      })
    };

    handleLogin = (email, password) => {
      auth.signInWithEmailAndPassword(email, password)
          .then(u => {
            const user = firebase.auth().currentUser;

            console.log(user)
              this.setState({
                email,
                password,
                uid: user.uid,
                isLoggedIn: true
              });
          })
          .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <SignUp onSignup={this.handleSignUp} />
                  <pre>
                    {JSON.stringify(this.state.SignedUp)}
                    <h4>
                      {JSON.stringify(this.state.email)}
                      {JSON.stringify(this.state.password)}
                    </h4>
                  </pre>

                <Login onLogin={this.handleLogin} />
                 <pre>
                   {JSON.stringify(this.state.isLoggedIn)}
                   <h4> {JSON.stringify(this.state.uid)} </h4>
                  </pre>

            </div>
        )
    }
}

export default Container;
