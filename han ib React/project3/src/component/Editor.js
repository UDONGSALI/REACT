import "./Editor.css";
import { useState, useEffect, useCallback } from "react";
import { emotionList, getFormattedDate } from "../util";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";


const Editor = ({ initData, onSubmit}) => {
        const [state, setState] = useState ({
            date: getFormattedDate(new Date()),
            emotionId: 3,
            content: "",
        });
        useEffect(() => {
        if (initData) {
            setState({
                ...initData,
                date: getFormattedDate(new Date(parseInt(initData.date))),
            });
        }
        },[initData]);
    

    // 날짜 변경시 호출
    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    };

    // 일기 입력 
    const handleChangeContent = (e) => {
        setState({
            ...state,
           content:e.target.value,
        });
    };
    
    // 작성완료 버튼 호출
    const handleSubmit = () => {
        onSubmit(state);
    }
    //뒤로 가기
    const navigate = useNavigate();
    
    const handleOnGoBack = () => {
        navigate(-1);
    }
 
    // 감정 이모티콘 호출
    const handleChangeEmotion = useCallback((emotionId) => {
        setState((state) =>({
            ...state,
            emotionId,
        }));
    }, []);

    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input type="date" value={state.date}
                    onChange={handleChangeDate} />
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map((it) => (
                        <EmotionItem
                        key = {it.id}
                        {...it}
                        onClick={handleChangeEmotion}
                        isSekected={state.emotionId === it.id} 
                        />
                    ))}
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea
                    placeholder="오늘은 어땠나요?"
                    value={state.content}
                    onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className="editor_section bottom_section">
              <Button text={"취소하기"} onClick={handleOnGoBack}/>
              <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
            </div>
        </div>
    );
    };


export default Editor;