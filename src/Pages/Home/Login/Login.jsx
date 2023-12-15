import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/Authprovider';


const Login = () => {
    const {signInuser} =useContext(AuthContext);
    const navigate=useNavigate();
    

    const handleLogin =event =>{
        event.preventDefault();
        const form =event.target;
       
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        signInuser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            navigate('/category/0')
            form.reset();
        })
        .catch(error=>{
            console.error(error);
        })


    }
    return (
        <Container className='w-25 mx-auto mt-4'>
            <Form onSubmit={handleLogin}>
                <h2>Please Login</h2>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="acccept terms and condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button><br/>

                <Form.Text className="text-muted">
                    don't have account ? <Link to="/register">register</Link>
                </Form.Text> <br/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Login;