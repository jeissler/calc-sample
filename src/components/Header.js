import logo from "../img/chart.svg";
import React from "react";

// stateless components are just functions
const Header = (props) => {
    // pass var data into return like props
    const intro = `Welcome to the beginning ${props.month} ${new Date().getFullYear()}`;

    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="logo"/>
            <h1 className="header__title">{intro}</h1>
        </header>
    )
};

export default Header