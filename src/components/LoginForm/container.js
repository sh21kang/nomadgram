import React, {Component} from "react";
import LoginForm from "./presenter";

class Container extends Component{
    state={
        userName : '',
        passWord : ''
    }
    
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
        event.preventDefault();
    }

    _handleFacebookLogin = response => {
        console.log(response);
    }

}

export default Container;