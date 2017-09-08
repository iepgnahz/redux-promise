import React, {Component} from "react";
import {DatePicker, Form, Input} from "antd";
import moment from "moment";

import "antd/dist/antd.css";
import "../style/GrowthNoteEditorBody.css";

const FormItem = Form.Item;
const {TextArea} = Input;

export default class GrowthNoteEditorBody extends Component {
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

        return (
            <div className="growth-note-editor-body-content">
                <FormItem {...formItemLayout} label="日志标题:">
                    <div className="growth-note-editor-body-item">
                        <Input placeholder="please input your growth name" value={this.props.title}
                               />
                    </div>
                </FormItem>
                <FormItem {...formItemLayout} label="日期:">
                    <div className="growth-note-editor-body-item">
                        <DatePicker defaultValue={moment(this.props.date, dateFormat)} format={dateFormat}/>
                    </div>
                </FormItem>
                <FormItem {...formItemLayout} label="总结内容:">
                    <TextArea rows={5} value={this.props.content}/>
                </FormItem>
            </div>
        )
    }
}

