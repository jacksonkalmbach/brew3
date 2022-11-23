import React, {Component} from 'react';
import CafeList from './cafeList';

class Dashboard extends Component {
    render() {
        return(
            <div className='dashboard' style={{margin: "10px", background: '#FEFFFF', border: "2px solid black", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <ul className="headers" style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <li><h3>Pizzeria</h3></li>
                        <li><h3>Neighborhood</h3></li>
                        <li><h3>Score</h3></li>
                    </ul>
                    <CafeList />
                <button style={{margin: "20px"}}>Add Pizzeria</button>
            </div>
        )
    }
};

export default Dashboard;