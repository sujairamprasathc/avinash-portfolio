import React from 'react';

import ProjectHeader from './ProjectPageHeader/'
import ProjectFooter from './ProjectPageFooter/'
import CloseButton from './../CloseButton/'

export default function ProjectPage(props) {
	return (
		<div className="container">
			<CloseButton />
			<ProjectHeader title="Mangoes & Marbles" category="Animated Short Film" 
				timestamp="June, 2020" description="Project Description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate in ad deleniti minima non dolorem, porro libero veniam tempore natus fugiat error veritatis rerum. Dolore voluptas nisi repellendus magnam esse?" />




			<div className="image-train" style={{gridColumn: 1/-1, flexDirection:"column"}}>
				<img className=" image-train-images " src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*"/>
				<img className=" image-train-images " src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*"/>
				<img className=" image-train-images " src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?"/>
			</div>




			<ProjectFooter />
		</div>
	);
}
