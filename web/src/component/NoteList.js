import React, {Component} from 'react';

import Note from "./Note";
import 'antd/dist/antd.css'

export default class NoteList extends Component {
    render() {
        return (
            <div>
                {[1,2,3].map(note => <Note note={note}/>)}
            </div>
        )
    }

}
