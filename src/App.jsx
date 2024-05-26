import DateList from "./components/DateList";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const mockData = [
    {
        id: 1,
        title: "빨래하기",
        done: false,
        date: new Date().getTime(), // timeStamp
        priority: false, // 우선순위
        remind: false, // 알림
    },
    {
        id: 2,
        title: "청소하기",
        done: false,
        date: new Date().getTime(), // timeStamp
        priority: false, // 우선순위
        remind: false, // 알림
    },
    {
        id: 3,
        title: "최강야구 보기",
        done: false,
        date: new Date().getTime(), // timeStamp
        priority: false, // 우선순위
        remind: false, // 알림
    },
];

function App() {
    return (
        <div id="wrap">
            <Header />
            <main className="main">
                <DateList />
                <TodoList mockData={mockData} />
            </main>
            <TodoForm />
        </div>
    );
}

export default App;
