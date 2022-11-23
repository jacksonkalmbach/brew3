import React, {useState, useEffect} from "react";
import axios from "axios";

function FetchPizzerias() {
    const [pizzerias, setPizzeries] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/pizzerias')
        .then(res => {
            // console.log(res)
            setPizzeries(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    // const pizzaOptions = [];
    // for(let i = 0; i < pizzerias.length; i++) {
    //     pizzaOptions.push(<FetchPizzerias key={i} name={pizzerias[i].name} location={pizzerias[i].location} score={pizzerias[i].scores} />);
    // }

    // <li>
    //     {(typeof backendData.shops === 'undefined') ? (
    //         <p>Loading...</p>
    //     ): (
    //         <p style={{fontWeight: "bold"}}>{backendData.shops[1]}</p>
    //     )}
    // </li>

    return (
        <div>
            <ul style={{listStyle: "none", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                {
                    pizzerias.map(pizzeria => (
                    <div style= {{margin: "10px", boxShadow: "3px 5px 3px lightgray", border: "1px solid gray", borderRadius: "10px", display: "flex", flexDirection: "row", justifyContentt: "space-between" }}>
                        <li>
                            {(typeof pizzeria.name === 'undefined') ? (
                                <p>Loading...</p>
                            ) : (
                                <p style={{ fontWeight: "bold" }}>{pizzeria.name}</p>
                            )}
                        </li><li>
                            {(typeof pizzeria.location === 'undefined') ? (
                                <p>Loading...</p>
                            ) : (
                                <p>{pizzeria.location}</p>
                            )}
                        </li><li>
                            {(typeof pizzeria.score === 'undefined') ? (
                                <p>Loading...</p>
                            ) : (
                                <p>{pizzeria.score}</p>
                            )}
                        </li><li>
                            <p>
                                <button style={{ backgroundColor: "lightgray", borderRadius: "10px" }}>
                                    Add
                                </button>
                            </p>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default FetchPizzerias