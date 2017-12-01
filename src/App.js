import React from 'react';
import './app.css';
import edit from './images/edit.svg';
import delte from './images/delete.svg';


export class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInput: '',
            users : [],
            items :[]
        }
    }

    inputHandler = (event)=>{
        this.setState({
            userInput : event.target.value
        });
    }
    buttonHandler = ()=>{
        if(this.state.userInput){
            this.setState({
                userInput : "",
                items : [...this.state.items, this.state.userInput]
            });        
        }
    }
    deleteItem = (i) =>{
        console.log('this is I: ' + i);
        let tempArray = this.state.items;
        tempArray.splice(i,1);
        this.setState({
            items : tempArray
        })
    }
    updateItem = (value, indx)=>{
        let newValue = prompt('Enter new value: ', value);
        let tempArray = this.state.items;
        if(newValue){
            tempArray[indx] = newValue;
            this.setState({
                items : tempArray
            });
        }
    }
    render(){
        return(
            <div className="todo-wrapper-div">
                <div className ="input-wrapper-div">
                    <input className = "todo-input" type="text" onChange = {this.inputHandler} value = {this.state.userInput}/>
                    <button className = "add-button" onClick = {this.buttonHandler}>Add</button>
                </div>
                <div className = "ul-wrapper-div">
                    <ul>
                        {
                            (this.state.items.length > 0) ?
                            this.state.items.map((value, indx)=>{
                                return(                               <li key = {indx}>
                                    {value}
                                    <span className = "item-buttons">
                                        <button className = "for-icons" onClick = {()=>{this.updateItem(value, indx)}}><img src = {edit} alt="icon"/></button>
                                        <button className = "for-icons" onClick = {()=>{this.deleteItem(indx)}}><img src = {delte} alt="icon"/></button>
                                    </span>
                                </li>
                            );
                            })
                            :
                            <h1>Empty list</h1>
                        }
                    </ul>
                </div>
            </div>
        );
    }
} 