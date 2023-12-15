import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../../Provider/Authprovider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister= (event)=>{
        event.preventDefault();
        const form =event.target;
        const name=form.name.value;
        const photo =form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name, photo,email,password);


        createUser(email,password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser);
            form.reset();
        })
        .catch(error=>{
            console.error(error);
        })
    }



    return (
        <Container className='w-25 mx-auto mt-4'>
        <Form onSubmit={handleRegister}>
            <h3>Register your account</h3>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter name" required />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" name="photo" placeholder="Enter photo url" required />

            </Form.Group>
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
                Register
            </Button>

            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form>

    </Container>
    );
};

export default Register;