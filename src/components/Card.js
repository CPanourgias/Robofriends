import React from "react";

export default function Card ({ username, name, email }) {
    return (
        <div className='bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5
        '>
            <img src={`https://robohash.org/${username}?200x200`} alt="robot"/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}