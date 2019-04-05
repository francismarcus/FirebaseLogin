import React from 'react';

class SignUp extends React.Component {
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
        this.props.onSignup(email, password);

        this.setState({email: '', password: ''})
    }

    testClick = event => {
        console.log('goLogin');
    }

    render() {
        return(
        <div >
                <h1 >Sign Up!</h1>
                <form onSubmit={this.onSubmit}>
                <div >
                    <div >
                    <input type='text'
                        placeholder='Email'
                        value={this.state.email}
                        id='email'
                        onChange={this.updateChange}
                    />
                    </div>
                </div>

                <div >
                    <div >
                    <input type='password'
                        placeholder='Password'
                        value={this.state.password}
                        id='password'
                        onChange={this.updateChange}
                    />
                    </div>
                </div>

                <button type='submit'>Sign Up</button>
                </form>
                <a role='button' onClick={this.testClick}>
                Already have an account? login
                </a>
            </div>


        )
    }

}

export default SignUp;
