import { Link } from "react-router-dom";

import LanguageSelector from "./LanguageSelector";

import './Navbar.css'

function Navbar ({
    language,
    setLanguage,
    text
}) {
    return (

        <header className="navbar">
            
            <Link
                to="/"
                className="navbar-logo"
            >
                InCludedEducation
            </Link>

        <nav className="navbar-links">
            
            <Link to='/'>
                {text.home}
            </Link>

            <Link to="/library">
                {text.myLibrary}
            </Link>
        </nav>

            <LanguageSelector
                language={language}
                setLanguage={setLanguage}
            />
        </header>
    )
}

export default Navbar
