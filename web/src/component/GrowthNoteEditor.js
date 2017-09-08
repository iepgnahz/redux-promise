import React, {Component} from "react";
import {Button, Card} from "antd";

import "antd/dist/antd.css";
import "../style/GrowthNoteEditor.css";
import "../style/GrowthNote.css";
import GrowthNoteEditorBody from "./GrowthNotEditorBody";

export default class GrowthNoteEditor extends Component {
    render() {
        const contentGridStyle = {
            width: '100%',
            float: 'left'
        };

        return (<div style={{background: '#ECECEC', padding: '30px'}}>
            <Card title='创建成长日志' extra={<p>{this.props.date}</p>} bordered={false} style={{width: 500}}>
                <Card.Grid style={contentGridStyle}>
                    <GrowthNoteEditorBody />
                </Card.Grid>
                <Card.Grid style={contentGridStyle}>
                    <div className="growth-note-operation-button-group">
                        <Button type="primary" size="small" ghost>提交</Button>
                    </div>
                </Card.Grid>
            </Card>
        </div>)
    }
}

