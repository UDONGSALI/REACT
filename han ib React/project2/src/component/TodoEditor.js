import { useRef, useState, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoEditor.css";
import React from 'react';


const TodoEditor = () => {
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onChangContent = (e) => {
        setContent(e.target.value);
    }
    const onSubmit = () =>{
        if(!content){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("")
        inputRef.current.focus();
    };
    const EnterKey = (e) =>{
        if(e.keyCode === 13){
            onSubmit();
        }
    }
    return(
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 💣</h4>
            <div className="editor_wrapper">
                <input ref={inputRef}
                value={content}
                onChange={onChangContent} 
                onKeyDown={EnterKey}
                placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default React.memo(TodoEditor);