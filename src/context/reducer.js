const reducer = (state,action) => { 
    switch (action.type) {
        case "SET_LOADING":
            return{ ...state, loading: action.payload }

        case "SET_POSTS":
            return{...state, blogPosts: action.payload}
        
        default:
            throw new Error (`No matching ${action.type} action `)
    }
 }

 export default reducer