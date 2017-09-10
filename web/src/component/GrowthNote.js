import React, {Component} from "react";
import {connect} from 'react-redux';
import {Button, Card, Modal} from "antd";

import "antd/dist/antd.css";
import "../style/GrowthNote.css";

import GrowthNoteEditorBody from "./GrowthNotEditorBody";
import  * as actions from '../action/index';

class GrowthNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    deleteGrowthNote(rawId) {
        this.props.deleteGrowthNote(rawId);
    }

    setModalVisible(visible) {
        this.setState({visible});
    }

    submitGrowthNote(rawId, growthNote) {
        this.setModalVisible(false);
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
                                onClick={this.setModalVisible.bind(this, true)}>修改日志</Button>
                        <Modal
                            visible={this.state.visible}
                            title="修改成长日志"
                            onCancel={this.setModalVisible.bind(this, false)}
                            footer={null}
                        >
                            <GrowthNoteEditorBody growthNote={growthNote}
                                                  updateGrowthNote={this.props.updateGrowthNote}
                                                  closeModal={this.setModalVisible.bind(this)}
                                                  operationType='update'
                            />
                        </Modal>
                    </div>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => ({growthNotes: state.growthNotes});
const mapDispatchToProps = dispatch => ({
    deleteGrowthNote: rawId => dispatch(actions.deleteGrowthNote(rawId)),
    updateGrowthNote: (growthNote, rawId) => dispatch(actions.updateGrowthNote(growthNote, rawId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GrowthNote);

