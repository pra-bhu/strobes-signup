import React, { useContext } from "react"
import { Router } from "@reach/router"
import Login from "../Login"
import Profile from "../Profile"
import RegisterForm from "../RegisterForm"
import { UserContext } from "../../providers/UserProvider"
import useFirebaseAuth from "../../hooks/useFirebaseAuth"


const Dashboard = () => {
  const globalState = useContext(UserContext)
  const user = useFirebaseAuth(globalState)
  return (
    user ? <Profile />
      :
      <Router>
        <RegisterForm path="register" />
        <Login path="/" />
      </Router>
  )
}

export default Dashboard