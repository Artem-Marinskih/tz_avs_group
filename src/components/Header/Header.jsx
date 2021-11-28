import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

export const Header = () => {
  const [listState, setListState] = useState({
    toggle: false,
    arrow: false,
  });

  const headerListDisplay = listState.toggle ? 'Header__list-displayOn' : 'Header__list-displayOff';
  const arrow = listState.arrow ? faChevronUp : faChevronDown;

  const getHelpList = (e) => {
    e.preventDefault();

    console.log('click');
    setListState((prev) => ({
      ...prev,
      toggle: !prev.toggle,
      arrow: !prev.arrow,
    }));
  };

  const [buttonState, setButtonState] = useState({
    toggle: false,
    wrapper: false,
  });

  const menuToggle = buttonState.toggle
    ? 'Header__burger-button_opened'
    : 'Header__burger-button_closed';

  const menuWrapper = buttonState.wrapper ? 'Header__burger-wrapper' : 'Header__wrapper';

  const handleBurgerClick = (e) => {
    e.preventDefault();

    setButtonState((prev) => ({
      ...prev,
      toggle: !prev.toggle,
      wrapper: !prev.wrapper,
    }));
  };

  return (
    <header className="Header">
      <div className="Header__logo">
        <div className="Header__logo-circle"></div>
        <div className="Header__logo-ellipse"></div>
      </div>
      <div className={menuWrapper}>
        <div className="Header__menu">
          <ul className="Header__links">
            <li>
              <a href="URL" className="Header__link">
                About
              </a>
            </li>
            <li>
              <a href="URL" className="Header__link arrow" onClick={getHelpList}>
                Help <FontAwesomeIcon icon={arrow} />
              </a>
              <ul className={'Header__list ' + headerListDisplay}>
                <li>
                  <a href="URL" className="Header__link">
                    User Guide
                  </a>
                </li>
                <li>
                  <a href="URL" className="Header__link">
                    Contact Support
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="URL" className="Header__link">
                Features
              </a>
            </li>
          </ul>
        </div>
        <div className="Header__buttonContainer">
          <button className="Header__button">Sign Up</button>
        </div>
      </div>
      <button
        type="button"
        className={'Header__burger-button ' + menuToggle}
        onClick={handleBurgerClick}
      ></button>
    </header>
  );
};
