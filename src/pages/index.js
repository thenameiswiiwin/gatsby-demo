import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
	const [img, setImg] = useState('');

	useEffect(() => {
		fetchImages();
	}, []);

	const endpoint = 'https://dog.ceo/api/breeds/image/random';

	const fetchImages = () => {
		fetch(endpoint)
			.then((res) => res.json())
			.then((data) => setImg(data.message));
	};

	return (
		<Layout pageTitle="Home Page">
			<h1>This is the home page</h1>
			<img alt="Random picture of dogs" src={img} />
		</Layout>
	);
};

export default IndexPage;
