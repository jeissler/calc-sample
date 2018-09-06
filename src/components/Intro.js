import React from "react";
import {Link} from "react-router-dom";

const Intro = () => {
    return (
        <section className="intro">
            <p>
                Get an honest look at your financial future and find out how to make the most of your assets.
            </p>

            <Link to="/calc" className="intro__btn">
                Find Out How
            </Link>
        </section>
    )
};

export default Intro