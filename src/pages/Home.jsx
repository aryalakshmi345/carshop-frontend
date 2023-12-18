import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Row className='d-flex justify-content-center align-items-center w-100 container' style={{height:'100vh'}}>
            <Col sm={12} md={4} lg={4}>
            <h2>Welcome to Car Shop</h2>
            <Link to={'/login'}><button className='btn btn-dark'> Sign In</button></Link>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <img style={{height:'400px',width:'400px'}} src="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80" alt="" />
            </Col>
        </Row>
    </div>
  )
}

export default Home