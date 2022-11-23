// import React, {useEffect, useState, Component} from 'react';
// import Cafe from './cafe';
// import axios from 'axios';



// function CafeList() {

//     const [backendData, setBackendData] = useState([{}])

//     useEffect(() => {
//         axios.get("http://localhost:3000/pizzerias")
//           .then(res => res.json())
//           .then(data => {setBackendData(data)})   
//     }, [])

//     console.log('data: ', backendData)
    

//     const cafeOptions = ['test1', 'test2', 'test3', 'test4'];
//     for(let i = 0; i < backendData.length; i++) {
//         cafeOptions.push(<Cafe key={i} name={backendData.shops[i]} location={backendData.locations[i]} score={backendData.scores[i]} />);
//     }

//     console.log('options:', cafeOptions)

//     return(
//         <div style={{border: "1px solid gray", borderRadius:"10px", margin: "10px"}}>
//             {postMessage.map(post => <Cafe key={i} name={backendData.shops[i]} location={backendData.locations[i]} score={backendData.scores[i]} />)}
//         </div>
//     )
// };

// export default CafeList;






import React, {Component} from 'react';
import Cafe from './cafe';



class CafeList extends Component {


    constructor() {
        super();
        
        this.state = {
          names: ['Joe\'s Pizza', 'Zazzy\'s Pizza', 'Burrata Pizza', 'Joe and Pat\'s', 'Don Antonio'],
          neighborhoods: ['Multiple Locations', 'West Village', 'East Village', 'East Village', 'Hell\'s Kitchen'],
          scores: ['🍕🍕🍕🍕🍕', '🍕🍕🍕🍕', '🍕🍕🍕', '🍕🍕🍕', '🍕🍕🍕🍕']
        };
    }
    

    render() {

        const cafeOptions = [];
        for(let i = 0; i < this.state.names.length; i++) {
            cafeOptions.push(<Cafe key={i} name={this.state.names[i]} location={this.state.neighborhoods[i]} score={this.state.scores[i]} />);
        }

        return(
            <div style={{border: "1px solid gray", borderRadius:"10px", margin: "10px"}}>
                {cafeOptions}
            </div>
        )
    }
};

export default CafeList;