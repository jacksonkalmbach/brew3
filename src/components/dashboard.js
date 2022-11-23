import React, {Component} from 'react';
import CafeList from './cafeList';
import Profile from './profile';

class Dashboard extends Component {
    render() {
        return(
            <div className='dashboard' style={{margin: "10px", background: '#FEFFFF', border: "2px solid black", borderRadius: "10px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", flexDirection: "row", justifyContent: "center"}}>
                <Profile />
                <CafeList />
                {/* <button style={{margin: "20px"}}>Add Pizzeria</button> */}
            </div>
        )
    }
};

export default Dashboard;