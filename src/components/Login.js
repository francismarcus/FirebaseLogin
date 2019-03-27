import React from 'react';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    updateEmail = event => {
        this.setState({
            email: event.target.value
        });
    }

    updatePassword = event => {
        this.setState({
            password: event.target.value
        });
    }

    onSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    testClick = event => {
        console.log('goSignup');
    }

    render() {
        return(
        <div >
                <h1>Login</h1>
                <form onSubmit={this.onSubmit}>
                <div >
                    <div >
                    <input type='text'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.updateEmail}
                    />
                    </div>
                </div>

                <div >
                    <div >
                    <input type='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.updatePassword}
                    />
                    </div>
                </div>

                <button type='submit'>Sign Up</button>
                </form>
                <a role='button' onClick={this.testClick}> 
                Dont have an account? signup
                </a>
            </div>


        )
    }

}

export default Login;
