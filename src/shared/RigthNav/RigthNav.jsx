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

const RigthNav = () => {
	return (
		<div>
			<h4>Login With</h4>
			<Button variant='outline-primary'>
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
			<div className='text-center'>
				<img src={bg} alt='' />
			</div>
		</div>
	);
};

export default RigthNav;
