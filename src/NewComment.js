import React, {Component} from 'react'

class newComment extends Component {

    state = {
        newComment: ''
    }

    handleChange = event => {
        this.setState({
            newComment: event.target.value
        })
    }

    sendComment = () => {
        this.props.sendComment(this.state.newComment)
        this.setState({
            newComment: ''
        })
    }

    render(){
        return (
            <div>
                <textarea onChange={this.handleChange} value={this.state.newComment}></textarea>
                <button onClick={this.sendComment}>Enviar</button>
            </div>
        )
    }
}

export default newComment