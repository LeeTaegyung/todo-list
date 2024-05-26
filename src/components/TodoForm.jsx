import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faPenToSquare,
    faCircleInfo,
    faClock,
} from "@fortawesome/free-solid-svg-icons";

const TodoForm = () => {
    return (
        <>
            <button
                className="todo_add_btn"
                onClick={() => {
                    document
                        .querySelector(".todo_add_pop")
                        .classList.add("show");
                }}
            >
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <div className="todo_add_pop">
                <div
                    className="dim"
                    onClick={() => {
                        document
                            .querySelector(".todo_add_pop")
                            .classList.remove("show");
                    }}
                ></div>
                <div className="todo_add_area">
                    <input
                        type="text"
                        className="input_title"
                        placeholder="할 일을 적어주세요."
                    />
                    <div className="todo_setting time_setting">
                        <span className="subject">
                            <FontAwesomeIcon icon={faClock} /> Time
                        </span>
                        <button className="time_toggle"></button>
                        <div className="time_box">
                            <input
                                type="tel"
                                name=""
                                id=""
                                className="time_hour"
                                placeholder="00"
                            />
                            <span>:</span>
                            <input
                                type="tel"
                                name=""
                                id=""
                                className="time_minute"
                                placeholder="00"
                            />
                        </div>
                    </div>
                    <div className="todo_setting">
                        <span className="subject">
                            <FontAwesomeIcon icon={faBell} /> Remind me
                        </span>
                        <ul className="remind_list">
                            <li>
                                <button className="remind_btn">
                                    24시간 전
                                </button>
                            </li>
                            <li>
                                <button className="remind_btn">1시간 전</button>
                            </li>
                            <li>
                                <button className="remind_btn">15분 전</button>
                            </li>
                        </ul>
                    </div>
                    <div className="todo_setting priority_setting">
                        <span className="subject">
                            <FontAwesomeIcon icon={faCircleInfo} /> Priority
                        </span>
                        <ul className="priority_list">
                            <li>
                                <button className="priority_btn medium"></button>
                            </li>
                            <li>
                                <button className="priority_btn high"></button>
                            </li>
                            <li>
                                <button className="priority_btn urgent"></button>
                            </li>
                        </ul>
                    </div>
                    <button className="save_btn">저장</button>
                </div>
            </div>
        </>
    );
};

export default TodoForm;
