//import

//actions

//actions  creator


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