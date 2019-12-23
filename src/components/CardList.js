import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map(robot => {
                    return <Card
                        key = {robot.id}
                        username = {robot.username}
                        name = {robot.name}
                        email = {robot.email}
                    />
                })
            }
        </div>
    );
};

export default CardList;