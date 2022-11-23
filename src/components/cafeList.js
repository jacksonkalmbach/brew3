
import React, {Component, useState, useEffect} from 'react';
import Cafe from './cafe';
import axios from "axios";
import FetchPizzerias from './pizzerias';
import Profile from './profile';



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
    

    const pizzaOptions = [];
    for(let i = 0; i < pizzerias.length; i++) {
        pizzaOptions.push(<Cafe key={i} name={pizzerias[i].name} location={pizzerias[i].location} score={pizzerias[i].score} />);
    }

    console.log('pizzaOptions: ', pizzaOptions)
    console.log('pizza 0', pizzaOptions.name)

    return(
        <div style={{border: "2px solid orange", borderRadius:"10px", margin: "10px", flexDirection:"row"}}>
            <FetchPizzerias />
        </div>
    )

};

export default CafeList;