import { useContext, useEffect, useState, useRef } from "react";
import { todoDispatchContext, todoStateContext } from "../App";

const DateItem = ({ timestamp, date, day, onRenderLeft }) => {
    const { currentDate } = useContext(todoStateContext);
    const { onClickDate } = useContext(todoDispatchContext);
    const [now, setNow] = useState(false);
    const refDateItem = useRef();
    let day_text;
    let day_class = "";
    switch (day) {
        case 0: {
            day_class = "sun";
            day_text = "S";
            break;
        }
        case 1: {
            day_text = "M";
            break;
        }
        case 2: {
            day_text = "T";
            break;
        }
        case 3: {
            day_text = "W";
            break;
        }
        case 4: {
            day_text = "T";
            break;
        }
        case 5: {
            day_text = "F";
            break;
        }
        case 6: {
            day_class = "sat";
            day_text = "S";
            break;
        }
    }
    const onClickDateItem = () => {
        onClickDate(timestamp);
        onRenderLeft(refDateItem.current.offsetLeft);
    };

    useEffect(() => {
        setNow(currentDate === timestamp);
        if (now) {
            onRenderLeft(refDateItem.current.offsetLeft);
        }
    }, [currentDate]);

    return (
        <li ref={refDateItem}>
            <button
                className={`date_item ${now ? "on" : ""} ${day_class}`}
                onClick={onClickDateItem}
            >
                <span className="day_txt">{day_text}</span>
                <strong className="day_num">{date}</strong>
            </button>
        </li>
    );
};

export default DateItem;
