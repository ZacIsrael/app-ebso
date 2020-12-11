//Track the basket
import React, { createContext, useContext, useReducer} from "react";

//Data layer
export const StateContext = createContext();

//Build a provider to wrap our app
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext);