import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faCheck,
    faTrash,
    faPen,
    faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const TodoItem = ({ id, title, done, date, priority, remind }) => {
    const [checkDone, onCheckDone] = useState(done);

    return (
        <li>
            <div className="todo_item">
                <div className="todo_content">
                    <input
                        type="checkbox"
                        name=""
                        id={`todo-check-${id}`}
                        checked={checkDone}
                        onChange={(e) => {
                            onCheckDone(e.target.checked);
                        }}
                    />
                    <label htmlFor={`todo-check-${id}`}>
                        <span className="check_icon">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className="todo_text">
                            <strong className="todo_title">{title}</strong>
                            <span className="todo_time">8:00 PM</span>
                        </span>
                    </label>
                </div>
                <div className="todo_util">
                    {priority && <span className="priority urgent"></span>}
                    <span className="remind">
                        <FontAwesomeIcon icon={faBell} />
                    </span>
                    <button className="more_util">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
            <div className="todo_modify">
                <button className="todo_edit">
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button className="todo_del">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
