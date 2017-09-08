import React, {Component} from "react";
import {DatePicker, Form, Input} from "antd";
import moment from "moment";

import "antd/dist/antd.css";
import "../style/GrowthNoteEditorBody.css";

const FormItem = Form.Item;
const {TextArea} = Input;

export default class GrowthNoteEditorBody extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            title: this.props.growthNote ? this.props.growthNote.title : '',
            content: this.props.growthNote ? this.props.growthNote.content : ''
        })
    }

    handleInputChange(tag, e) {
        const stateObject = {};
        stateObject[tag] = e.target.value;
        this.setState(stateObject);
    }

    render() {
        const dateFormat = 'YYYY/MM/DD';

        const formItemLayout = {
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

        return (
            <div className="growth-note-editor-body-content">
                <FormItem {...formItemLayout} label="日志标题:">
                    <div className="growth-note-editor-body-item">
                        <Input placeholder="please input your growth note name"
                               value={this.state.title}
                               onChange={this.handleInputChange.bind(this, 'title')}
                        />
                    </div>
                </FormItem>
                <FormItem {...formItemLayout} label="日期:">
                    <div className="growth-note-editor-body-item">
                        <DatePicker
                            defaultValue={moment(this.props.growthNote ? this.props.growthNote.date : '' || formatedDate, dateFormat)}
                            format={dateFormat}/>
                    </div>
                </FormItem>
                <FormItem {...formItemLayout} label="总结内容:">
                    <TextArea rows={5}
                              value={this.state.content}
                              onChange={this.handleInputChange.bind(this, 'content')}
                    />
                </FormItem>
            </div>
        )
    }
}

