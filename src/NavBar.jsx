

import {Link} from "react-router-dom"

export function NavBar() {
    return (
        <nav>
            <ul>
                <li className="nav-link"><a href="/">Home</a></li>
                <li className="nav-link"><a href="/pets">Pets</a></li>
                <li className="nav-link"><a href="/hobbies">Hobbies</a></li>
                <li className="nav-link"><a href="/favorites">Favorites</a></li>
                <li className="nav-link"><a href="/resume">Resume</a></li>
            </ul>
        </nav>


    )

}