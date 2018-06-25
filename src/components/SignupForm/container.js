import React, {Component}from "react";
import SignupForm from "./presenter";

class Container extends Component{
    state={
        userName : '',
        passWord : '',
        email:'',
        fullName:''
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

    _handleFacebookLogin = response =>{
        console.log(response);
    }
    render(){
        const {userName, passWord, email, fullName} = this.state;
        return <SignupForm
        handleSubmit={this._handleSubmit} 
        handleInputChange={this._handleChangeEvent}
        handleFacebookLogin={this._handleFacebookLogin}
        usernameValue={userName}  
        passwordValue={passWord}
        emailValue={email}
        fullnameValue={fullName}
        />;
    }
}

export default Container;