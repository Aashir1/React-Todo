import React from 'react';
import {Button} from './Button';
import {Image} from './imageIcons';
import delte from './images/delete.svg';
import edit from './images/edit.svg';
import './app.css'
export let List = (props) => {
    return (
        <ul>
            {
                props.list.length > 0 ?
                    props.list.map((data, indx) => {
                        return (
                            <li keys={indx}>
                                <span>{data}</span>
                                <span>
                                    <Button classNaam = "for-icons" text = {<Image imageURL = {edit} />} clickFunc = {props.editFunc}/>
                                    <Button classNaam = "for-icons" text = {<Image imageURL = {delte} />} clickFunc = {props.deleteFunc}/>
                                </span>
                            </li>
                        );
                    })
                    :
                    "Empty List"
            }
        </ul>
    );
}