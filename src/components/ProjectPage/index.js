import React from 'react';
import ReactDOM from 'react-dom';

import ProjectHeader from './Header/'
import ProjectFooter from './Footer/'
import CloseButton from 'components/CloseButton'
import CategoryPage from 'components/CategoryPage'

import * as project_list from 'data/data.json';

export default class ProjectPage extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			project_id: props.project_id,
		};
	}

	nextProject() {
		this.setState({project_id: (this.state.project_id + 1) % project_list["numProjects"]});
	}

	render() {
		var header = [];
		var footer = [];
		var image_train = [];

		header.push( project_list["projects"].map((project) => {
			return (
				(this.state.project_id === project["project_id"]) && 
					<ProjectHeader title={project["heading"]} category={project["type"]}
						timestamp="June, 2020" description={project["description"]} />
			);
		}) );

		image_train.push( project_list["projects"].map((project) => {
			return (
				(this.state.project_id === project["project_id"]) && 
					<img className=" image-train-images " src={project["image-train"]} alt="puppy" />
			);
		}) );

		footer.push( project_list["projects"].map((project) => {
			return (
				(project["project_id"] === ((this.state.project_id + 1) % project_list["numProjects"])) && 
					<ProjectFooter title={project["heading"]} type={project["type"]} onClick={() => {this.nextProject()}} />
			);
		}) );

		return (
			<div className="container">
				<CloseButton onClick={() => {
					ReactDOM.render(<CategoryPage />, document.getElementById("root"));
				}} />

				{header}

				<div className="image-train" style={{gridColumn: 1/-1, flexDirection:"column"}}>
					{image_train}
				</div>

				{footer}
			</div>
		);
	}
}
