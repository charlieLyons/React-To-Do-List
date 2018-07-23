import React, { Component } from 'react';
import './index.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newListItem: '',
            listItems: [],
        };
    }

    handleChange = event => {
        this.setState({
            newListItem: event.target.value
        })
    }

    handleAddItem = () => {
        if (this.state.newListItem) {
            this.setState({
                listItems: this.state.listItems.concat([this.state.newListItem])
            })

        }
    }

    handleDeleteItem = (indexToDelete) => {
        return () => {
            this.setState({
                listItems: this.state.listItems.filter((currentElement, index) => {
                    return index !== indexToDelete
                })
            })
        }
    }


render() {
        return (
            <div>
                <h2>To Do List</h2>
                <input onChange={this.handleChange} value={this.state.newListItem} onKeyPress={event => {
                    if (event.key === 'Enter') {
                        this.handleAddItem()
                    }
                }}/>
                <button className='submit' onClick={this.handleAddItem}>Add Item</button>
                <ol>
                    {this.state.listItems.map((currentElement, index) => {
                        return <li key={index}>{currentElement} <button className = 'delete' onClick={this.handleDeleteItem(index)}>delete</button></li>
                    })}
                </ol>
            </div>
        );
    }
}

export default App