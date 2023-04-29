import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
	return (
		<div>
			<h2>Our Terms and conditions</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
				voluptatum, provident, quibusdam consequatur sed iste saepe ad ea harum
				quidem, expedita sit dolor sapiente fuga doloribus architecto
				reprehenderit quas perferendis.
			</p>
			<p>Go Back to <Link to='/register'>Register</Link> </p>
		</div>
	);
};

export default Terms;
