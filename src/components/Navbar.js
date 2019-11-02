import React from "react";


const style = {
    navbar: {
        background: "purple",
        justifyContent: "left",
        color: "white",
        padding: "20px",
        fontSize: "20px"
    }
};

export default function Navbar({score, topscore, message}) {
    return (
        <div>
            <div>
                <ul style={style.navbar} className="nav d-flex justify-content-around">
                    <li className="nav-item">
                        <a className="nav">Clicky Game</a>
                    </li>
                    <li className="nav-item">
                        <div>
                            {message}
                        </div>
                    </li>
                    <li className="nav-item">
                        <div>
                            Score: {score} | Top Score: {topscore}
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

