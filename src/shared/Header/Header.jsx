import React from 'react';
import moment from 'moment';
import logo from '../../assets/logo.png';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { useContext } from 'react';

const Header = () => {
	return (
		<Container>
			<div className='text-center'>
				<img src={logo} alt='' />
				<p>Journalism Without Fear or Favour</p>
				<p>{moment().format('dddd, MMMM D,YYYY')}</p>
			</div>
			<div className='d-flex'>
				<Button variant='danger'>Latest</Button>
				<Marquee className='text-danger' speed={50}>
					I can be a React component, multiple React components, or just some
					text.... I can be a React component, multiple React components, or
					just some text.
				</Marquee>
			</div>
		</Container>
	);
};

export default Header;
