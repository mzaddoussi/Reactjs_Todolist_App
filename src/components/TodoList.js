import React, { Component } from 'react'
import { connect } from 'react-redux'
import './TodoList.css'
import { Link } from "react-router-dom";
import moment from 'moment';
import 'moment-timezone';
import FlipMove from 'react-flip-move'

class TodoList extends Component {

    componentDidMount() {
        // this.props.getTodos()
    }
    delete = (id) => {
        this.props.deleteTodo(id)
    }
    completed = (id, e) => {
        e.preventDefault()
        const arrTodo = this.props.todos.myTodo.todos.filter(todo => todo.id === id)
        const todo = arrTodo.reduce((item) => { return item })
        this.props.completedTodo(todo)
    }
    getAllTodos = () => {
        this.props.getAllTodo()
    }
    getCompletedTodos = () => {
        this.props.getCompletedTodo()
    }
    getIncompletedTodos = () => {
        this.props.getIncompletedTodo()
    }

    render() {
        const { todos } = this.props.todos.myTodo
        return (
            <div className="listBloc">
                <div className="heading mt-5">
                    <h2><b>Notes</b></h2>
                    <h4 className="addTodos">
                        <Link to={`/add`}><i className="fa fa-edit" aria-hidden="true"></i></Link>
                    </h4>
                </div>
                
                <div className="todoItems mt-3">
                    {!todos ?
                    <div className="mt-5"><h5>No todo left</h5></div>
                    :
                    todos.map((todo, index) => (
                        <div key={index} className="todoBlock mx-5 py-3">
                            <div className="todoCore">
                                <h4 className={`card-title ${todo.completed ? "completed" : ""}`}>{ todo.content }</h4>
                                <p className={`card-text ${todo.completed ? "completed" : ""}`}>{ todo.content }</p>
                                <p>{moment().format('DD/MM/YYYY')}</p>
                            </div>
                            <div className="icons">
                                <span className="icons-sub">
                                    <h5><Link to={`/edit/${todo.id}`}><i className="fas fa-pencil pr-3" aria-hidden="true"></i></Link></h5>
                                    <h5><i className="fas fa-times pr-3" onClick={this.delete.bind(this, todo.id)} aria-hidden="true"></i></h5>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <span className="completedButtons">
                    <button onClick={this.getAllTodos.bind(this)} className="btn btn-primary mt-5">All Todos</button>
                    <button onClick={this.getCompletedTodos.bind(this)} className="btn btn-primary mt-5">Completed Todos</button>
                    <button onClick={this.getIncompletedTodos.bind(this)} className="btn btn-primary mt-5">Incompleted Todos</button>
                </span> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: () => dispatch({
            type: 'GET_TODO'
        }),
        deleteTodo: (id) => dispatch({
            type: 'DELETE_TODO',
            payload: id
        }),
        completedTodo: (todo) => dispatch({
            type: 'COMPLETED_TODO',
            payload: todo
        }),
        getAllTodo: () => dispatch({
            type: 'GET_ALL_TODO',
        }),
        getCompletedTodo: () => dispatch({
            type: 'GET_COMPLETED_TODO',
        }),
        getIncompletedTodo: () => dispatch({
            type: 'GET_INCOMPLETED_TODO',
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)