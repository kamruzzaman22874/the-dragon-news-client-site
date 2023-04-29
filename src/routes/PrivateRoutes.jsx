import React from 'react';
import { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	if (loading) {
		return (
			<div className='w-25 mx-auto'>
				<Button variant='primary' disabled>
					<Spinner
						as='span'
						animation='grow'
						size='sm'
						role='status'
						aria-hidden='true'
					/>
					Loading...
				</Button>
			</div>
		);
	}

	if (user) {
		return children;
	}

	return (
		<Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
	);
};

export default PrivateRoutes;
