export function Favorites() {
    return (
        <div className="favorites-body">
            {/* <div id="root"></div> */}
            <header className="favorites-header">
                <h1>Karen's Hall of Fame </h1>
                <h2>A few of my favorite things...</h2>
            </header>
            <main className="favorites-main">
                <div className="favorites-grid">
                    <img src="./public/assets/artist.png" id="artist"></img>
                        <div className="favorites-description" id="artist-description">
                            <h3>Hozier</h3>
                            <ul>
                                <li>Beautiful Lyrics</li>
                                <li>Easy listening</li>
                                <li>Amazing live performances</li>
                            </ul>
                        </div>
                        <img src="./public/Assets/book.png" id="book"></img>
                            <div className="favorites-description" id="book-description">
                                <h3>Their Eyes Were Watching God - Zora Neale Hurston</h3>
                                <ul>
                                    <li>Classic for a reason!</li>
                                    <li>Unique story about love and the journey of life</li>
                                    <li>Story prioritizes self-love, which is rare in a love story</li>
                                </ul>
                            </div>

                            <img src="./public/assets/cartoon.png" id="cartoon"></img>
                                <div className="favorites-description" id="cartoon-description">
                                    <h3>Bob's Burgers</h3>
                                    <ul>
                                        <li>Incredibly funny</li>
                                        <li>Family centered</li>
                                        <li>Unique Stories!</li>
                                    </ul>
                                </div>

                                <img src="./public/Assets/movie.png" id="movie"></img>
                                    <div className="favorites-description" id="movie-description">
                                        <h3>Mickey-17</h3>
                                        <ul>
                                            <li>Made by my favorite director, Bong Jun Ho</li>
                                            <li>Sci-Fi, Dystopian, and Different</li>
                                            <li>This movie made me realize what a great actor Robert Pattinson is</li>
                                        </ul>
                                    </div>

                                    <img src="./public/Assets/show.png" id="show"></img>
                                        <div className="favorites-description" id="show-description">
                                            <h3>Derry Girls</h3>
                                            <ul>
                                                <li>Makes me laugh like no other show</li>
                                                <li>Historical fiction (my fave!)</li>
                                                <li>Captures adolescence beautifully</li>
                                            </ul>
                                        </div>

                                        <img src="./public/Assets/musical.png" id="musical"></img>
                                            <div className="favorites-description" id="musical-description">
                                                <h3>Beetlejuice</h3>
                                                <ul>
                                                    <li>Best live performance I've ever seen</li>
                                                    <li>Fun and varied music throughout the show</li>
                                                    <li>Shows off the best that theater production teams have to offer</li>
                                                </ul>

                                            </div>

                                        </div>
                                    </main>
                                    <footer>
                                        <p>Karen Cardona-Sanchez</p>
                                        <p>Copyright 2025</p>
                                        <p>Created for BU MET Course CS 601</p>
                                    </footer>
                                </div>
                                )
}