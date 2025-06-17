export function Hobbies(){
    return(
    <div>
        <header className="hobbies-header">
            <h1>I have lots of different hobbies and love trying new things!</h1>
            <h2>My free time is spent...</h2>
        </header>
        <main>
        <div className="hobby-card">
            <img src="./public/Assets/guitar.png" class="rotate-left"></img>
            <div class="flex-text rotate-right">
                <h2>Playing Guitar</h2>
                <ul>
                    <li>Still learning</li>
                    <li>I like both acoustic and electric</li>
                    <li>I have a music background, but am self taught on guitar</li>
                </ul>
                
            </div>
        </div>
        <div className="hobby-card">
            <div className="flex-text rotate-left">
                <h2>Crocheting</h2>
                <ul>
                    <li>Very relaxing hobby</li>
                    <li>I like making plushies and accessories</li>
                    <li>Always looking for inspo for my next project</li>
                </ul>
               
            </div>
            <img src="./public/Assets/crochet.png" class="rotate-right"></img>

        </div>
        <div class="hobby-card">
            <img src="./public/Assets/cooking.png" class="rotate-left"></img>
            <div class="flex-text rotate-right">
                <h2>Cooking</h2>
                <ul>
                    <li>Love to make meals for my family</li>
                    <li>One of my biggest passions</li>
                    <li>Sweet and Savory is my favorite combo</li>
                </ul>
                
            </div>
        </div>
        <div className="hobby-card">
            <div className="flex-text rotate-left">
                <h2>Painting</h2>
                <ul>
                    <li>My newest hobby</li>
                    <li>I still have lots to learn</li>
                    <li>Love following tutorials</li>
                </ul>
            </div>
            <img src="../public/assets/painting.png" class="rotate-right"></img>
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