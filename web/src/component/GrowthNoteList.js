import React, {Component} from "react";

import GrowthNote from "../container/GrowthNote";
import GrowthNoteEditor from "./GrowthNoteEditor";

import "antd/dist/antd.css";

export default class GrowthNoteList extends Component {
    render() {
        return (
            <div>
                <GrowthNoteEditor />
                {this.props.growthNotes.map((growthNote, index) =>
                    <GrowthNote
                        rawId={growthNote.rawId}
                        key={index}
                    />)}
            </div>
        )
    }

}
