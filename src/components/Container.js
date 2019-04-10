import React, { Fragment } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Hello from './Hello';
import { auth } from './firebase';
import firebase from 'firebase';
import { Section, Wrapper, Overlay, Title, Button } from './Container.styles'

class Container extends React.Component {
    state = {
        SignedUp: false,
        email: '',
        password: '',
        loginEmail: '',
        loginPassword: '',
        isLoggedIn: false,
        goLogin: false,
        uid: ''
      }

      componentDidMount () {
        auth.onAuthStateChanged(user => {

          if(user) {
            this.setState({
              email: user.email,
              uid: user.uid,
              isLoggedIn: true
            })
          }
        })
      }

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
          .then(() => {

            const user = firebase.auth().currentUser;
              this.setState({
                email,
                password,
                uid: user.uid,
                isLoggedIn: true
              });
          })
          .catch(err => console.error(err));
    }

      handleLogout = event => {
          auth.signOut()
              .then(() => {
                this.setState({
                  email: '',
                  uid: null,
                  isLoggedIn: false
                });
              });
      }

    render() {
        return (
          <Fragment>
            <Section>
              <Wrapper>
                <Overlay>
                  {this.state.isLoggedIn ?
                    <Hello onLogout={this.handleLogout}
                      name={this.state.email} />
                      :
                      <div>
                      {this.state.SignedUp ?
                        <Login onLogin={this.handleLogin}
                          goSignUp = {
                            () => this.setState({SignedUp: false}) } /> :
                        <SignUp onSignup={this.handleSignUp}
                          goLogin = {
                            () => this.setState({SignedUp: true}) } />
                      }
                       </div>
                  }
                  </Overlay>
                </Wrapper>
            </Section>
            </Fragment>
        )
    }
}

export default Container;
