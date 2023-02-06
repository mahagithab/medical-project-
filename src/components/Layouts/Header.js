import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <header className="header__wrapper">
          <div className="header__logo">
            <NavLink to="/">Medical Project</NavLink>
          </div>
          <nav className="header__nav">
            <NavLink to="/" className="header__link">
              Главное
            </NavLink>
            <NavLink to="/persons" className="header__link">
              Персонал
            </NavLink>
            <NavLink to="/recording" className="header__link">
              Запись на прием
            </NavLink>

            <NavLink to="/registration" className="header__link ml-15">
              Регистрация
            </NavLink>
            <NavLink to="/login" className="header__link">
              Войти
            </NavLink>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
