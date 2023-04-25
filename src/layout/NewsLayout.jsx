import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import LeftNav from '../shared/LeftNav/LeftNav';
import RigthNav from '../shared/RigthNav/RigthNav';

const NewsLayout = () => {
	return (
		<div>
			<Header></Header>
			<Container>
				<Row>
					<Col lg={9}>
						<Outlet></Outlet>
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

export default NewsLayout;
