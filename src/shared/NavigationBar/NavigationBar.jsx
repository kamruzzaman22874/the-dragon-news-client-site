import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const NavigationBar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleSignOut = () => {
		logOut()
		.then()
		.catch(err => console.log(err));
	};
	return (
		<Container>
			<Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
				<Container>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mx-auto'>
							<Link to='/category/0'>Home</Link>
							<Nav.Link href='#pricing'>About</Nav.Link>
							<Nav.Link href='#pricing'>Career</Nav.Link>
						</Nav>
						<Nav>
							{user && <FaUserCircle style={{ fontSize: '2rem' }} />}

							{user ? (
								<Button onClick={handleSignOut} variant='success'>
									Log out
								</Button>
							) : (
								<Link to='/login'>
									<Button variant='success'>Login</Button>
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;
