import { getFormattedDate, emotionList } from "../util";
import Button from "./Button";
import "./Editor.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem"

const Editor = ({initData, onSubmit}) =>{
    const navigate = useNavigate();

    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: ""
    });
    
    const handleChangeDate = (e) =>{
        setState({
            ...state,
            date: e.target.value
        });
    };
    
    const handleChangeContent = (e) =>{
        setState({
            ...state,
            content: e.target.value
        });
    };

    const handleSubmit = () => {
        onSubmit(state);
    }

    const handleOnGoBack = () =>{
        navigate(-1);
    }

    const handleChangeEmotion = (emotionId) => {
        setState({
            ...state,
            emotionId,
        });
    };
    useEffect(() => {
        if(initData){
            setState({
                ...initData,
                date: getFormattedDate(new Date(initData.date))
            });
        }
    }, [initData]);
    return(
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input type="date" value={StaticRange.date} onChange={handleChangeDate} />
                </div>
                    {state.date}
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map((it) => (
                        <EmotionItem 
                        key={it.id} 
                        {...it}
                        onClick={handleChangeEmotion} 
                        isSelected={state.emotionId === it.id} />
                    ))}
                </div>
                {state.emotionId}
            </div>
            <div className="editor_section">
                {/* 일기 */}
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea placeholder="오늘은 어땠나요?" 
                    value={state.content}
                    onChange={handleChangeContent}
                    />
                </div>
                {state.content}
            </div>
            <div className="editor_section">
                {/* 작성완료, 취소 */}
            </div>
        <div className="edtor_section botton_section">
            <Button text={"취소하기"} onClick={handleOnGoBack}></Button>
            <Button text={"작성완료"} type={"positive"} onClick={handleSubmit}></Button>
        </div>
        </div>
    );
};

export default Editor;