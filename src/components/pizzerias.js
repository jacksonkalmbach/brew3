import React, {useState, useEffect} from "react";
import axios from "axios";

function FetchPizzerias() {
    const [pizzerias, setPizzeries] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/pizzerias')
        .then(res => {
            console.log(res)
            setPizzeries(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return (
        <div>
            <ul>
                {
                    pizzerias.map(pizzeria => (<li>{pizzeria.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchPizzerias