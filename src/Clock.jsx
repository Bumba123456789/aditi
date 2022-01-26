import React, { useState } from 'react';
import image from './img/image.jpg';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    let date= new Date().toLocaleDateString();

    const [ctime, setCtime]= useState(time);
    const [cdate, setCdate]= useState(date);
    const UpdateTime=()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time);

    };
    const UpdateDate=()=>{
        date = new Date().toLocaleDateString();
        setCdate(date);
    };
    setInterval(UpdateTime,1000);
    setInterval(UpdateDate,1);
        
    
return(
    <div style={{backgroundImage: "public(/love_couple-123.jpg"}}>
        <h1>Hi Rima.......</h1>
        <h2>{ctime} </h2>
        <h2>{date}</h2>
        <img src={image}/>
        

    </div>
);
};

export default Clock;