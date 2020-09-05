import React from 'react';

import ProjectHeader from './ProjectPageHeader/'
import ProjectFooter from './ProjectPageFooter/'
import CloseButton from './../CloseButton/'

import * as project_list from '../../data/data.json';

export default function ProjectPage(props) {
	var header = [];
	var image_train = [];

	header.push( project_list["projects"].map((project) => {
		return (
			(props.project_id === project["project_id"]) && 
				<ProjectHeader title={project["heading"]} category={project["type"]}
					timestamp="June, 2020" description={project["description"]} />
		);
	}) );

	image_train.push( project_list["projects"].map((project) => {
		return (
			(props.project_id === project["project_id"]) && 
				<img className=" image-train-images " src={project["image-train"]} alt="puppy" />
		);
	}) );

	return (
		<div className="container">
			<CloseButton />
			
			{header}

			<div className="image-train" style={{gridColumn: 1/-1, flexDirection:"column"}}>
				{image_train}
			</div>




			<ProjectFooter />
		</div>
	);
}
