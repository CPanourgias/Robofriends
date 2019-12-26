import React, { Component } from "react";

import '../styles/App.css'
import { connect } from 'react-redux';
import { setSearchField } from "../actions/SetSearchFieldAction";
import { requestRobots } from "../actions/RequestRobotsAction";
import MainPage from "../components/MainPage";


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        // onRequestRobots: () => requestRobots(dispatch) or i can do this
        onRequestRobots: () => dispatch(requestRobots())
    }
};

class App extends Component{

    render() { return <MainPage { ...this.props }/>}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);