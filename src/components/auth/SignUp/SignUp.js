import React from 'react';
import { Title, Button, Input, P } from './SignUp.styles';

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

    render() {
        return(
        <div >
                <Title>Sign Up!</Title>
                <form onSubmit={this.onSubmit}>
                <div >

                    <Input type='text'
                        placeholder='Email'
                        value={this.state.email}
                        id='email'
                        onChange={this.updateChange}
                    />

                </div>

                <div >

                    <Input type='password'
                        placeholder='Password'
                        value={this.state.password}
                        id='password'
                        onChange={this.updateChange}
                    />

                </div>

                <Button type='submit'><i class="material-icons">
arrow_forward_ios
</i></Button>
                </form>
                <a role='button' onClick={this.props.goLogin}>
                <P> Already have an account? login </P>
                </a>
            </div>


        )
    }

}

export default SignUp;
