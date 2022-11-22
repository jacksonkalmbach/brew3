import React, {Component} from 'react';
import CafeList from './cafeList';

class Dashboard extends Component {
    render() {
        return(
            <div className='dashboard' style={{border: "2px solid black", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <ul className="headers" style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <li>Cafe Name</li>
                        <li>Neighborhood</li>
                        <li>Score</li>
                    </ul>
                    <CafeList />
                <button>Add Cafe</button>
            </div>
        )
    }
};

export default Dashboard;