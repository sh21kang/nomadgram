import React, {Component} from "react";
import LoginForm from "./presenter";
import PropTypes from "prop-types";
class Container extends Component{
    state={
        userName : '',
        passWord : ''
    };
    
     static propTypes = {
        facebookLogin : PropTypes.func.isRequired,
        usernameLogin : PropTypes.func.isRequired
    };

    render(){
        const {userName, passWord} = this.state;
        return <LoginForm 
        handleSubmit={this._handleSubmit} 
        handleInputChange={this._handleChangeEvent}
        handleFacebookLogin={this._handleFacebookLogin}
        usernameValue={userName}  
        passwordValue={passWord}/>;
    }

    _handleChangeEvent = event =>{
        const {target :  {value, name}} = event;
        this.setState({
            [name] :value
        });
        
    }
    _handleSubmit = event => {
        const {usernameLogin} = this.props;
        const {userName, passWord} = this.state;

        event.preventDefault();
        usernameLogin(userName, passWord);
    }

    _handleFacebookLogin = response => {
        console.log(response);
        const {facebookLogin} = this.props;
        facebookLogin(response.accessToken);
    }

}

export default Container;