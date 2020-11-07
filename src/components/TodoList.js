import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: "",
            list: []
        }
    }

    changeUserInput(input){
        this.setState({
            userInput: input
        });
    }

    listTodos(input){
        let updateList = this.state.list;
        updateList.push(input);
        this.setState({
            list: updateList,
            userInput:""
        })
    }

    render() {
        return (
            <div>
                <input
                    //every time the input is changed, (changeUserInput) function is called with the value(e.target.value)
                    //e referes to onChange event    
                    onChange={(e) => this.changeUserInput(e.target.value)}
                    value={this.state.userInput}
                    type="text"
                />
                <button onClick={() => this.listTodos(this.state.userInput)}>Add todo</button>
                <ul>
                    {this.state.list.map( (eachTodo)=>(
                        <li>{eachTodo}</li>
                    ))}
                </ul>
            </div>
        );
    }
}