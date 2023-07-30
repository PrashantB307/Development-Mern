import React, { Component } from "react";
//import { movies } from './getMovies';
import axios from "axios";
import API_KEY from "../secrets";

export default class List extends Component {
  constructor() {
    super();
    // console.log("Constructor is called");
    this.state = {
      hover: "",
      parr: [1],
      currPage: 1,
      movies: [],
      favMov: [], // this will store the id of the movies added to favoures
    };
  }

  handleEnter = (id) => {
    this.setState({
      hover: id,
    });
  };

  handleLeave = () => {
    this.setState({
      hover: "",
    });
  };

  
}
