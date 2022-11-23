import React, {useEffect, useState, Component} from 'react';
import Item from './listItem';

function Profile()  {

    return(
        <div style={{border: "1px solid lightgray", margin: "8px", borderRadius: "10px", padding: "5px", display: "flex", flexDirection: "column", boxShadow: "2px 3px 2px lightgray"}}>
            <div id="profilePic" style={{border: "none", display: "flex", justifyContent: "center"}}>
                 <h1>👨‍💻</h1>   
            </div>
            
            <div id="userName" style={{border: "none", display: "flex", justifyContent: "center"}}>
                <h3>@jacksonkalmbach</h3>
            </div>
            <div id="hitlist" style={{display: "flex", flexDirection:"column", alignItems: "center", border: "1px solid lightgray", borderRadius: "10px", boxShadow: "3px 5px 3px lightgray", height: "-webkit-fill-available"}}>
                <h3>My Hit List</h3>
                <Item />
            </div>
            
        </div>
    )
};

export default Profile;