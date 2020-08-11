import React, { useState, useContext } from "react"
import { Link } from "@reach/router"
import { auth, createUser } from "../../firebase"
import {
  Form, TextInput, Button, Select, SelectItem, Grid, Row, Column,
} from "carbon-components-react"


const RegisterForm = () => {
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ company, setCompany ] = useState('')
  const [ userType, setUserType ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState(null)
  /* const globalState = useContext(UserContext)
  // const { state,dispatch } = globalState
  const authUser = useFirebaseAuth(globalState) */

  const registerWithEmail = async (event) => {
    try {
      event.preventDefault()
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      const displayName = firstName + ' ' + lastName
      let newUser = await createUser(user, { displayName, company, userType })
      setFirstName('')
      setLastName('')
      setCompany('')
      setUserType('')
      setEmail('')
      setPassword('')
    }
    catch (error) {
      setError('Registration failed!' + error.message)
    }
  }

  return (
    <Grid>
      <Form onSubmit={registerWithEmail}>
        <Row><Column style={{ fontSize: "32px" }}>
          Register </Column></Row>
        <br />
        <Row><Column>Already have account <Link to="/">Login</Link></Column></Row>
        {error && <Row><Column style={{ color: "red" }}>{error}</Column></Row>}
        <Row>
          <Column>
            <TextInput required id="firstName" name="firstName" labelText='First Name' onChange={e => setFirstName(e.target.value)} placeholder='John'></TextInput>
          </Column>
          <Column>
            <TextInput required id="lastName" name="lastName" labelText='Last Name' onChange={e => setLastName(e.target.value)} placeholder='Doe'></TextInput>
          </Column>
        </Row>
        <Row>
          <Column>
            <TextInput id="company" name="company" labelText='Company' placeholder='Acme Corp.' onChange={e => setCompany(e.target.value)}></TextInput>
          </Column>
          <Column>
            <Select id="userType" name="userType" defaultValue="select" labelText='I am a' onChange={e => setUserType(e.target.value)}>
              <SelectItem
                disabled
                hidden
                value="select"
                text="Choose an option"
              />
              <SelectItem value="employee" text="Employee" />
              <SelectItem value="customer" text="Customer" />
              <SelectItem value="salesman" text="Sales Executive" />
            </Select>
          </Column>
        </Row>
        <Row>
          <Column>
            <TextInput id='email' name='email' required
              invalidText='Invalid Email'
              labelText='Email' type='text' placeholder='John' onChange={e => setEmail(e.target.value)}></TextInput>
          </Column>
          <Column>
            <TextInput id='password' name='password' required labelText='Password' type='password' placeholder='password' onChange={e => setPassword(e.target.value)} invalidText="Invalid Password"></TextInput>
          </Column>
        </Row>
        <br />
        <Row>
          <Column><Button type="submit" style={{ maxWidth: '100%', width: '100%' }}>Continue to your free account</Button>
            <p style={{ fontSize: '10px' }}>BY CREATING A STROBES ACCOUNT, YOU CONSENT TO AND FULLY ACCEPT OUR PRIVACY POLICY. TERMS OF SERVICE APPLY.</p></Column>

        </Row>
      </Form>
    </Grid>)
}

export default RegisterForm