import React from "react";

const style = {
    footer: {
        backgroundColor: "purple",
        padding: "20px",
        justifyContent: "right"
    }
}

function Footer(){
    return(
        <nav style={style.footer} className="navbar">
            <a className="navbar-brand"></a>
        </nav>

    )
}

export default Footer;