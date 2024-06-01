import { useContext } from "react";
import { todoStateContext } from "../App";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todoList = useContext(todoStateContext);
    return (
        <div className="todo_list_area">
            <ul className="todo_list">
                {todoList.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />;
                })}
            </ul>
        </div>
    );
};

export default TodoList;
