

import {Link} from "react-router-dom"

export function NavBar() {
    return (
        <nav>
            <ul>
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="/pets">Pets</Link></li>
                <li className="nav-link"><Link to="/hobbies">Hobbies</Link></li>
                <li className="nav-link"><Link t0='./favorites.html'>Favorites</a></li>
                <li className="nav-link"><a href='karencardonaportfolio.netlify.app/resume'>Resume</a></li>
            </ul>
        </nav>


    )

}