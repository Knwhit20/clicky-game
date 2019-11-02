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
        <nav style={style.footer} className="navbar navbar-light bg-light">
            <a className="navbar-brand">Clicky Game</a>
        </nav>

    )
}

export default Footer;