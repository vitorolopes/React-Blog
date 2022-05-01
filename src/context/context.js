import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
    loading: false,
    blogPosts: [],
    currentBlogPost: null
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const test = "Hello"

    return(
        <AppContext.Provider value={
            {test}
        }>
            {children}
        </AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider} 