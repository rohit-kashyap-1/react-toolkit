import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Account from './components/Account';
import DisplayTodos from './components/DisplayTodos';
import CreateTodo from './components/CreateTodo';

function App() {
  return (
    <>
    <CreateTodo />
      <DisplayTodos />
    </>
  );
}

export default App;
