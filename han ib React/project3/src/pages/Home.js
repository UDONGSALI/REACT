import { useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App"
import { getMonthRangeByDate } from "../util";
import Button from "../component/Button";
import Header from "../component/Header"
import Editor from "../component/Editor";
import DiaryList from "../component/DiaryList";

const Home = () => {
    
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] =useState(new Date());
    const headerTitle = `${pivotDate.getFullYear()}년
    ${pivotDate.getMonth() + 1}월`;

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }
    const [filteredDate, setFilteredData] = useState([]);
    useEffect(() => {
        if(data.length >= 1){
            const { beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
            setFilteredData(
                data.filter(
                    (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
                )
            );
        }
        else{
            setFilteredData([])
        }
    })
    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
            />
            <DiaryList data={filteredDate} />
        </div>
    );
};

export default Home;