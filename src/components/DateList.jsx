import { useContext, useEffect, useRef, useState } from "react";
import { todoStateContext } from "../App";
import DateItem from "./DateItem";

const DateList = () => {
    const { currentDate } = useContext(todoStateContext);

    const refDateRang = useRef(10);
    const refScrollArea = useRef();

    const [pivotDate, setPivotDate] = useState(currentDate);
    const [dateList, setDateList] = useState([]);
    const [dateOnLeft, setDateOnLeft] = useState();
    const [isScroll, setIsScroll] = useState(false);

    const PIVOT_YEAR = new Date(pivotDate).getFullYear();
    const PIVOT_MONTH = new Date(pivotDate).getMonth();
    const PIVOT_DATE = new Date(pivotDate).getDate();

    useEffect(() => {
        setDateList([...getDateBefore(), ...getDateAfter()]);
    }, []);

    // scroll 위치
    useEffect(() => {
        const SCROLL_LEFT = dateOnLeft - refScrollArea.current.clientWidth / 2;
        refScrollArea.current.scrollLeft = SCROLL_LEFT;
    }, [dateOnLeft]);

    // scroll 이벤트
    useEffect(() => {
        console.log("scroll event");

        const handleScroll = async () => {
            if (refScrollArea.current) {
                const {
                    scrollLeft,
                    scrollWidth,
                    clientWidth,
                } = refScrollArea.current;
                if (scrollLeft <= 50 && !(dateList[0] === dateList[0])) {
                    setIsScroll(true);
                    // 가장 왼쪽에 닿았음
                    console.log("가장 왼쪽에 닿았다.");
                    const beforeArr = await getDateBefore();
                    console.log(beforeArr);
                    setIsScroll(false);
                    // setDateList([...beforeArr, ...dateList]);
                } else if (
                    scrollLeft + clientWidth >= scrollWidth - 50 &&
                    !(
                        dateList[dateList.length - 1] ===
                        dateList[dateList.length - 1]
                    )
                ) {
                    setIsScroll(!isScroll);
                    // 가장 오른쪽에 닿았음
                    console.log("가장 오른쪽에 닿았다.");
                    setDateList([...dateList, getDateAfter()]);
                }
            }
        };

        const scrollArea = refScrollArea.current;
        scrollArea.addEventListener("scroll", handleScroll);

        return () => {
            scrollArea.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const onRenderLeft = (left) => {
        setDateOnLeft(left);
    };

    // pivot 날짜 이전 10개
    const getDateBefore = () => {
        console.log("before");
        const dateBefore = [];
        const START = PIVOT_DATE - refDateRang.current;
        const END = dateList[0] ? dateList[0].date : PIVOT_DATE;
        for (let i = START; i < END; i++) {
            const dateObj = new Date(PIVOT_YEAR, PIVOT_MONTH, i);
            dateBefore.push({
                timestamp: dateObj.getTime(),
                date: dateObj.getDate(),
                day: dateObj.getDay(),
            });
        }
        return dateBefore;
    };

    // pivot 날짜 이후 10개
    const getDateAfter = () => {
        const dateAfter = [];
        const START = dateList[dateList.length - 1]
            ? dateList[dateList.length - 1].date
            : PIVOT_DATE;
        const END = START + refDateRang.current;
        for (let i = START; i < END; i++) {
            const dateObj = new Date(PIVOT_YEAR, PIVOT_MONTH, i);
            dateAfter.push({
                timestamp: dateObj.getTime(),
                date: dateObj.getDate(),
                day: dateObj.getDay(),
            });
        }
        setIsScroll(!isScroll);
        return dateAfter;
    };

    return (
        <div className="date_list_area" ref={refScrollArea}>
            <ul className="date_list">
                {dateList.map((date) => {
                    return (
                        <DateItem
                            {...date}
                            key={date.timestamp}
                            onRenderLeft={onRenderLeft}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default DateList;
