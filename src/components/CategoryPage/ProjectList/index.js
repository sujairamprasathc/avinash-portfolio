import React from 'react';
import ReactDOM from 'react-dom';

import * as project_list from 'data/data.json';
import ProjectPage from 'components/ProjectPage/';

function ProjectHeading(props) {
	return (
		<div className=" h2">
			{props.heading}
		</div>
	);
}

function ProjectType(props) {
	return (
		<div className=" b1">
			{props.type}
		</div>
	);
}

function ProjectMeta(props) {
	return (
		<div className=" one-col ">
			<ProjectHeading heading={props.heading}/>
			<ProjectType type={props.type}/>
		</div>
	);
}

function ProjectDescription(props) {
	return (
		<p className=" one-half-col b1">
			{props.description}
		</p>
	);
}

function ProjectArrow(props) {
	return (
		<div className=" half-col icon">
			<div className=" arrow">
				<svg height="30" width="30">
				<line x1="1" y1="28" x2="29" y2="1"/>
				<line x1="0" y1="1" x2="29" y2="1" />
				<line x1="29" y1="0" x2="29" y2="29"/>
					Sorry, your browser does not support inline SVG.
				</svg>
			</div>
		</div>
	);
}

function ProjectItem(props) {
	return (
		<div className=" three-col project-item-content">
			<ProjectMeta heading={props.heading} type={props.type}/>
			<ProjectDescription description={props.description}/>
			<ProjectArrow />
		</div>
	);
}

function ProjectImage(props) {
	return (
		<div className="one-col">
		<div className=" project-item-image">
				<img className=" image" src={props.image} alt="pupp" />
			</div>
		</div>
	);
}

function Project(props) {
	return (
		<div className="project-item row-containers" onClick={() => {
			ReactDOM.render(<ProjectPage project_id={props.project_id} />,
					document.getElementById("root"));
		}} >
			{
				(props.category_id === 0 || props.category_id === props.category) &&
					<React.Fragment>
						<ProjectImage image={props.image} />
						<ProjectItem heading={props.heading} type={props.type}
							description={props.description}/>
					</React.Fragment>
			}
		</div>
	);
}

export default function ProjectList(props) {
	var rows = [];

	rows.push( project_list["projects"].map((project) => {
		return (
			<Project heading={project["heading"]} type={project["type"]}
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
