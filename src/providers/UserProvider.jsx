import React, { createContext, useReducer } from "react"

// import { auth, createUser } from "../firebase"
import firebase from "../firebase" 

export const UserContext = createContext()

const { Provider } = UserContext

export const UserProvider = ({children}) => (
  <Provider value ={firebase}>{children}</Provider>
)