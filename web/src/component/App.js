import React, {Component} from 'react';

import NoteList from './NoteList';
import '../style/App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <NoteList />
            </div>
        );
    }
}


