import img from "../img/chart-wht.svg";

export default function Hero() {
    return (
        <section className="hero">
            <img src={img} className="hero__img" alt="chart increasing in value"/>
            <h1 className="hero__title">It's your life. Own it.</h1>
        </section>
    )
}