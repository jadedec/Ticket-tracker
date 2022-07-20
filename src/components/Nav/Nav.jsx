import "./Nav.scss";
import user from "../../assets/images/user.svg";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import { useState } from "react";

const Nav = ({ userName,handleSubmit }) => {

    const [showSettings, setShowSSettings] = useState(true);
    const toggleSettings = () => {
        setShowSSettings(!showSettings);
    }


    return (
        <nav className="nav">
            {showSettings && <SettingsMenu userName={userName} toggleSettings={toggleSettings} handleSubmit={handleSubmit} />}
            <h2 className="nav__heading">Ticket Tracker</h2>
            <img onClick={toggleSettings} src={user} className="nav__item" alt="settings icon" />
        </nav>
    );
};

export default Nav;