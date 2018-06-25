//import

//actions

//actions  creator

const actionCreators = {
    facebookLogin 
};



// API actions

function facebookLogin(access_token){
    return function(dispatch){
        fetch('/users/login/facebook',{
            method : 'POST',
            headers :{
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                access_token
            })
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
    }
}

//initial state

const initialState = {
    isLoggedIn : localStorage.getItem('jwt') || false
}

//reducer
function reducer(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }

}

//reducer function


//exports

export default reducer;
//reducer 