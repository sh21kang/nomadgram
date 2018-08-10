import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import Notification from 'components/Notification';

const Navigation = (props, context) => (
  <div>
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
        <Link to="/">
          <img
            src={require("images/logo.png")}
            className={styles.logo}
            alt={context.t("Logo")}
          />
        </Link>
      </div>
      <div className={styles.column}>
        <form method="post" onSubmit={props.onSubmit}>
          <input
            type="text"
            placeholder={context.t("Search")}
            className={styles.searchInput}
            value={props.value}
            onChange={props.onInputChange}
          />
        </form>
      </div>
      <div className={styles.column}>
        <div className={styles.navIcon}>
          <Link to="/explore">
            <Ionicon icon="ios-compass-outline" fontSize="28px" color="black" />
          </Link>
        </div>
        <div className={styles.navIcon}>
          <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" onClick={props.openLikes}/>
        </div>
        <div className={styles.navIcon}>
          <Link to="/profile">
            <Ionicon icon="ios-person-outline" fontSize="32px" color="black" />
          </Link>
        </div>
        
      </div>
    </div>
  </div>
  
  {props.seeingLikes && (
        <Notification title={context.t("Likes")} closeLikes={props.closeLikes} />
      )}
  
  </div>
);

Navigation.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  openLikes : PropTypes.func.isRequired,
  closeLikes :PropTypes.func.isRequired
};

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Navigation;