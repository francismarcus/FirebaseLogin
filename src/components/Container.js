import React from 'react';
import SignUp from './SignUp';
import Login from './Login';

class Container extends React.Component {
    state = {
        SignedUp: false
      }

      // TODO: goLogin

      handleSignUp = event => {
          event.preventDefault();
          this.setState({
              SignedUp: !this.state.SignedUp
          })
      }

    render() {
        return (
            <div>
                <SignUp onSignup={this.handleSignUp} />
                <Login onLogin={this.handleLogin} />
            </div>
        )
    }
}

export default Container;
