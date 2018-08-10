import { connect } from "react-redux";
import Container from "./container";
import { push } from "react-router-redux";
import { actionCreators as userAction } from "redux/modules/user";
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToSearch: searchTerm => { 
      dispatch(push(`/search/${searchTerm}`));
    },
    getPhotoLikes: () => {
      dispatch(userAction.getPhotoLikes(2));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);