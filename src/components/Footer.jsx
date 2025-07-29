const year = new Date().getFullYear();

const Legal = () => {
    const disclaimer = "1. The numbers represented here are for demonstration purposes only and should not be taken as investment advice. The company 'good life.' and it's associated properties are entirely fictitious and are in no way responsible for any actions taken based on the information provided.";

    return <small className="footer__legal">{disclaimer}</small>
};

export default function Footer({ showLegal = false }) {
    return (
        <footer className="footer">
            <small className="footer__copyright">&copy; good life. {year}</small>

            {showLegal && <Legal />}
        </footer>
    )
}