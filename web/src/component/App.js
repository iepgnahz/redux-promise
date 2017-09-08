import React, {Component} from "react";

import GrowthNoteList from "./GrowthNoteList";

import "../style/App.css";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <GrowthNoteList />
            </div>
        );
    }
}


