import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faBell,
    faCheck,
    faTrash,
    faPenToSquare,
    faPen,
    faCircleInfo,
    faClock,
    faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <div id="wrap">
            <header className="header">
                <h1 className="title">To do</h1>
                <button className="current">
                    2024년 05월, 화요일
                    <i>
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </i>
                </button>
            </header>
            <main className="main">
                <div className="date_list_area">
                    <ul className="date_list">
                        <li>
                            <button className="date_item">
                                <span className="day_txt">M</span>
                                <strong className="day_num">20</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">T</span>
                                <strong className="day_num">21</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">W</span>
                                <strong className="day_num">22</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">T</span>
                                <strong className="day_num">23</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">F</span>
                                <strong className="day_num">24</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">S</span>
                                <strong className="day_num">25</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">S</span>
                                <strong className="day_num">26</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">M</span>
                                <strong className="day_num">20</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">T</span>
                                <strong className="day_num">21</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">W</span>
                                <strong className="day_num">22</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">T</span>
                                <strong className="day_num">23</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">F</span>
                                <strong className="day_num">24</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">S</span>
                                <strong className="day_num">25</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">S</span>
                                <strong className="day_num">26</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">M</span>
                                <strong className="day_num">20</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">T</span>
                                <strong className="day_num">21</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">W</span>
                                <strong className="day_num">22</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">T</span>
                                <strong className="day_num">23</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">F</span>
                                <strong className="day_num">24</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">S</span>
                                <strong className="day_num">25</strong>
                            </button>
                        </li>
                        <li>
                            <button className="date_item">
                                <span className="day_txt">S</span>
                                <strong className="day_num">26</strong>
                            </button>
                        </li>
                    </ul>
                </div>
                {/* // date_list_area */}
                <div className="todo_list_area">
                    <ul className="todo_list">
                        <li>
                            <div className="todo_item">
                                <div className="todo_content">
                                    <input
                                        type="checkbox"
                                        name=""
                                        id="todo-check-1"
                                    />
                                    <label htmlFor="todo-check-1">
                                        <span className="check_icon">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                        <span className="todo_text">
                                            <strong className="todo_title">
                                                빨래하기
                                            </strong>
                                            <span className="todo_time">
                                                8:00 PM
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <div className="todo_util">
                                    <span className="priority urgent"></span>
                                    <span className="remind">
                                        <FontAwesomeIcon icon={faBell} />
                                    </span>
                                    <button className="more_util">
                                        <FontAwesomeIcon
                                            icon={faEllipsisVertical}
                                        />
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
                    </ul>
                </div>
            </main>
            <button className="todo_add_btn">
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            {/* // todo_list_area */}
            <div className="todo_add_pop">
                <div className="dim"></div>
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
            {/* // todo_add_pop */}
        </div>
    );
}

export default App;
