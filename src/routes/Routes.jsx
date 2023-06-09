import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginLayout from '../layout/LoginLayout';
import Main from '../layout/Main';
import NewsLayout from '../layout/NewsLayout';
import Category from '../pages/Home/Category/Category';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import News from '../pages/News/News/News';
import Terms from '../shared/Terms/Terms';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginLayout></LoginLayout>,
		children: [
			{
				path: '/',
				element: <Navigate to='category/0'></Navigate>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: 'register',
				element: <Register></Register>,
			},
			{
				path: '/terms',
				element: <Terms/>
			}
		],
	},
	{
		path: '/category',
		element: <Main></Main>,
		children: [
			{
				path: ':id',
				element: <Category></Category>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/categories/${params.id}`),
			},
		],
	},
	{
		path: 'news',
		element: <NewsLayout></NewsLayout>,
		children: [
			{
				path: ':id',
				element: (
					<PrivateRoutes>
						<News></News>
					</PrivateRoutes>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/news/${params.id}`),
			},
		],
	},
]);

export default router;
