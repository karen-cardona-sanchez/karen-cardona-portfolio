// import {DragDrop} from './DragDrop';

export function Pets() {
    return (
        <div>
            <head>
                <script src="./DragDrop.js" type="module"></script>
            </head>
            <body className="pets-body">

                <div id="root"></div>
                <header className="pets-header">
                    <div>
                        <h1>Guess that Pet!</h1>
                        <h3>My pets are a very important part of my life. Getting to know them is like getting to know an extension of myself.</h3>
                    </div>
                </header>
                <main>
                    <h2 >Drag the photo to the correct description of the pet</h2>
                    <div id="draggable-elements">
                        <div id="winnie" draggable="true">

                        </div>
                        <div id="nico" draggable="true">

                        </div>
                        <div id="mocca" draggable="true">

                        </div>
                    </div>
                    <div id="drop-zones">
                        <h2 id="dropStatus"></h2>
                        <div id="nicoDropZone" className="dropZone">
                            <h2>Nico</h2>
                            <p>Nico is the baby of the family. He made his way into our lives through a happy accident.
                                He is goofy and loves to be outdoors. He also loves bothering his brother Winnie and is a bit
                                intimidated by his big sister Mocca</p>
                        </div>

                        <div id="winnieDropZone" className="dropZone">

                            <h2>Winston</h2>
                            <p>Winston, or Winnie, as we like to call him, is our 3.5 legged king. He is much calmer now that he is a bit
                                older, but he's wicked smart and still very playful. He loves cuddling and chin scratches.</p>
                        </div>
                        <div id="moccaDropZone" className="dropZone">

                            <h2>Mocca</h2>
                            <p>Miss Mocca is the oldest of the bunch. She's been around since 2010 and is still going strong. She has
                                always been playful, demanding, and loving. Many are surprised to learn that she is 15, as she still has
                                so much spirit and energy!</p>
                        </div>
                    </div>
                </main>
                <footer>
                    <p>Karen Cardona-Sanchez</p>
                    <p>Copyright 2025</p>
                    <p>Created for BU MET Course CS 601</p>
                </footer>
            </body>
        </div>)
}