import React from 'react';

import * as project_list from 'data/data.json';

import ProjectBox from 'components/ProjectBox';

export default function KeyProjects(props) {
	var rows = [];

	rows.push( project_list["projects"].map((project) => {
		return ( 
			<React.Fragment>
			{ (project["isKey"] === "true") &&
			<ProjectBox heading={project["heading"]} type={project["type"]}
				description={project["description"]} project_id={project["project_id"]}
				image={require("../../" + project["image"] )}
				category_id={0} category={project["category"]} />
			}
			</React.Fragment>
		);
	}) );

	return (
		<React.Fragment>
			<div className=" h3 full-row " style={{"marginBottom": "5px"}}>
				Key Projects
			</div>
			<div className="project-list">
				{rows}
			</div>
		</React.Fragment>
	);
}
