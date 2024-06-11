import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faPenToSquare,
  faCircleInfo,
  faClock,
  faCalendarDays,
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
  const { createTodo, refTodoInput, editTarget, updateTodo } =
    useContext(todoDispatchContext);
  const [todoInput, setTodoInput] = useState({
    title: "",
    date: "",
    hours: "",
    minute: "",
  });
  const [todoSetting, setTodoSetting] = useState({
    priority: false,
    remind: false,
  });
  const [isTimeSetting, setIsTimeSetting] = useState(false);

  const timestampFormat = (timestamp) => {
    const dateObj = new Date(timestamp);
    const Y = dateObj.getFullYear();
    const M_PLUS = dateObj.getMonth() + 1;
    const M = M_PLUS < 10 ? `0${M_PLUS}` : M_PLUS;
    const D =
      dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();

    return `${Y}-${M}-${D}`;
  };

  useEffect(() => {
    if (editTarget) {
      setIsTimeSetting(editTarget.hours.length > 0);
      console.log(editTarget);
      console.log(editTarget.hours.length);
      setTodoInput({
        title: editTarget.title,
        date: timestampFormat(editTarget.date),
        hours: editTarget.hours,
        minute: editTarget.minute,
      });
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
    setTodoInput({
      title: "",
      date: "",
      hours: "",
      minute: "",
    });
    setTodoSetting({
      priority: false,
      remind: false,
    });
    setIsTimeSetting(false);
    document.querySelector(".todo_add_pop").classList.remove("show");
  };

  // 투두 생성
  const submitTodo = () => {
    if (todoInput.length === 0) {
      refTodoInput.current.focus();
      return;
    }
    createTodo({
      title: todoInput.title, // 내용
      date: new Date(todoInput.date).getTime(), // 날짜
      hours: todoInput.hours, // 시
      minute: todoInput.minute, // 분
      remind: todoSetting.remind, // 알림
      priority: todoSetting.priority, // 우선순위
    });
    // 팝업닫기
    popClose();
  };

  // 투두 업데이트
  const onClickUpdate = () => {
    updateTodo({
      id: editTarget.id,
      title: todoInput.title, // 내용
      done: editTarget.done,
      date: todoInput.date, // 날짜
      hours: todoInput.hours, // 시
      minute: todoInput.minute, // 분
      remind: todoSetting.remind, // 알림
      priority: todoSetting.priority, // 우선순위
    });
    popClose();
  };

  const onClickTimeToggle = (e) => {
    if (isTimeSetting) {
      setTodoInput({
        ...todoInput,
        hours: "",
        minute: "",
      });
    }
    setIsTimeSetting(!isTimeSetting);
  };

  // 투두 onClick
  const onClickSetting = (e) => {
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

  // 투두 onChange
  const onChangeInput = (e) => {
    setTodoInput({
      ...todoInput,
      [e.target.name]: e.target.value,
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
            value={todoInput.title}
            ref={refTodoInput}
            name="title"
            onChange={onChangeInput}
          />
          {/* date */}
          <div className="todo_setting date_setting">
            <span className="subject">
              <FontAwesomeIcon icon={faCalendarDays} /> Date
            </span>
            <input
              type="date"
              name="date"
              value={todoInput.date}
              onChange={onChangeInput}
            />
          </div>
          {/* time */}
          <div className="todo_setting time_setting">
            <span className="subject">
              <FontAwesomeIcon icon={faClock} /> Time
            </span>
            <button
              className={`time_toggle ${isTimeSetting ? "on" : ""}`}
              onClick={onClickTimeToggle}
            ></button>
            {isTimeSetting && (
              <div className="time_box">
                <input
                  type="tel"
                  id=""
                  value={todoInput.hours}
                  className="hours"
                  placeholder="00"
                  maxLength="2"
                  name="hours"
                  onChange={onChangeInput}
                />
                <span>:</span>
                <input
                  type="tel"
                  id=""
                  name="minute"
                  value={todoInput.minute}
                  className="minute"
                  placeholder="00"
                  maxLength="2"
                  onChange={onChangeInput}
                />
              </div>
            )}
          </div>
          {/* remind */}
          <div className="todo_setting">
            <span className="subject">
              <FontAwesomeIcon icon={faBell} /> Remind me
            </span>
            <ul className="remind_list" onClick={onClickSetting}>
              {remindList.map((remindItem) => {
                return (
                  <li key={remindItem.id}>
                    <button
                      className={`remind_btn ${
                        todoSetting.remind === remindItem.data ? "on" : null
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
            <ul className="priority_list" onClick={onClickSetting}>
              {priorityList.map((priorityItem) => {
                return (
                  <li key={priorityItem.id}>
                    <button
                      className={`priority_btn ${priorityItem.data} ${
                        todoSetting.priority === priorityItem.data ? "on" : null
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
