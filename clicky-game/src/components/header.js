import React from "react";

const style = {
    navbar: {
        background: "purple",
        justifyContent: "left",
        color: "white",
        padding: "20px",
        fontSize: "20px"
    },
    jumbotron: {
        justifyContent: "center"
    }
};

function Header() {
    return (
        <div>
            <div>
                <ul style={style.navbar} className="nav">
                    <li className="nav-item">
                        <a className="nav">Clicky Game</a>
                    </li>
                    
                </ul>
            </div>
            

            <div style= {style.jumbotron} class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Clicky Game!</h1>
                    <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>


        </div>
    )
}
export default Header;