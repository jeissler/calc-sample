import logo from "../img/spa.svg";
import React from "react";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="logo"/>
            <span className="header__co">good life.</span>
        </header>
    )
};

export default Header