import logo from "../img/chart.svg";
import React from "react";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="logo"/>
            <h1 className="header__title">It's your life. Own it.</h1>
        </header>
    )
};

export default Header