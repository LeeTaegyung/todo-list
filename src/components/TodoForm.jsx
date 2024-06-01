import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faPenToSquare,
    faCircleInfo,
    faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { todoDispatchContext } from "../App";

const remindList = [
    {
        id: 1,
        data: "24h",
        text: "24시간 전",
    },
    {
        id: 2,
        data: "1h",
        text: "1시간 전",
    },
    {
        id: 3,
        data: "15m",
        text: "15분 전",
    },
];

const priorityList = [
    {
        id: 1,
        data: "medium",
    },
    {
        id: 2,
        data: "high",
    },
    {
        id: 3,
        data: "urgent",
    },
];

const TodoForm = () => {
    const { createTodo, refTodoInput, editTarget, updateTodo } = useContext(
        todoDispatchContext
    );
    const [todoInput, setTodoInput] = useState("");
    const [todoSetting, setTodoSetting] = useState({
        priority: false,
        remind: false,
    });

    useEffect(() => {
        if (editTarget) {
            setTodoInput(editTarget.title);
            setTodoSetting({
                priority: editTarget.priority,
                remind: editTarget.remind,
            });
        }
    }, [editTarget]);

    // 팝업 열기
    const popOpen = () => {
        document.querySelector(".todo_add_pop").classList.add("show");
        refTodoInput.current.focus();
    };

    // 팝업 닫기
    const popClose = () => {
        // 초기화
        setTodoInput("");
        setTodoSetting({
            priority: false,
            remind: false,
        });
        document.querySelector(".todo_add_pop").classList.remove("show");
    };

    const submitTodo = () => {
        if (todoInput.length === 0) {
            refTodoInput.current.focus();
            return;
        }
        createTodo({
            title: todoInput,
            date: new Date().getTime(),
            priority: todoSetting.priority, // 우선순위
            remind: todoSetting.remind, // 알림
        });
        // 팝업닫기
        popClose();
    };

    const onClickUpdate = () => {
        updateTodo({
            id: editTarget.id,
            title: todoInput,
            done: editTarget.done,
            date: new Date().getTime(),
            priority: todoSetting.priority, // 우선순위
            remind: todoSetting.remind, // 알림
        });
        popClose();
    };

    // 투두 세팅
    const settingClick = (e) => {
        if (!e.target.dataset) return;

        let key = Object.keys(e.target.dataset);
        if (!key.length) return;

        let value =
            todoSetting[key] === e.target.dataset[key]
                ? false
                : e.target.dataset[key];

        setTodoSetting({
            ...todoSetting,
            [key]: value,
        });
    };

    return (
        <>
            <button className="todo_add_btn" onClick={popOpen}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <div className="todo_add_pop">
                <div className="dim" onClick={popClose}></div>
                <div className="todo_add_area">
                    <input
                        type="text"
                        className="input_title"
                        placeholder="할 일을 적어주세요."
                        value={todoInput}
                        ref={refTodoInput}
                        onChange={(e) => {
                            setTodoInput(e.target.value);
                        }}
                    />
                    {/* time */}
                    <div className="todo_setting time_setting">
                        <span className="subject">
                            <FontAwesomeIcon icon={faClock} /> Time
                        </span>
                        <button
                            className="time_toggle"
                            onClick={(e) => {
                                e.target.classList.toggle("on");
                                document
                                    .querySelector(".time_box")
                                    .classList.toggle("show");
                            }}
                        ></button>
                        <div className="time_box">
                            <input
                                type="tel"
                                name=""
                                id=""
                                className="hour"
                                placeholder="00"
                            />
                            <span>:</span>
                            <input
                                type="tel"
                                name=""
                                id=""
                                className="minute"
                                placeholder="00"
                            />
                        </div>{" "}
                    </div>
                    {/* remind */}
                    <div className="todo_setting">
                        <span className="subject">
                            <FontAwesomeIcon icon={faBell} /> Remind me
                        </span>
                        <ul className="remind_list" onClick={settingClick}>
                            {remindList.map((remindItem) => {
                                return (
                                    <li key={remindItem.id}>
                                        <button
                                            className={`remind_btn ${
                                                todoSetting.remind ===
                                                remindItem.data
                                                    ? "on"
                                                    : null
                                            }`}
                                            data-remind={remindItem.data}
                                        >
                                            {remindItem.text}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* priority */}
                    <div className="todo_setting priority_setting">
                        <span className="subject">
                            <FontAwesomeIcon icon={faCircleInfo} /> Priority
                        </span>
                        <ul className="priority_list" onClick={settingClick}>
                            {priorityList.map((priorityItem) => {
                                return (
                                    <li key={priorityItem.id}>
                                        <button
                                            className={`priority_btn ${
                                                priorityItem.data
                                            } ${
                                                todoSetting.priority ===
                                                priorityItem.data
                                                    ? "on"
                                                    : null
                                            }`}
                                            data-priority={priorityItem.data}
                                        ></button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {editTarget ? (
                        <button className="save_btn" onClick={onClickUpdate}>
                            수정
                        </button>
                    ) : (
                        <button className="save_btn" onClick={submitTodo}>
                            저장
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default TodoForm;
