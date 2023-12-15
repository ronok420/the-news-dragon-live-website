import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { user ,logOut} = useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then(()=>{}
        )
        .catch(error=>{console.error(error)})
    }

    return (
        <Container>

            <Navbar expand="lg" className="mt-2 bg-body-tertiary">
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

                            {user && <nav><FaUserCircle style={{ fontSize: "2rem" }} /></nav>}
                            {
                                user ?
                                    <Button onClick={handleLogout} className='mx-2' variant="outline-success">Logout</Button> :
                                    <Link to="/login">
                                     <Button className='mx-2' variant="outline-success">Login</Button>
                                    </Link>
                                   
                            }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;