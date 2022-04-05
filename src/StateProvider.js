import React, {createContext,useContext,useReducer} from "react";

// Prepare DataLayer
export const StateContext=createContext();

// Wrap app and provide  data
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull info
export const useStateValue=()=>useContext(StateContext);