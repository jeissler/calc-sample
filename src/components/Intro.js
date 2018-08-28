import React from "react";
import {Link} from "react-router-dom";

const Intro = () => {
    return (
        <section className="intro">
            <p>
                Get an honest look at your financial future and find out how to make the most of your assets.
            </p>

            <Link to="/calc">
                <button>
                    Show Me How
                </button>
            </Link>
        </section>
    )
};

export default Intro