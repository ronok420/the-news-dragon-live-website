import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from "react-icons/fa";
import Qzone from '../QZone/Qzone';


const RightNav = () => {
    return (
        <div className='mt-5 mb-5'>
            <h4 className='mb-4'>Login With</h4>
            <Button variant="outline-secondary"><FaGithub />Login with GitHub</Button> <br />
            <Button className='mt-2' variant="outline-success"><FaGoogle />Login with Google</Button>
            <div className='mb-4'>
                <h4 className='mt-4'>Find Us on</h4>
                <ListGroup>
                    <ListGroup.Item>Facebook</ListGroup.Item>
                    <ListGroup.Item>Twitter</ListGroup.Item>
                    <ListGroup.Item>Instragram</ListGroup.Item>
                  
                </ListGroup>
            </div>
            <Qzone></Qzone>


        </div>
    );
};

export default RightNav;