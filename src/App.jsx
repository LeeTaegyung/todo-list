import DateList from "./components/DateList";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { createContext, useEffect, useReducer, useRef, useState } from "react";

const mockData = [
    {
        id: 1,
        title: "빨래하기",
        done: false,
        date: new Date().getTime(), // timeStamp
        hours: 5,
        minute: "00",
        priority: false, // 우선순위
        remind: "24h", // 알림
    },
    {
        id: 2,
        title: "청소하기",
        done: false,
        date: new Date().getTime(), // timeStamp
        hours: "",
        minute: "",
        priority: false, // 우선순위
        remind: false, // 알림
    },
    {
        id: 3,
        title: "최강야구 보기",
        done: false,
        date: new Date().getTime(), // timeStamp
        hours: 5,
        minute: "00",
        priority: false, // 우선순위
        remind: false, // 알림
    },
];

const reducer = (todoList, action) => {
    switch (action.type) {
        case "INIT": {
            return action.data;
        }
        case "CREATE": {
            return [...todoList, action.data];
        }
        case "DELETE": {
            return todoList.filter((todo) => todo.id !== action.id);
        }
        case "UPDATE": {
            return todoList.map((todo) =>
                todo.id === action.data.id ? action.data : todo
            );
        }
        case "CHECK": {
            return todoList.map((todo) =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        }
    }
};

export const todoStateContext = createContext();
export const todoDispatchContext = createContext();

function App() {
    const idRef = useRef(3);
    const refTodoInput = useRef();
    const [todoList, dispatch] = useReducer(reducer, []);
    const [editTarget, setEditTarget] = useState(null);
    const [currentDate, setCurrentDate] = useState(
        new Date().setHours(0, 0, 0, 0)
    );

    useEffect(() => {
        dispatch({
            type: "INIT",
            data: mockData,
        });
    }, []);

    // todo 생성
    const createTodo = (data) => {
        dispatch({
            type: "CREATE",
            data: {
                id: ++idRef.current,
                title: data.title,
                done: false,
                date: data.date, // timeStamp
                hours: data.hours, // 시
                minute: data.minute, // 분
                remind: data.remind, // 알림
                priority: data.priority, // 우선순위
            },
        });
    };

    // todo 삭제
    const delTodo = (id) => {
        dispatch({
            type: "DELETE",
            id,
        });
    };

    // todo 수정
    const updateTodo = (data) => {
        dispatch({
            type: "UPDATE",
            data,
        });
        setEditTarget(null);
    };

    // todo 체크 상태값 변경
    const checkTodo = (id) => {
        dispatch({
            type: "CHECK",
            id,
        });
    };

    const editMode = (id) => {
        setEditTarget(todoList.find((todo) => todo.id === id));
        document.querySelector(".todo_add_pop").classList.add("show");
        refTodoInput.current.focus();
    };

    const onClickDate = (timeStamp) => {
        setCurrentDate(timeStamp);
    };

    return (
        <div id="wrap">
            <Header />
            <todoStateContext.Provider value={{ todoList, currentDate }}>
                <todoDispatchContext.Provider
                    value={{
                        createTodo,
                        delTodo,
                        updateTodo,
                        checkTodo,
                        editMode,
                        editTarget,
                        refTodoInput,
                        onClickDate,
                    }}
                >
                    <main className="main">
                        <DateList />
                        <TodoList />
                    </main>
                    <TodoForm />
                </todoDispatchContext.Provider>
            </todoStateContext.Provider>
        </div>
    );
}

export default App;
