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
                        phone = {robot.phone}
                    />
                })
            }
        </div>
    );
};

export default CardList;