export function Home(){
    return (
        <div className="home-body">
            {/* <div id="root"></div> */}
            <section id="hero">
                <div className="left">
                    <h3 className="rotate-left">Reader</h3>
                    <h3 className="rotate-right">Writer</h3>
                    <h3 className="rotate-left">Programmer</h3>
                </div>
                <div className="middle">
                    <h1 id="hero-title">All About Karen!</h1>
                    <img src="../public/assets/Karen.png" id="karen-profile"></img>
                        <h3>Welcome to my page! Click around to learn more about me, my background, hobbies, and more!</h3>
                </div>
                <div className="right">
                    <h3 className="rotate-right">Crocheter</h3>
                    <h3 className="rotate-left">DIY Queen</h3>
                    <h3 className="rotate-right">History Lover</h3>
                </div>
            </section>

            <section id="class-skills">
                <h1 className="section-title">CS 601 Final Project</h1>
                <h2>Each page in my portfolio demonstrates the various skills learned in this class.</h2>
                <div className="skill-scroll">
                    <ul>
                        <li><h3>HTML Drag and Drop</h3></li>
                        <li><h3>CSS Flexbox</h3></li>
                        <li><h3>CSS Grid</h3></li>
                        <li><h3>CSS Pseudoelements</h3></li>
                        <li><h3>React JS</h3></li>
                    </ul>

                    <ul>
                        <li><h3>HTML Drag and Drop</h3></li>
                        <li><h3>CSS Flexbox</h3></li>
                        <li><h3>CSS Grid</h3></li>
                        <li><h3>CSS Pseudoelements</h3></li>
                        <li><h3>React JS</h3></li>
                    </ul>

                </div>
            </section>
            <footer>
                <p>Karen Cardona-Sanchez</p>
                <p>Copyright 2025</p>
                <p>Created for BU MET Course CS 601</p>
            </footer>
        </div>
    );
}