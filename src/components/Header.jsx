import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <header className="header">
            <h1 className="title">To do</h1>
            <button className="current">
                2024년 05월, 화요일
                <i>
                    <FontAwesomeIcon icon={faCalendarDays} />
                </i>
            </button>
        </header>
    );
};

export default Header;
