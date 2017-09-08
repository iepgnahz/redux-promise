import React, {Component} from "react";
import {Card} from "antd";

import "antd/dist/antd.css";
import "../style/GrowthNoteEditor.css";
import "../style/GrowthNote.css";
import GrowthNoteEditorBody from "./GrowthNotEditorBody";

export default class GrowthNoteEditor extends Component {
    render() {
        return (<div style={{background: '#ECECEC', padding: '30px'}}>
            <Card title='创建成长日志' extra={<p>{this.props.date}</p>} bordered={false} style={{width: 500}}>
                <GrowthNoteEditorBody />
            </Card>
        </div>)
    }
}

