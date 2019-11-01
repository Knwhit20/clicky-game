import React from 'react';

function Card(props) {
    return (
        <div role="img" onClick={() => props.handleClick(props.id)}>
            

        </div>
    )
}

export default Card