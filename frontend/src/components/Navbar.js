import React from 'react';
import '../App';
import {Container, Navbar, Nav} from 'react-bootstrap';
import logo from './logo.png';
import { LinkContainer } from 'react-router-bootstrap';


function Header() {

    const token = localStorage.getItem('mytoken')

    return (
        <div className='App'>
        
            <Navbar collapseOnSelect className="navbar navbar-light bg-light">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img
                                src={logo}
                                height='40'
                                width='auto'
                                className='d-inline-block align-top m-3'
                                alt='Logo'
                            /></Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls='responsive-navbar-nav="true"' />
                    <Navbar.Collapse id='responsive-navbar-nav="true"'>
                        <Nav className='me-auto my-2 my-lg-0' responsive-navbar-nav="true">

                            <LinkContainer to='/'>
                                <Nav.Link className='nav-link active'><i className='fas fa-home mx-2'></i>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/contacts'>
                                <Nav.Link className='nav-link active'><i className='fas fa-contact-card mx-2'></i>Contacts</Nav.Link>
                            </LinkContainer>

                            {token ?
                                <>
                                    <LinkContainer to={token ? '/add' : '/'}>
                                        <Nav.Link className='nav-link active'><i className='fas fa-plus mx-2'></i>Add product</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to={token ? '/user-products' : '/'}>
                                        <Nav.Link className='nav-link active'><i className='fas fa-bars mx-2'></i>My Products</Nav.Link>
                                    </LinkContainer>
                                   

                                    <LinkContainer to='/'>
                                        <Nav.Link to='/' onClick={() => localStorage.clear()} className="nav-link active" ><i className='fas fa-user mx-2'></i>Logout</Nav.Link>
                                    </LinkContainer>



                                </>



                                :

                                <>
                                    <LinkContainer to='/register'>
                                        <Nav.Link className='nav-link active'><i className='fas fa-plus mx-2'></i>Register</Nav.Link>
                                    </LinkContainer>





                                    <LinkContainer to='/login'>

                                        <Nav.Link className="nav-link active" ><i className='fas fa-user mx-2'></i>Login</Nav.Link>

                                    </LinkContainer>
                                </>
                            }


                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
                            
        </div>
    )
}

export default Header