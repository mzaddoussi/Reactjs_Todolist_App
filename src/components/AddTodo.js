import React, { Component } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";


class AddTodo extends Component {

    state = {
        id: 0,
        content: ''
    }

    componentDidMount() {
       
    }

    render() {

        const addTodo = (e) => {
            e.preventDefault()
            if(!e.target[0].value){
                return
            }
            this.props.addTodo(this.state)
            this.setState({
                id: 0,
                content: ''
            })
            e.target[0].value = ""
            this.props.history.push('/')
        }

        const handleForm = (e) => {
            this.setState({
                id: uuidv4(),
                content: e.target.value
            })
        }

        return (
            <div>
                <h2 className="mt-5 mb-5 text-center">What's the plan for <b>Today!</b></h2>
                <form onSubmit={(e) => addTodo(e)}>
                <div className="heading mb-3">
                    <h4><b>Add Todo</b></h4>
                    <h4 className="addTodos">
                        <Link to={`/`}><i className="fa fa-long-arrow-alt-left" aria-hidden="true"></i></Link>
                    </h4>
                </div>
                    <div className="form-group">
                        <input type="text" id="addInput" autoFocus className="form-control" onChange={ (e) => handleForm(e) } defaultValue={this.state.content}/>
                    </div>
                    <button type="submit" className="btn btn-success btn-block">Add</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (data) => dispatch({
            type: 'ADD_TODO',
            payload: data
        })
    }
}


export default connect(null, mapDispatchToProps)(AddTodo)