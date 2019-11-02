import React from "react";

const style = {
        jumbotron: {
        justifyContent: "center"
    }
};



function Header() {
    const headerText = "Click on an image to earn points, but don't click on any more than once!"
    return (
        <div>
        
            <div style= {style.jumbotron} class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Clicky Game!</h1>
                    <p class="lead">{headerText}</p>
                </div>
            </div>


        </div>
    )
}
export default Header;