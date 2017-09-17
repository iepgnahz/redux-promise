import React, {Component} from "react";
import {Button} from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import * as actions from '../action/index';


class App extends Component {
    render = () => {
        return (
            <div className="App">
                <Button type="primary" onClick={this.props.startRequest}>开始请求</Button>
                <p>请求状态： {this.props.requestStatus}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({requestStatus: state.requestStatus});
const mapDispatchToProps = dispatch => ({
    startRequest: () => dispatch(actions.fetchRequest())
});
export default connect(mapStateToProps, mapDispatchToProps)(App)


