import React from 'react';
import ReactDOM from 'react-dom';

import * as project_list from 'data/data.json';
import ProjectBox from 'components/ProjectBox';

export default function ProjectList(props) {
	var rows = [];

	rows.push( project_list["projects"].map((project) => {
		return (
			<ProjectBox heading={project["heading"]} type={project["type"]}
				description={project["description"]} project_id={project["project_id"]}
				image={require("../../../" + project["image"] )}
				category_id={props.category_id} category={project["category"]} />
		);
	}) );

	return (
		<div className="project-list">
		{rows}
		</div>
	);
}
