import React from 'react';

function Card({name, image, nickName}) {
    return(
        <div>
            <h3>{name}</h3>
            <h5>{nickName}</h5>
            <img src={image} alt="no hay" width='200px' height='250px'></img>
        </div>
    );
};

export default Card;