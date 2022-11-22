import React, {Component} from 'react';
import Cafe from './cafe';

class CafeList extends Component {
    render() {
        return(
            <div style={{border: "1px solid gray", borderRadius:"10px", margin: "10px"}}>
                <Cafe />
                <Cafe />
                <Cafe />
                <Cafe />
            </div>
        )
    }
};

export default CafeList;