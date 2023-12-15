import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../../Provider/Authprovider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)



    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);


        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleCheckBox = e => {
        setAccepted(e.target.checked);

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
                    <Form.Label>Enter photo url</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter photo url"  />

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
                    <Form.Check
                        onClick={handleCheckBox}
                        type="checkbox"
                        name="accept"
                        label={<>accept <Link to="/terms">terms and condition</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button> <br />

                <Form.Text className="text-muted">
                    already have an accout?<Link to="/login">login</Link>
                </Form.Text> <br />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Register;