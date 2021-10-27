import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<h1>This is the home page</h1>
			<StaticImage
				alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
				src="../images/demo.webp"
			/>
		</Layout>
	);
};

export default IndexPage;
