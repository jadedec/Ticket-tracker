
import "./SettingsMenu.scss";
import close from "../../assets/images/x.svg";
import userPic from "../../assets/images/user2.svg";

const SettingsMenu = ({ userName,toggleSettings,handleSubmit }) => {
  return (
    <div className="settings-menu">
      <div className="settings-menu__content">
        <img src={close} alt="Close menu" className="settings-menu__cross" onClick={toggleSettings} />
        <img src={userPic} alt="profile" className="settings-menu__profile" />
        <h2 className="settings-menu__title">{userName}</h2>
        <form className="settings-menu__form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" className="settings-menu__input" />
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" className="settings-menu__input" />
          <button className="settings-menu__button">SAVE</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsMenu;