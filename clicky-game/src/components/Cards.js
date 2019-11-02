import React from 'react';


function Cards({handleClick, data}) {
    const rows = 3
    const columns = 4

    const square = []
    for (var i = 0; i < rows; i++) {
        square.push([]);
        for (var j = 0; j < columns; j++) {
            square[i].push(data[j + (4 * i)])
        }
    }

    return (
        // <div role="img" onClick={() => props.handleClick(props.id)}>
        // </div>
        <div>
            {square.map((row) => {
                return (
                    <div class="d-flex justify-content-center">
                        {row.map((item) => {
                            return (
                                <div className="card" onClick={() => handleClick(item.id)}>
                                    <img src={item.image} className="card-img-top" alt="" />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Cards