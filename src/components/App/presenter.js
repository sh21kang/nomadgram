import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";
import Auth from "../Auth";
import Footer from "../Footer";
import Navigation from '../Navigation';
import Feed from "../Feed";
import Explore from "components/Explore";
import Search from "components/Search";
import Profile from "components/Profile";
const App = props => [
  props.isLoggedIn ? <Navigation key={1}/> : null,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3} />
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />} />
    <Route path="/search/:searchTerm" component={Search} />
    <Route path="/profile" component={Profile}/>} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth}/>,
    <Route path="/recover" render={() => "recover password"} />
  </Switch>

);

export default App;