import LogoSvg from "../img/spa.svg?react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <Link to="/">
            <header className="header">
                <LogoSvg className="header__logo" />
                <span className="header__co">good life.</span>
            </header>
        </Link>
    )
}