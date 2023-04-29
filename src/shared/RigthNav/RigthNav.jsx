import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

import {
	FaFacebook,
	FaGithub,
	FaGoogle,
	FaInstagram,
	FaTwitter,
} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../assets/bg.png';
import './RightNav.css';

const RigthNav = () => {
	return (
		<div>
			<h4>Login With</h4>
			<Button variant='outline-primary' className='mb-2'>
				<FaGoogle /> Login with google
			</Button>
			<br />
			<Button variant='outline-secondary'>
				<FaGithub /> Login with Github
			</Button>
			<div>
				<h4 className='mt-4'>Find us on</h4>
				<ListGroup>
					<ListGroup.Item>
						<FaFacebook /> Facebook
					</ListGroup.Item>
					<ListGroup.Item>
						<FaTwitter /> TWitter
					</ListGroup.Item>
					<ListGroup.Item>
						<FaInstagram /> Instagram
					</ListGroup.Item>
				</ListGroup>
			</div>

			<QZone></QZone>
			<div className='text-center bg-image text-white px-3 py-5 rounded'>
				{/* <img src={bg} alt='' /> */}
				<h1 className='mb-5'>Create an Amazing Newspaper</h1>
				<p>
					Discover thousands of options, easy to customize layouts, one-click to
					import demo and much more.
				</p>
				<Button className='py-3 px-4 bg-danger border-0'>Learn More</Button>
			</div>
		</div>
	);
};

export default RigthNav;
