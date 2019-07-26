import React from 'react';

const Card = ({ id, name, email }) => {
    return(
        // <h1>RoboFriends</h1>
        <div className='tc bg-light-blue dib pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?90x90`} alt="robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;