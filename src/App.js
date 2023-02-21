import logo from "./logo.svg";
import "./App.css";
import { Provider, atom, useAtom } from "jotai";
import TodoList from './Components/TodoList'
function App() {
  return (
    <Provider>
      <div>
        <h1>Jotai Todo List</h1>
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
