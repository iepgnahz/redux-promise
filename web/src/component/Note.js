import React, {Component} from 'react';
import {Card} from 'antd';

import 'antd/dist/antd.css'

export default class Note extends Component {
    render() {
        return (<div style={{background: '#ECECEC', padding: '30px'}}>
            <Card title={this.props.title} bordered={false} style={{width: 300}}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>)
    }
}

