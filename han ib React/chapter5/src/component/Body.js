// import "./Body.css"
import { useState } from "react";
function Body() {
    const [state, setState] = useState({
        name: "",
        gender: "",
        birth:"",
        bio: ""
    });
    const handleOnChange = (e) =>{
        console.log("현재 수정 대상 : ", e.target.name);
        console.log("수정값 : ", e.target.value);
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });
    };
    

    return (
        <div>
            <div>
                <input value={state.name} onChange={handleOnChange} placeholder="이름" name="name" />
            </div>
            <div>
                <select value={state.gender} onChange={handleOnChange} name="gender">
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input type="date" value={state.birth} onChange={handleOnChange} name="birth" />
            </div>
            <div>
                <input value={state.bio} onChange={handleOnChange} name="bio" />
            </div>
        </div>
        )
    }

export default Body;