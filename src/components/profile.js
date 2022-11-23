import React, {useEffect, useState, Component} from 'react';

function Profile()  {

    return(
        <div style={{border: "2px purple solid", display: "flex"}}>
            <div id="profilePic">
                <img scr='/'/>
            </div>
            
            <div id="userName">
                <h3>@jacksonkalmbach</h3>
            </div>
            
        </div>
    )
};

export default Profile;