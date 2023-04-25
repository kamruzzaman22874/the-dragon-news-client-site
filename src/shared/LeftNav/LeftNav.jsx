import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditorInsightLeft from '../../pages/News/EditorInsightLeft/EditorInsightLeft';

const LeftNav = () => {
	const [categories, setCategoties] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/categories')
			.then((res) => res.json())
			.then((data) => setCategoties(data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			<h1>All Category</h1>
			<div className='ps-4'>
				{categories.map((category) => (
					<p key={category.id}>
						<Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
					</p>
				))}
			</div>
			<EditorInsightLeft></EditorInsightLeft>
		</div>
	);
};

export default LeftNav;
