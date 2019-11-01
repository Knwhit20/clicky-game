import React from 'react';

function Cards(props) {
    return (
        <div role="img" onClick={() => props.handleClick(props.id)}>
            </div>
    )
}

export default Cards