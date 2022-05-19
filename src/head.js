// eslint-disable-next-line
import { render } from '@testing-library/react';
import React from 'react';

class HeadSon11 extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: '头部组件1'
        }
    }
    render() {
        return (
            <div>{this.state.name}</div>
        )
    }

}
class Head extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <div>
                <HeadSon11 />
                <p>head</p>
                <button onClick={this.myFn.bind(this)}>onClick</button>
            </div>
        )
    }
    myFn() {
        alert(this)
            ;
    }
}
export default Head;