import './App.css';
import Header from './component/Header';
import TodoEditor from "./component/TodoEditor";
import TodoList from './component/TodoLIst';
import React, { useReducer, useRef, useCallback, useMemo } from 'react';


export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();


function App() {

  

  function reducer(state, action){
    switch(action.type){
      case "CREATE":{
        return [action.newItem, ...state];
      }
      case "UPDATE":{
        return state.map((it) => it.id === action.targetId?{
          ...it,isDone: !it.isDone,
        }
        : it
        );
      }
      case "DELETE":{
        return state.filter((it) => it.id !== action.targetId);
      }
      default:
        return state;
    }
  }

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

  const onCreate = useCallback((content) =>{
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone:false,
        createdDate: new Date().getTime(),
      },
    });
      idRef.current += 1;
  }, []);

  const onUpdate = useCallback((targetId) =>{
    dispatch({
      type: "UPDATE",
      targetId,
    });
  },[])

  

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, [])

  
  const [todo, dispatch] = useReducer(reducer, []);

  const memoizedDispatches = useMemo(() => {
    return {onCreate, onUpdate, onDelete};
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={{todo,onCreate, onUpdate, onDelete}}>
        <TodoDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
        <TodoEditor />
        <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}


export default App;
