import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import LeftNav from '../shared/LeftNav/LeftNav';
import NavigationBar from '../shared/NavigationBar/NavigationBar';
import RigthNav from '../shared/RigthNav/RigthNav';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<NavigationBar></NavigationBar>
			<Container>
				<Row>
					<Col lg={3}>
						<LeftNav></LeftNav>
					</Col>

					<Col lg={6}>
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

export default Main;
