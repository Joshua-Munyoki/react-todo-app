import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: "",
            list: [],
            id:[]
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

        let updateId = this.state.list.length;
        
        this.setState({
            list: updateList,
            id: updateId,
            userInput: ""
            
        })
        console.log()
    }

    handleDelete(input){
        const remainingTodos = this.state.list.filter(currentTodo => currentTodo !== input)

        this.setState({
            list:remainingTodos,
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
                <ul style={{listStyle: "none"}}>
                    {this.state.list.map( (eachTodo, index)=>(
                        <li key={index}>
                            {eachTodo}{index}
                            <button onClick={()=> this.handleDelete(eachTodo)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}