import React from "react";

const style = {
    navbar: {
        background: "purple",
        justifyContent: "left",
        color: "white",
        padding: "20px",
        fontSize: "20px" 
}};

function NavBar() {
    return (
        <div>
            <div>
                <ul style={style.navbar} className="nav">
                    <li className="nav-item">
                        <a className="nav">Clicky Game</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default NavBar;