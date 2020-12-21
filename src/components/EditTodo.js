import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

function EditTodo(props) {

    const [oldTodo,setOldTodo] = useState({id: 0, content: ''})
    const [todo,setTodo] = useState({id: 0, content: ''})
    
    useEffect(() => {

        const id = props.match.params.id

        const oldTodo = props.todos.filter(todo => todo.id == id)
        setOldTodo({
            id: oldTodo[0].id,
            content: oldTodo[0].content
        })
        
    }, [])

    const UpdateTodo = (e) => {
        e.preventDefault()
        if(!e.target[0].value){
            return
        }

        props.updateTodo(todo)

        props.history.push('/')

        setTodo({
            id: 0,
            content: ''
        })
        e.target[0].value = ""
    }

    const handleForm = (e) => {
        setTodo({
            id: oldTodo.id,
            content: e.target.value
        })
    }

    return (
        <div>
            <h2 className="mt-5 mb-5 text-center">Change the plan ?</h2>
            <form onSubmit={(e) => UpdateTodo(e)}>
                <div className="heading mb-3">
                    <h4><b>Edit Todo</b></h4>
                    <h4 className="addTodos">
                        <Link to={`/`}><i className="fa fa-long-arrow-alt-left" aria-hidden="true"></i></Link>
                    </h4>
                </div>
                <div className="form-group">
                    <input type="text" id="addInput" className="form-control" onChange={ (e) => handleForm(e) } defaultValue={oldTodo.content}/>
                </div>
                <button type="submit" className="btn btn-success btn-block">Update</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.myTodo.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodo: (data) => dispatch({
            type: 'UPDATE_TODO',
            payload: data
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo)