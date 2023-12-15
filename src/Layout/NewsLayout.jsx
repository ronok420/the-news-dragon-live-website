import React from 'react';
import Header from '../Share/Header/Header';
import Footer from '../Share/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Share/LeftNav/LeftNav';
import RightNav from '../Share/RIghtNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                  
                    <Col lg={9}><Outlet></Outlet>
                    </Col>
                    <Col lg={3}><RightNav></RightNav>
                    </Col>
                </Row>
              
            </Container>

            <Footer></Footer>


        </div>
    );
};

export default NewsLayout;