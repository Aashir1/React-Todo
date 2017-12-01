import React from 'react';
import { Button } from './Button';
import { List } from './list';
import { Input } from './input';
import { Image } from './imageIcons';
import delte from './images/delete.svg';
import edit from './images/edit.svg';
import './app.css'

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            dataItems: []
        }
    }

    updateUserInput = (event) => {
        console.log(this.state.userInput);
        this.setState({
            userInput: event.target.value
        });
    }


    addList = () => {
        console.log(this.state.userInput);
        if (this.state.userInput) {
            this.setState({
                dataItems: [...this.state.dataItems, this.state.userInput],
                userInput: ''
            });
        }
    }

    editItem = (data, indx) => {
        let tempVar = this.state.dataItems;
        let newValue = prompt('Enter new Value: ', data);
        if (newValue) {
            tempVar[indx] = newValue;
            this.setState({
                dataItems: tempVar
            });
        }
    }
    deleteItem = (indx)=>{
        let tempVar = this.state.dataItems;
        tempVar.splice(indx, 1);
        this.setState({
            dataItems : tempVar
        });
    }
    render() {
        return (
            <div className="todo-wrapper-div">
                <div className ="input-wrapper-div">
                    <Input classNaam = "todo-input" inputType='text' fieldValue={this.state.userInput} onChangeFunc={this.updateUserInput} />
                    {/* <input type = 'text' value = {this.state.userInput} onChange = {this.updateUserInput} /> */}
                    <Button classNaam = "add-button" text="Add" clickFunc={this.addList} />
                </div>
                <div className = "ul-wrapper-div">
                    {/* <List list = {this.state.dataItems} /> */}
                    <ul>
                        {
                            this.state.dataItems.length > 0 ?
                                this.state.dataItems.map((data, indx) => {
                                    return (
                                        <li key = {indx}>
                                            <span className = "data-span" >{data}</span>
                                            <span className = "item-buttons">
                                                <Button classNaam="for-icons" text={<Image imageURL={edit} />} clickFunc={() => { this.editItem(data, indx) }}/>
                                                <Button classNaam="for-icons" text={<Image imageURL={delte} />} clickFunc={()=>{this.deleteItem(indx)}} />
                                            </span>
                                        </li>
                                    );
                                })
                                :
                                "Empty List"
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
