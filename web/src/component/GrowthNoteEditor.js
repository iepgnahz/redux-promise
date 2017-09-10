import React, {Component} from "react";
import {Card} from "antd";
import {connect} from 'react-redux';

import * as actions from '../action/index';

import "antd/dist/antd.css";
import "../style/GrowthNoteEditor.css";

import GrowthNoteEditorBody from "./GrowthNotEditorBody";

class GrowthNoteEditor extends Component {
    render() {
        return (<div className='growth-note-editor'>
            <Card title='创建成长日志' extra={<p>{this.props.date}</p>} bordered={false} style={{width: 500}}>
                <GrowthNoteEditorBody createGrowthNote={this.props.submitGrowthNote} operationType='create'/>
            </Card>
        </div>)
    }
}

const mapStateToProps = state => ({growthNotes: state.growthNotes});
const mapDispatchToProps = dispatch => ({
    submitGrowthNote: growthNote => dispatch(actions.createGrowthNote(growthNote))
});

export default connect(mapStateToProps, mapDispatchToProps)(GrowthNoteEditor);



