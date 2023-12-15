import React, { useContext } from 'react';
import logo from '../../../src/assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container className='text-center'>
            <img src={logo} alt="" />
            <p className='text-secondary'>Journalism Without Fear or Favour</p>
            <p className='text-primary'>{moment().format('LLLL')}</p>
            <div className="d-flex">
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={80}>
                    I can be a React component, multiple React components, or just some text......
                    I can be a React component, multiple React components, or just some text......
                </Marquee>
            </div>
            {/* <Navbar expand="lg" className="mt-2 bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/category/0">                            <Nav.Link href="#action1">Home</Nav.Link>
                            </Link>
                            <Nav.Link href="#action2">about</Nav.Link>
                            <Nav.Link href="#action3">career</Nav.Link>

                        </Nav>
                        <Form className="d-flex">

                           {user && <nav><FaUserCircle style={{fontSize:"2rem"}}/></nav>}
                           {
                            user?
                             <Button className='mx-2' variant="outline-success">Logout</Button> :
                             <Button className='mx-2' variant="outline-success">Login</Button>
       }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </Container>
    );
};

export default Header;