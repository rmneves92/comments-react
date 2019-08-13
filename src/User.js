import React from 'react'

const user = props => {
    return (
        <div className='mb-2 text-muted font-italic text-right'>
            Logado como: {props.email}
            <button className='btn btn-light ml-2' onClick={props.logout}>Sair</button>
        </div>
    )
}

export default user