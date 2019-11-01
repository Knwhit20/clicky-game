import React from "react";

const style = {
    footer: {
        background: "purple",
        padding: "20px",
        justifyContent: "right"
    }
}

function Footer(){
    return(
        <div>
            <nav style={style.footer} className="navbar fixed-bottom navbar-light bg-light">
                <a className="navbar-brand">Clicky Game</a>
            </nav>
        </div>

    )
}

export default Footer;