import React from "react"
import { Grid, Row, Column } from "carbon-components-react"
import Dashboard from "../Dashboard"

const Layout = () => {
  return (
    <Grid style={{ padding: '0px' }}>
      <Row>
        <Column sm={1} md={2} lg={2} style={{ backgroundColor: "black", minHeight: '100vh', maxWidth: '100vw' }}>
          <Grid style={{ display: "flex", justifyContent: "space-around", flexDirection: "column", height: "100%", color: "whitesmoke" }}>
            <Row>
              <Column>
                <h3><strong>Risk Centered</strong></h3>
                <p>Vulnerability Management</p>
              </Column>
            </Row>
            <Row>
              <Column>
                <h4>Security Workflows</h4>
              </Column>
            </Row>
          </Grid>
        </Column>
        <Column style={{ padding: '5vw', maxHeight: '100vh', maxWidth: '100vw' }} sm={1} md={6} lg={10}>
          <Row><Column style={{ fontVariant: "Righteous", fontWeight: "bold", fontSize: "53px" }}>
            strobes
            </Column></Row>
          <br />
          <Row><Column style={{ padding: '4vw 0 4vw 0' }}> <Dashboard /></Column></Row>
          <Row><Column style={{ textAlign: "center" }}>© Copyright Strobes 2020. All Rights Reserved</Column></Row>
        </Column>
      </Row>
    </Grid>)
}

export default Layout