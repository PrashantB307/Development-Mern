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

  
}
