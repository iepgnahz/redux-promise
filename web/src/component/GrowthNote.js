import React, {Component} from "react";
import {Button, Card, Modal} from "antd";

import "antd/dist/antd.css";
import "../style/GrowthNote.css";

import GrowthNoteEditorBody from "./GrowthNotEditorBody";

export default class GrowthNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    deleteGrowthNote(rawId) {
        this.props.deleteGrowthNote(rawId);
    }

    updateGrowthNote() {
        this.setState({
            visible: true
        })
    }

    submitGrowthNote(rawId, growthNote) {
        this.props.updateGrowthNote(rawId, growthNote);
    }

    render() {
        const growthNote = this.props.growthNotes.find(growthNote => growthNote.rawId === this.props.rawId);
        return (
            <div className="growth-note">
                <Card title={growthNote.title} extra={<p>{growthNote.date}</p>} bordered={false} style={{width: 500}}>
                    <div className="growth-note-content-div">{growthNote.content}</div>
                    <div className="growth-note-operation-button-group">
                        <Button size="small" onClick={this.deleteGrowthNote.bind(this, growthNote.rawId)}>删除日志</Button>
                        <Button type="primary" size="small" ghost
                                onClick={this.updateGrowthNote.bind(this)}>修改日志</Button>
                        <Modal
                            visible={this.state.visible}
                            title="修改成长日志"
                        >
                            <GrowthNoteEditorBody
                                submitGrowthNote={this.submitGrowthNote.bind(this)} {...growthNote}/>
                        </Modal>
                    </div>
                </Card>
            </div>
        )
    }
}

