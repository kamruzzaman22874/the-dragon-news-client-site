import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {
	const { createUsers, setUser } = useContext(AuthContext);
	const [accepted, setAccepted] = useState(false);

	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, photo, email, password);

		createUsers(email, password)
			.then((result) => {
				const registerUser = result.user;
				setUser(registerUser);
			})
			.catch((err) => {
				console.log(err);
			});
	};


	const handleAccepted = event => {
		setAccepted(event.target.checked);
	}
	return (
		<Container className='w-25 mx-auto'>
			<h2>Please Register</h2>
			<Form onSubmit={handleRegister}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Name</Form.Label>
					<Form.Control type='text' name='name' placeholder='Your Name' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Photo url</Form.Label>
					<Form.Control type='text' name='photo' placeholder='Photo Url' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' name='email' placeholder='Enter email' />
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						name='password'
						placeholder='Password'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					<Form.Check
						onClick={handleAccepted}
						type='checkbox'
						name='accept'
						label={
							<>
								Accept <Link to="/terms">Terms & Conditions</Link>
							</>
						}
					/>
				</Form.Group>
				<Button variant='primary' disabled={!accepted} type='submit'>
					Register
				</Button>
				<br />
				<Form.Text className='text-secondary'>
					Already have an account? Please <Link to='/login'>Login</Link>
				</Form.Text>
				<Form.Text className='text-success'></Form.Text>
				<Form.Text className='text-danger'></Form.Text>
			</Form>
		</Container>
	);
};

export default Register;
