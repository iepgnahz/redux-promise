import React, {Component} from "react";
import {DatePicker, Form, Input, Button, Row, Col} from "antd";
import moment from "moment";

import "antd/dist/antd.css";
import "../style/GrowthNoteEditorBody.css";

const FormItem = Form.Item;
const {TextArea} = Input;

const DATE_FORMAT = 'YYYY/MM/DD';
const FORM_ITEM_LAYOUT = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};

const date = new Date();
const formatedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

export default class GrowthNoteEditorBody extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            title: this.props.growthNote ? this.props.growthNote.title : '',
            content: this.props.growthNote ? this.props.growthNote.content : '',
            date: this.props.growthNote ? this.props.growthNote.date : formatedDate
        })
    }

    handleInputChange(tag, e) {
        const stateObject = {};
        stateObject[tag] = e.target.value;
        this.setState(stateObject);
    }

    submitGrowthNote() {
        if (this.props.operationType === 'update') {
            this.props.closeModal(false);
        }
        const growthNote = Object.assign({}, this.props.growthNote || {}, this.state);
        const methodName = (this.props.operationType || 'create') + 'GrowthNote';
        this.props[methodName](growthNote, growthNote.rawId);
    }

    render() {
        return (
            <div className="growth-note-editor-body-content">
                <FormItem {...FORM_ITEM_LAYOUT} label="日志标题:">
                    <div className="growth-note-editor-body-item">
                        <Input placeholder="please input your growth note name"
                               value={this.state.title}
                               onChange={this.handleInputChange.bind(this, 'title')}
                        />
                    </div>
                </FormItem>
                <FormItem {...FORM_ITEM_LAYOUT} label="日期:">
                    <div className="growth-note-editor-body-item">
                        <DatePicker
                            defaultValue={moment(this.state.date, DATE_FORMAT)}
                            format={DATE_FORMAT}/>
                    </div>
                </FormItem>
                <FormItem {...FORM_ITEM_LAYOUT} label="总结内容:">
                    <TextArea rows={5}
                              value={this.state.content}
                              onChange={this.handleInputChange.bind(this, 'content')}
                    />
                </FormItem>
                <Row>
                    <Col span={3} offset={21}>
                        <Button type="primary" size="small" ghost onClick={this.submitGrowthNote.bind(this)}>提交</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

