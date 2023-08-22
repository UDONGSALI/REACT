// import "./Body.css"
// import { useState } from "react";
// import { useRef, useState } from "react";

// function Body() {
//     const [text, setText] = useState("");
//     const handleOnChange = (e) =>{
//         setText(e.target.value);
//     }
//     const handleOnClick = () =>{
//         alert(text);
//     }

//     return(
//         <div>
//             <input value={text} onChange={handleOnChange} />
//             {text}
//             <button onClick={handleOnClick}>작성 완료</button>
//         </div>
//     )

// }
// export default Body;

// import { useRef, useState } from "react";

// function Body() {
//     const [text, setText] = useState("");
//     const textRef = useRef();

//     const handleOnChange = (e) =>{
//         setText(e.target.value);
//         console.log({text})
//     }
//     const handleOnClick = () =>{
//         alert(text);
//         textRef.current.value = "";
//     }

//     return(
//         <div>
//             <input ref={textRef} value={text} onChange={handleOnChange} />
//             <button onClick={handleOnClick}>작성 완료</button>
//         </div>
//     )

// }




import { useRef, useState } from "react";

function Body() {
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) =>{
        setText(e.target.value);
        console.log({text})
    }
    const handleOnClick = () =>{
        if(text.length < 5){
            textRef.current.focus();
        }else{
            alert(text);
            setText("");
        }
    };

    return(
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    )

}

export default Body;