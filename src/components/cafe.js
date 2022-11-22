import React, {Component} from 'react';

class Cafe extends Component {
    render() {
        return(
            <div style={{margin: "10px", boxShadow: "3px 3px",border: "1px solid gray", borderRadius: "10px", display: "flex", flexDirection: "column"}}>
                <ul style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <li>King's Street Coffee</li>
                    <li>Chelsea</li>
                    <li>8.1</li>
                </ul>
            </div>
        )
    }
};

export default Cafe;