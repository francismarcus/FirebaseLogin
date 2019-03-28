import React from 'react';
import SignUp from './SignUp';
import Login from './Login';

class Container extends React.Component {
    state = {
        SignedUp: false,
        email: '',
        password: ''
      }

      // TODO: goLogin

      handleSignUp = (email, password) => {
          this.setState({

            email,
            password
          })
      }

    render() {
        return (
            <div>
                <SignUp onSignup={this.handleSignUp} />
                <Login onLogin={this.handleLogin} />
                <pre>{JSON.stringify(this.state)}</pre>
            </div>
        )
    }
}

export default Container;
