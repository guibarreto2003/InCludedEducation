import { Link } from "react-router-dom";

import LanguageSelector from "./LanguageSelector";
import useLanguage from "../context/useLanguage";

import './Navbar.css'

function Navbar () {
    const { text } = useLanguage()

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

            <LanguageSelector />
        </header>
    )
}

export default Navbar
