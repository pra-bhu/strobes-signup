import React, { useContext } from "react"
import { UserContext } from "../../providers/UserProvider"
import { Grid, Row, Column, Button } from "carbon-components-react"
import {auth} from "../../firebase"
import useFirebaseAuth from "../../hooks/useFirebaseAuth"

const Profile = () => {
  const user = useFirebaseAuth(useContext(UserContext))
  const email = user && user.email
  const displayName = user && user.displayName
  return (
    <Grid>
      <Row>
        <Column>
          Welcome {displayName} to Strobes
          Email : {email}
        </Column>
      </Row>
      <Row><Column><Button onClick={()=>{auth.signOut()}}>Logout</Button></Column></Row>
    </Grid>
  )
}

export default Profile