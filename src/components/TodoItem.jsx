import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faCheck,
    faTrash,
    faPen,
    faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { todoDispatchContext } from "../App";
import { onClickSlide } from "../utils/onClickSlide";

const TodoItem = ({
    id,
    title,
    done,
    date,
    hours,
    minute,
    priority,
    remind,
}) => {
    const { delTodo, checkTodo, editMode } = useContext(todoDispatchContext);
    const onClickDelete = () => {
        delTodo(id);
    };

    const onChangeCheck = () => {
        checkTodo(id);
    };

    const onClickEdit = (e) => {
        editMode(id);
        onClickSlide(e);
    };

    return (
        <li>
            <div className="todo_item">
                <div className="todo_content">
                    <input
                        type="checkbox"
                        name=""
                        id={`todo-check-${id}`}
                        checked={done}
                        onChange={onChangeCheck}
                    />
                    <label htmlFor={`todo-check-${id}`}>
                        <span className="check_icon">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className="todo_text">
                            <strong className="todo_title">{title}</strong>
                            {hours && (
                                <span className="todo_time">
                                    {hours}:{minute}
                                </span>
                            )}
                        </span>
                    </label>
                </div>
                <div className="todo_util">
                    {priority && (
                        <span className={`priority ${priority}`}></span>
                    )}
                    {remind && (
                        <span className="remind">
                            <FontAwesomeIcon icon={faBell} />
                        </span>
                    )}
                    <button className="more_util" onClick={onClickSlide}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
            <div className="todo_modify">
                <button className="todo_edit" onClick={onClickEdit}>
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button className="todo_del" onClick={onClickDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
