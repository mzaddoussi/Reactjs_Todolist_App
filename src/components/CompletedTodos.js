import React from 'react'
import { connect } from 'react-redux'

function CompletedTodos() {
    return (
        <div>
            <h1>rest</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTodos)
