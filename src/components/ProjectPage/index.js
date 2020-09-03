import React from 'react';

import ProjectHeader from './ProjectPageHeader/'
import CloseButton from './../CloseButton/'

export default function ProjectPage(props) {
	return (
		<div className="container">
			<CloseButton />
			<ProjectHeader title="Mangoes & Marbles" category="Animated Short Film" 
				timestamp="June, 2020" description="Project Description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate in ad deleniti minima non dolorem, porro libero veniam tempore natus fugiat error veritatis rerum. Dolore voluptas nisi repellendus magnam esse?" />
		</div>
	);
}
