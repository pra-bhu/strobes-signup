import React, { useState, useContext } from "react"
import { Link } from "@reach/router"
import { Grid, Form, Row, Column, TextInput, Button } from "carbon-components-react"
import { auth,signInWithGoogle } from "../../firebase"
import { UserContext } from "../../providers/UserProvider"

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState(null)
  const globalState = useContext(UserContext)
  // const { dispatch } = globalState
  const loginWithEmail = async (event) => {
    event.preventDefault()
    await auth.signInWithEmailAndPassword(email, password).catch(error => {
      
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        setError('Wrong password.');
      } else {
        setError(errorMessage);
      }
      console.error("Error signing in with password and email", error);
    });
    // dispatch({type : 'setUser'})
  }

  const loginWithGoogle = async ()=>{
    signInWithGoogle()
    // dispatch({type : 'setUser'})
  }

  const handleOnChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'email') {
      setEmail(value);
    }
    else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <Grid style={{ maxWidth: '50vw' }}>
      <Form onSubmit={loginWithEmail}>
        <Row><Column style={{ fontSize: "32px" }}>
          Login </Column></Row>
        <br />
        <Row><Column>Don't have an account ? <Link to="register">Register Now</Link></Column></Row>
        {error !== null && <Row style={{ color: 'red' }}>{error}</Row>}
        <Row>
          <Column >
            <TextInput id='email' name='email' required
              invalidText='Invalid Email'
              labelText='Email' type='text' placeholder='John' onChange={event => handleOnChange(event)}></TextInput>
          </Column></Row>
        <Row>
          <Column>
            <TextInput id='password' name='password' required labelText='Password' type='password' onChange={event => handleOnChange(event)} placeholder='password' invalidText="Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number."></TextInput>
          </Column>
        </Row>
        <br />
        <Row>
          <Column><Button type='submit' style={{ maxWidth: '100%', width: '100%' }}>Continue</Button></Column>
        </Row>
        <br />
        <Row>
          <Column><Button type='button' onClick={()=>{loginWithGoogle()}} style={{ maxWidth: '100%', width: '100%' }}>Login with Google</Button></Column>
        </Row>
      </Form>
    </Grid>
  )
}

export default Login