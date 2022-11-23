import React, {useEffect, useState, Component} from 'react';


// class Cafe extends Component {
//     render() {
//         return(
//             <div style={{margin: "10px", boxShadow: "3px 5px 3px lightgray",border: "1px solid gray", borderRadius: "10px", display: "flex", flexDirection: "column"}}>
//                 <ul style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
//                     <li>{this.props.name}</li>
//                     <li>{this.props.location}</li>
//                     <li>{this.props.score}</li>
//                     <li>+</li>
//                 </ul>
//             </div>
//         )
//     }
// };

function Cafe()  {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("http://localhost:3000/api")
          .then(res => res.json())
          .then(data => {setBackendData(data)})   
    }, [])

    console.log(backendData)

    return(
        <div style={{margin: "10px", boxShadow: "3px 5px 3px lightgray",border: "1px solid gray", borderRadius: "10px", display: "flex", flexDirection: "column"}}>
            <ul style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <li>
                    {(typeof backendData.shops === 'undefined') ? (
                        <p>Loading...</p>
                    ): (
                        <p style={{fontWeight: "bold"}}>{backendData.shops[1]}</p>
                    )}
                </li>
                <li>
                    {(typeof backendData.shops === 'undefined') ? (
                        <p>Loading...</p>
                    ): (
                        <p>{backendData.locations[1]}</p>
                    )}
                </li>
                <li>
                    {(typeof backendData.shops === 'undefined') ? (
                        <p>Loading...</p>
                    ): (
                        <p>{backendData.score[1]}</p>
                    )}
                </li>
                <li><p><button style={{backgroundColor: "lightgray", borderRadius: "10px"}}>Add</button></p></li>
            </ul>
        </div>
    )
};

export default Cafe;