import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    term: "",
    seeingLikes: false
  };
  
  static propTypes = {
    goToSearch: PropTypes.func.isRequired
  };
  render() {
    const { term,seeingLikes } = this.state;
    return (
      <Navigation
        onSubmit={this._onSubmit}
        onInputChange={this._onInputChange}
        openLikes={this._openLikes}
        closeLikes ={this._closeLikes}
        value={term}
        seeingLikes={seeingLikes}
      />
    );
  }
  _onInputChange = event => {
    const { target: { value } } = event;
    this.setState({
      term: value
    });
  };
  _onSubmit = event => {
    const { goToSearch } = this.props;
    const { term } = this.state;
    event.preventDefault();
    goToSearch(term);
    this.setState({
      term: ""
    });
  };

  _openLikes = () => {
    const { getPhotoLikes } = this.props;
    this.setState({
      seeingLikes: true
    });
    getPhotoLikes();
  };
  _closeLikes = () => {
    this.setState({
      seeingLikes: false
    });
  };
}

export default Container;