import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as project_list from './data.json';
import * as categories from './categories.json';

function ProjectHeading(props) {
	return (
		<div class=" h2">
			{props.heading}
		</div>
	);
}

function ProjectType(props) {
	return (
		<div class=" b1">
			{props.type}
		</div>
	);
}

function ProjectMeta(props) {
	return (
		<div class=" one-col ">
			<ProjectHeading heading={props.heading}/>
			<ProjectType type={props.type}/>
		</div>
	);
}

function ProjectDescription(props) {
	return (
		<p class=" one-half-col b1">
			{props.description}
		</p>
	);
}

function ProjectArrow(props) {
	return (
		<div class=" half-col icon">
			<div class=" arrow">
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
		<div class=" three-col project-item-content">
			<ProjectMeta heading={props.heading} type={props.type}/>
			<ProjectDescription description={props.description}/>
			<ProjectArrow />
		</div>
	);
}

function ProjectImage(props) {
	return (
		<div class="one-col">
		<div class=" project-item-image">
				<img class=" image" src={props.image} alt="pupp" />
			</div>
		</div>
	);
}

function Project(props) {
	return (
		<div class="project-item row-containers">
			<ProjectImage image={props.image} />
			<ProjectItem heading={props.heading} type={props.type} description={props.description}/>
		</div>
	);
}

function ProjectList(props) {
	var rows = [];

	rows.push( project_list["projects"].map((project) => {
		return (
			<Project heading={project["heading"]} type={project["type"]} description={project["description"]}
				image={require(`${project["image"]}`)} />
		);
	}) );

	return (
		<div class="project-list">
		{rows}
		</div>
	);
}

function Header(props) {
	return (
		<header>
		<div class=" h1 one-col">
			Portfolio
		</div>
		</header>
	);
}

function Category(props) {
	return (
		<ul class=" category-list-item b1" onClick={ () => alert("Clicking works") }>
			{props.name}
			<div class="icon">
				<div class=" arrow">
				<svg viewbox="0 0 40 40" transform="rotate(90 0 0)" height="30" width="30">
					<line x1="1" y1="28" x2="29" y2="1"/>
					<line x1="0" y1="1" x2="29" y2="1" />
					<line x1="29" y1="0" x2="29" y2="29"/>
					Sorry, your browser does not support inline SVG.
				</svg>
				</div>
			</div>
		</ul>
	);
}

function CategoryList(props) {
	var rows = [];

	rows.push( categories["categories"].map((category) => {
		return (
			<Category name={category} />
		);
	}) );

	return (
		<nav class=" category-filter row-containers">
			<div class=" h3 one-col">
				CategoryList
			</div>
			<div class=" one-col ">
				<ul class=" category-list-item-1 h2">
					All Projects
					<div class="half-col icon">
					<div class="arrow">
						<svg viewbox="0 0 40 40" transform="rotate(90 0 0)" height="30" width="30">
							<line x1="1" y1="28" x2="29" y2="1"/>
							<line x1="0" y1="1" x2="29" y2="1" />
							<line x1="29" y1="0" x2="29" y2="29"/>
							Sorry, your browser does not support inline SVG.
						</svg>
					</div>
					</div>
				</ul>
				{rows}
			</div>
			<div class=" two-col"></div>
		</nav>
	);
}

function MenuButton(props) {
	return (
		<div class=" menu-circle ">
			<svg viewbox="-5 -5 40 40" height="30" width="30">
				<line x1="1" y1="28" x2="29" y2="1"/>
				<line x1="29" y1="29" x2="1" y2="1" />
				Sorry, your browser does not support inline SVG.
			</svg>
		</div>
	);
}

function NextPage(props) {
	return (
		<div class="next-page row-containers">
			<div class=" one-col h1">Next Category</div>
			<div class=" two-col next-page-content">
				<div class=" h2">
					Communication Design
				</div>
			</div>
			<div class=" one-col icon">
				<div class=" arrow">
					<svg transform="rotate(90 0 0)" height="30" width="30">
						<line x1="1" y1="28" x2="29" y2="1"/>
						<line x1="0" y1="1" x2="29" y2="1" />
						<line x1="29" y1="0" x2="29" y2="29"/>
						Sorry, your browser does not support inline SVG.
					</svg>
				</div>
			</div>
		</div>
	);
}

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category_id : 0,
		};
	}

	render() {
		return (
			<body>
				<MenuButton />
				<div class="container">
					<Header />
					<CategoryList />
					<div style={{height: "300px"}}></div>
					<ProjectList />
					<div style={{height: "300px"}}></div>
					<NextPage />
				</div>
			</body>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById("root"));
