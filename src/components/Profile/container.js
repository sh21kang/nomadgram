import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getExplore: PropTypes.func.isRequired,
    userList: PropTypes.array
  };
  componentDidMount() {
    const { getExplore } = this.props;
    getExplore();
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.userList) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { userList } = this.props;
    
    return <Profile {...this.state} userList={userList} />;
  }
}

export default Container;