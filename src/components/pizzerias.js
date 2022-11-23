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


    return (
        <div>
            <div style={{listStyle: "none", gridColumn: "span 2", display:"flex", flexDirection: "column", justifyContent:"space-evenly"}}>
                {
                    pizzerias.map(pizzeria => (
                    <div className="option"
                    style= 
                        {{
                        margin: "5px", 
                        boxShadow: "3px 5px 3px lightgray", 
                        border: "1px solid gray", 
                        borderRadius: "10px", 
                        display: "grid", 
                        flexDirection: "column",
                        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))" 
                        // justifyContentt: "space-around"
                        }}>

                        <div style={{display: "flex", justifyContent:"center"}}>
                            {(typeof pizzeria.name === 'undefined') ? (
                                <p>Loading...</p>
                            ) : (
                                <p style={{ fontWeight: "bold" }}>{pizzeria.name}</p>
                            )}
                        </div><div style={{display: "flex", justifyContent:"center"}}>
                            {(typeof pizzeria.location === 'undefined') ? (
                                <p>Loading...</p>
                            ) : (
                                <p>{pizzeria.location}</p>
                            )}
                        </div><div style={{display: "flex", justifyContent:"center"}}>
                            {(typeof pizzeria.score === 'undefined') ? (
                                <p>Loading...</p>
                            ) : (
                                <p>{pizzeria.score}</p>
                            )}
                        </div><div style={{display: "flex", justifyContent:"center"}}>
                            <p>
                                <button style={{ backgroundColor: "lightgray", borderRadius: "10px" }}>
                                    Add
                                </button>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FetchPizzerias