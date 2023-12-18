import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <Navbar className="bg-dark">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}} className='text-light fs-5'>Car Shop</Link>
        </Container>
      </Navbar> 
    </>
  )
}

export default Header