import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import LeftNav from '../shared/LeftNav/LeftNav';
import RigthNav from '../shared/RigthNav/RigthNav';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<Container>
				<Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={6}>
                        <h3>Main content is coming</h3>
                    </Col>

                    <Col lg={3}>
                        <RigthNav></RigthNav>
                    </Col>
				</Row>
			</Container>
			<Footer></Footer>
		</div>
	);
};

export default Main;
