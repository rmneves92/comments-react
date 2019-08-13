import React, { Component } from 'react'

class login extends Component {

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

    login = () => {
        this.props.login(this.state.email, this.state.passwd)
    }

    render() {

        const errorMessages = {
            'auth/wrong-password': 'E-mail e/ou senha inválidos',
            'auth/user-not-found': 'Usuário não encontrado',
            'auth/invalid-email': 'E-mail inválido'
        }

        return (
            <div>
                <h4>Entre para comentar:</h4>
                <form className='form-inline'>
                    <input className='form-control mr-1' type='text' onChange={this.handleChange('email')} placeholder='E-mail' />
                    <input className='form-control mr-1' type='password' onChange={this.handleChange('passwd')} placeholder='Senha' />
                    <button className='btn btn-primary mr-1' type='button' onClick={this.login}>Entrar</button>
                    <button className='btn btn-light' onClick={() => this.props.changeScreen('signup')}>Criar uma conta</button>
                </form>

                {
                    this.props.isAuthError &&
                    <div className='mt-2'>
                        <span className='text-danger'>Erro ao entrar. {errorMessages[this.props.authError]} </span>
                    </div>
                }
            </div>
        )
    }
}

export default login