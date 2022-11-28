import './App.css';
import TodoForm from './components/TodoForm';
import Display from './components/Display';
import {useState} from 'react';

function App() {
  const todoList =[
    {description:"Python Belt", done: false},
    {description:"Get Snowboarding Gear", done: false}
  ]

  const [list, setList] = useState(todoList)
  return (
    <div className="App">
      <TodoForm list={list} setList={setList} />
      <Display list={list} setList={setList}/>
    </div>
  );
}

export default App;