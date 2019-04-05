import React from 'react';

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
                <h1>Login</h1>
                <form onSubmit={this.onSubmit}>
                <div >
                    <div >
                    <input type='text'
                        placeholder='Email'
                        id='email'
                        value={this.state.email}
                        onChange={this.updateChange}
                    />
                    </div>
                </div>

                <div >
                    <div >
                    <input type='password'
                      id='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.updateChange}
                    />
                    </div>
                </div>

                <button type='submit'>Login</button>
                </form>
                <a role='button' onClick={this.props.goSignUp}>
                Dont have an account? signup
                </a>
            </div>


        )
    }

}

export default Login;
