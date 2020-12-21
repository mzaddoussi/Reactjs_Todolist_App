import './App.css';
import { Provider } from 'react-redux'
import store from './store'
// import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import EditTodo from './components/EditTodo'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CompletedTodos from './components/CompletedTodos'

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
      {/* <Navbar /> */}
        <div className="App container">
          <Switch>
            <Route exact path="/add" component={AddTodo} />
            <Route exact path="/edit/:id" component={EditTodo} />
            <Route exact path="/" component={TodoList} />
            <Route exact path="/completed" component={CompletedTodos} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
