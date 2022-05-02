import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
    loading: false,
    blogPosts: [],
    currentBlogPost: null
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getPosts = async () => {
        try {      
            dispatch({type: "SET_LOADING", payload: true})
            const res = await fetch("/posts")
            const data = await res.json()
            console.log(data);
            dispatch({type: "SET_POSTS", payload: data})
            dispatch({type: "SET_LOADING", payload: false})
        } catch (error) {
            console.log(error);   
        }
    }

    const getPostById = async (id) => {
        try {
            dispatch({type: "SET_LOADING", payload: true})
            const res = await fetch(`/posts/${id}`)
            const data = await res.json()
            console.log(data);
            dispatch({type: "SET_CURRENT_POST", payload: data})
            dispatch({type: "SET_LOADING", payload: false}) 
        } catch (error) {
            console.log(error); 
        }
    }

    useEffect(() => {
      getPosts()
    }, [])
    
    
    return(
        <AppContext.Provider value={
           {...state, getPostById }
        }>
            {children}
        </AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider} 