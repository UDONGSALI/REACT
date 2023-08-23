import './App.css';
import Header from './component/Header';
import TodoEditor from "./component/TodoEditor";
import TodoList from './component/TodoLIst';
import { useState, useRef } from 'react';

function App() {
  

  const idRef = useRef(3);
  const mockTodo =[
    {
      id:0,
      isDone: false,
      content: "React 공부",
      createdDate: new Date().getTime(),    
    },
    {
      id:1,
      isDone: false,
      content: "빨래",
      createdDate: new Date().getTime(),    
    },
    {
      id:2,
      isDone: false,
      content: "카르마",
      createdDate: new Date().getTime(),
    }
  ];

  const onCreate = (content) =>{
      const newItem ={
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      };
      setTodo([newItem, ...todo]);
      idRef.current += 1;
  }

  const onUpdate = (targetId) =>{
    setTodo(
      todo.map((it) =>
        it.id === targetId ? {...it, isDone: !it.isDone} : it
      )
    )
  }

  const [todo, setTodo] = useState([]);

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId))
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
