import React from 'react';

import About from './About.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import Interests from './Interests.js';
import KeyProjects from './KeyProjects.js';

export default function HomePage(props) {
	return (
		<div className=" container">
			<Header />
			<About />
			<div className=" gap-2x "></div>
			<div className=" gap-2x "></div>
			<div className=" gap-1x "></div>
			<div className=" big-circle "></div>
			<Interests />
			<div className=" gap-2x "></div>
			<div className=" gap-1x "></div>
			<KeyProjects />
			<div className=" gap-2x" ></div>
			<div className=" gap-2x "></div>
			<Contact />
			<div className=" gap-2x" ></div>
			<div className=" gapp-2x "></div>
			<Footer />
			<div className=" gap-1x "></div>
		</div>
	);
}
