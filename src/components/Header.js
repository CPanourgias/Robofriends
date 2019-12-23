import React, {Component} from "react";
import CounterButton from "./CounterButton";

class Header extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return (
            <div>
                return <h1 className="f1">RoboFriends</h1>
                <CounterButton color={'red'}/>
            </div>
        );
    }
}

export default Header;