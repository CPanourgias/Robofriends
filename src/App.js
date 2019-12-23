import React from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { robots } from './robots'

export default function App () {
    return (
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={ robots }/>
        </div>
    );
}