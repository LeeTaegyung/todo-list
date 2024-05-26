import TodoItem from "./TodoItem";

const TodoList = ({ mockData }) => {
    return (
        <div className="todo_list_area">
            <ul className="todo_list">
                {mockData.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />;
                })}
            </ul>
        </div>
    );
};

export default TodoList;
