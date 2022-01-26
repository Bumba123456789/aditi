import React from 'react';
let time= new Date().getHours();
let msg='';
if(time<12 && time>=1){
    msg='Souvik says you, Good Morning!!..take your breakfast';
}
else if(time>=12 && time<18){
    msg='Souvik says you, Good Afternoon!!..did you take your break fast??';
}
else if(time>=18 && time<21){
    msg='Souvik says you, Good Evening..have a great evening';
}
else{
    msg='Souvik says you, Good Night..take a glass of water..have a sweet night';
}
const Souvik = ()=>{

    return(
        <h3>{msg}!! </h3>



    );

}
export default Souvik;
