import React from 'react';




const submitChoice = () => {
 console.log("You clicked the button")
}


const Home = () => {
    return (
        <header className="App-header">
            <p>Welcome to Selecta-bull!</p>
            <img src="https://4al52k24l8r51wpym5i46ltd-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2019/06/cowsa-1480x833.jpg" className="App-logo" alt="logo" />
            <br></br>

            <p2>Choose a heifer and a bull to see their potential offspring's traits</p2>
            <div class="dropdown">
                <button class="dropbtn">Hiefers</button>
                <div class="dropdown-heifers">
                    <a href ="h1">Sally</a>
                    <a href="h2">Patches</a>
                    <a href="h3">Maxine</a>
                    <a href="h4">Peach</a>
                    <a href="h5">Paula</a>
                    <a href="h6">Flower</a>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Bulls</button>
                    <div class="dropdown-bulls">
                        <a href="b1">Buddy</a>
                        <a href="b2">Cooper</a>
                        <a href="b3">Maxwell</a>
                        <a href="b4">Gus</a>
                        <a href="b5">Paul</a>
                        <a href="b6">Phil</a>
                    </div>
                </div>
            </div>
            <button onClick={submitChoice}>Submit</button>
        </header>
    )
};
export default Home;