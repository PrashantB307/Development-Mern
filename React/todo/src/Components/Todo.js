// ===> use "rcc" for react class components

import React, { Component } from 'react'

export default class Todo extends Component {
  constructor () {
    super();
    this.state = {
      tasks: [
        {id:1, task: "Revise JS"},
        {id:2, task: "Revise DSA Level-1"},
      ],
      curTask:""
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      curTask: e.target.value
    });
  };

  handleSubmit = () => {
    this.setState ({
      tasks:[...this.state.tasks, {task: this.state.curTask, id: this.state.tasks.length + 1}]
    })
  }

  handleDeleteTasks = (id) => {
    let narr = this.state.tasks.filter( (taskObj) => {
      return taskObj.id !== id
    });
    this.setState({
      tasks: [...narr]
    });
  }


  
}
