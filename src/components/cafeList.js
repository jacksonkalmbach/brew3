
// import React, {Component} from 'react';
// import Cafe from './cafe';
// import FetchPizzerias from './pizzerias';


// class CafeList extends Component {


//     constructor() {
//         super();
        
//         this.state = {
//           names: ['Joe\'s Pizza', 'Zazzy\'s Pizza', 'Burrata Pizza', 'Joe and Pat\'s', 'Don Antonio'],
//           neighborhoods: ['Multiple Locations', 'West Village', 'East Village', 'East Village', 'Hell\'s Kitchen'],
//           scores: ['🍕🍕🍕🍕🍕', '🍕🍕🍕🍕', '🍕🍕🍕', '🍕🍕🍕', '🍕🍕🍕🍕']
//         };
//     }
    

//     render() {

//         const cafeOptions = [];
//         for(let i = 0; i < this.state.names.length; i++) {
//             cafeOptions.push(<Cafe key={i} name={this.state.names[i]} location={this.state.neighborhoods[i]} score={this.state.scores[i]} />);
//         }

//         console.log('cafeOptionsArr: ', cafeOptions)

//         return(
//             <div style={{border: "1px solid gray", borderRadius:"10px", margin: "10px"}}>
//                 {cafeOptions}
//                 {/* <FetchPizzerias /> */}
//             </div>
//         )
//     }
// };

// export default CafeList;



import React, {Component, useState, useEffect} from 'react';
import Cafe from './cafe';
import axios from "axios";
import FetchPizzerias from './pizzerias';



function CafeList() {

    const [pizzerias, setPizzerias] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/pizzerias')
        // .then(res => {
        //     // console.log(res)
        //     setPizzeries(res.data)
        //     console.log(pizzerias.length)
        // })
        .then((res) => {
            setPizzerias(res.data)
            console.log(pizzerias)
          })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
// console.log(pizzerias.length);

    const pizzaOptions = [];
    for(let i = 0; i < pizzerias.length; i++) {
        pizzaOptions.push(<Cafe key={i} name={pizzerias[i].name} location={pizzerias[i].location} score={pizzerias[i].score} />);
    }

    console.log('pizzaOptions: ', pizzaOptions)
    console.log('pizza 0', pizzaOptions.name)

    return(
        <div style={{border: "1px solid gray", borderRadius:"10px", margin: "10px"}}>
            {/* {pizzaOptions} */}
            <FetchPizzerias />
        </div>
    )

};

export default CafeList;