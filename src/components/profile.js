import React, {useEffect, useState, Component} from 'react';

function Profile()  {

    return(
        <div style={{border: "1px solid lightgray", margin: "8px", borderRadius: "10px", padding: "5px", display: "flex", boxShadow: "2px 3px 2px lightgray"}}>
            <div id="profilePic">
                <img scr='./imgs/profpic.jpeg'/>
            </div>
            
            <div id="userName">
                <h3>@jacksonkalmbach</h3>
            </div>
            
        </div>
    )
};

export default Profile;