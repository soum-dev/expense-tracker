import React, { Children, createContext,useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state

const initialState = {
    transactions: []
}

// Create context 

export const GlobalContext= createContext(initialState);


//provider component

export const GlobaProvider = ({ children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    // Actions
    function deleteTransactions(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{transactions:state.transactions,
            deleteTransactions,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}