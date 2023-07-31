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

  changeMovies = async () => {
    // console.log(this.state.currPage);
    // console.log("ChangeMovie Called");
    let ans = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currPage}`
    );
    // console.log(res.data);
    this.setState({
      movies: [...ans.data.results],
    });
  };

  handleNext = () => {
    let tempArr = [];
    for (let i = 1; i <= this.state.parr.length + 1; i++) {
      tempArr.push(i);
    }
    this.setState(
      {
        parr: [...tempArr],
        currPage: this.state.currPage + 1,
      },
      this.changeMovies
    );
  };

  handlePrev = () => {
    if (this.state.currPage !== 1) {
      this.setState(
        {
          currPage: this.state.currPage - 1,
        },
        this.changeMovies
      );
    }
  };

  handlePageNo = (pageNum) => {
    this.setState(
      {
        currPage: pageNum,
      },
      this.changeMovies
    );
  };

}
