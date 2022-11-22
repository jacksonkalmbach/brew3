import React, {Component} from 'react';

class Cafe extends Component {
    render() {
        return(
            <div style={{margin: "10px", boxShadow: "3px 5px 3px lightgray",border: "1px solid gray", borderRadius: "10px", display: "flex", flexDirection: "column"}}>
                <ul style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <li>{this.props.name}</li>
                    <li>{this.props.location}</li>
                    <li>{this.props.score}</li>
                    <li>+</li>
                </ul>
            </div>
        )
    }
};

export default Cafe;