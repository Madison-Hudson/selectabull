import React from 'react';
const Home = () => {
    return (
        <header className="App-header">
            <p>Welcome to Selecta-bull!</p>

            <img src="https://4al52k24l8r51wpym5i46ltd-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2019/06/cowsa-1480x833.jpg" className="App-logo" alt="logo" />
            <br></br>
            <p2>Choose a heifer and a bull to see their potential offspring's traits</p2>
            <div class="dropdown">
                <button class="dropbtn">Hiefers</button>
                <div class="dropdown-content">
                    <a href="#">Heifer 1</a>
                    <a href="#">Hiefer 2</a>
                    <a href="#">Hiefer 3</a>
                    <a href="#">Heifer 4</a>
                    <a href="#">Hiefer 5</a>
                    <a href="#">Hiefer 6</a>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Bulls</button>
                    <div class="dropdown-content">
                        <a href="#">Bull 1</a>
                        <a href="#">Bull 2</a>
                        <a href="#">Bull 3</a>
                    </div>
                </div>
            </div>
            <button>Submit</button>
        </header>

    )
};
export default Home;