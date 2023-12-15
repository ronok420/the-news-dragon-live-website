import React from 'react';
import Header from '../Share/Header/Header';
import Footer from '../Share/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Share/LeftNav/LeftNav';
import RightNav from '../Share/RIghtNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Share/NavigationBar/NavigationBar';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}><Outlet></Outlet>
                    </Col>
                    <Col lg={3}><RightNav></RightNav>
                    </Col>
                </Row>
              
            </Container>

            <Footer></Footer>


        </div>
    );
};

export default Main;