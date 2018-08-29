import img from "../img/chart-wht.svg";
import React from "react";

const Hero = () => {
    return (
        <section className="hero">
            <img src={img} className="hero__img" alt="logo"/>
            <h1 className="hero__title">It's your life. Own it.</h1>
        </section>
    )
};

export default Hero