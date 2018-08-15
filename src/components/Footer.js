import React from 'react';


const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="app-footer">
            <small>&copy; good life. {year}</small>
        </footer>
    )
};

export default Footer