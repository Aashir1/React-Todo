import React from 'react';


export let Image = (props)=>{
    return(
        <img src = {props.imageURL} alt = {props.Alt} />
    );
}