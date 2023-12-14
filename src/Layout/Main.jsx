import React from 'react';
import Header from '../Share/Header/Header';
import Footer from '../Share/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Share/LeftNav/LeftNav';
import RightNav from '../Share/RIghtNav/RightNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}><h2>center  loading.....</h2>
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