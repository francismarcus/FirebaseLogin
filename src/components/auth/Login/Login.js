import React from 'react';
import { Title, Button, Input } from './Login.styles';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    updateChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      })
    }

    onSubmit = event => {
        event.preventDefault();

        let { email, password } = this.state;
        this.props.onLogin(email, password);

        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return(
        <div >
                <Title>Login</Title>
                <form onSubmit={this.onSubmit}>
                <div >
                    <div >
                    <Input type='text'
                        placeholder='Email'
                        id='email'
                        value={this.state.email}
                        onChange={this.updateChange}

                    />
                    </div>
                </div>

                <div >
                    <div >
                    <Input type='password'
                      id='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.updateChange}
                    />
                    </div>
                </div>

                <Button type='submit'><i class="material-icons">
arrow_forward_ios
</i></Button>
                </form>
                <a role='button' onClick={this.props.goSignUp}>
                <p> Dont have an account? signup </p>
                </a>
            </div>
        )
    }

}

export default Login;
