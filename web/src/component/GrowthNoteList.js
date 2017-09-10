import React, {Component} from "react";
import {connect} from 'react-redux';

import * as actions from '../action/index';
import GrowthNote from "./GrowthNote";
import GrowthNoteEditor from "./GrowthNoteEditor";

import "antd/dist/antd.css";

class GrowthNoteList extends Component {
    componentDidMount() {
        this.props.getGrowthNotes();
    }

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

const mapStateToProps = state => ({growthNotes: state.growthNotes});
const mapDispatchToProps = dispatch => ({
    getGrowthNotes: () => dispatch(actions.getGrowthNotes())
});

export default connect(mapStateToProps, mapDispatchToProps)(GrowthNoteList);