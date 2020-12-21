const initialState = {
    todos: [
        {id: 1, content: 'Write a blog post', completed: false},
        {id: 2, content: 'Read a book', completed: false},
        {id: 3, content: 'Walk the dog', completed: false},
        {id: 4, content: 'Finishing Project', completed: false}
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_TODO':
            return {
                todos: [{id:1, content:'ss'}]
            }
        case 'ADD_TODO':
            return {
                todos: [...state.todos, action.payload]
            }
        case 'UPDATE_TODO':
            return {
                todos: state.todos.map(todo => todo.id == action.payload.id ? todo = action.payload : todo)
            }
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'COMPLETED_TODO':
            return {
                todos: state.todos.map(todo => todo.id == action.payload.id ? {id: todo.id, content: todo.content, completed: !todo.completed} : todo)
            }
        // case 'GET_ALL_TODO':
        //     return {
        //         todos: state.treatment
        //     }
        // case 'GET_COMPLETED_TODO':
        //     return {
        //         todos: state.treatment,
        //         todos: state.todos.filter(todo => todo.completed === true)
        //     }
        // case 'GET_INCOMPLETED_TODO':
        //     return {
        //         todos: state.treatment,
        //         todos: state.todos.filter(todo => todo.completed === false)
        //     }
    
        default: {
                return state
            }
    }
}