import React, { Component } from 'react'

class signUp extends Component {

    state = {
        email: '',
        passwd: ''
    }

    // criando apenas um handleChange para os dois inputs
    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.passwd)
    }

    render() {

        const errorMessages = {
            'auth/email-already-in-use': 'E-mail já foi utilizado',
            'auth/weak-password': 'Senha muito fraca',
            'auth/invalid-email': 'E-mail inválido'
        }

        return (
            <div>
                <h4>Criar conta</h4>
                <form className='form-inline'>
                    <input className='form-control mr-1' type='text' onChange={this.handleChange('email')} placeholder='Email' />
                    <input className='form-control mr-1' type='password' onChange={this.handleChange('passwd')} placeholder='Senha' />
                    <button className='btn btn-primary mr-1' type='button' onClick={this.createAccount}>Criar conta</button>
                    <button className='btn btn-light' onClick={() => this.props.changeScreen('login')}>Já tenho uma conta, entrar!</button>
                </form>

                {
                    this.props.isSignUpError &&
                    <div className='mt-2'>
                        <span className='text-danger'>Erro ao criar conta. {errorMessages[this.props.signUpError]} </span>
                    </div>
                }
            </div>
        )
    }
}

export default signUp