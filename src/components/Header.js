import React from "react";

const style = {
        jumbotron: {
        justifyContent: "center",
        fontFamily: 'ZCOOL XiaoWei',
        fontSize: "90px",
        
        
    },
    jumbo: {
        fontFamily: 'ZCOOL XiaoWei',
        backgroundColor: "peru",
        marginBottom: "0px"
    }
};



function Header() {
    const headerText = "Click on an image to earn points, but don't click more than once!"
    return (
        <div>
        
            <div style={style.jumbo} class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 style={style.jumbotron} class="display-4">Memory</h1>
                    <p class="lead">{headerText}</p>
                </div>
            </div>


        </div>
    )
}
export default Header;