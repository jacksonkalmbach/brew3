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