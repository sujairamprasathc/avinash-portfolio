import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import * as project_list from './data/data.json';
import * as categories from './data/categories.json';

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
		<div className="project-item row-containers">
			{
				(props.category_id === 0 || props.category_id === props.category) &&
					<ProjectImage image={props.image} />
			}
			{
				(props.category_id === 0 || props.category_id === props.category) &&
					<ProjectItem heading={props.heading} type={props.type} description={props.description}/>
			}
		</div>
	);
}

function ProjectList(props) {
	var rows = [];

	rows.push( project_list["projects"].map((project) => {
		return (
			<Project heading={project["heading"]} type={project["type"]} description={project["description"]}
				image={require(`${project["image"]}`)} category_id={props.category_id}
				category={project["category"]} />
		);
	}) );

	return (
		<div className="project-list">
		{rows}
		</div>
	);
}

function Header(props) {
	return (
		<header>
		<div className=" h1 one-col">
			Portfolio
		</div>
		</header>
	);
}

function Category(props) {
	return (
		<ul className=" category-list-item b1" onClick={ props.onClick } key={props.name} >
			{props.name}
			<div className="icon">
				<div className=" arrow">
				<svg viewBox="0 0 40 40" transform="rotate(90 0 0)" height="30" width="30">
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

function SelectedCategory(props) {
	return (
		<ul className=" category-list-item h2" onClick={ props.onClick } key={props.name} >
			{props.name}
			<div className="icon">
				<div className=" arrow">
				<svg viewBox="0 0 40 40" transform="rotate(90 0 0)" height="30" width="30">
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
			<div>
			{
				(props.category_id === category["id"]) &&
					<SelectedCategory name={category["category"]} onClick={() => props.onClick(category["id"])} />
			}
			{
				(props.category_id !== category["id"]) &&
					<Category name={category["category"]} onClick={() => props.onClick(category["id"])} />
			}
			</div>
		);
	}) );

	return (
		<nav className=" category-filter row-containers">
			<div className=" h3 one-col">
				Categories
			</div>
			<div className=" one-col ">
				{
					(props.category_id === 0) &&
						<SelectedCategory name="All Projects" onClick={() => props.onClick(0)} />
				}
				{
					(props.category_id !== 0) &&
						<Category name="All Projects" onClick={() => props.onClick(0)} />
				}
				{rows}
			</div>
			<div className=" two-col"></div>
		</nav>
	);
}

function MenuButton(props) {
	return (
		<div className="menu-circle">
			<svg viewBox="-5 -5 40 40" height="30" width="30">
				<line x1="1" y1="28" x2="29" y2="1"/>
				<line x1="29" y1="29" x2="1" y2="1" />
				Sorry, your browser does not support inline SVG.
			</svg>
		</div>
	);
}

function NextPage(props) {
	return (
		<div className="next-page row-containers">
			<div className=" one-col h1">Next Category</div>
			<div className=" two-col next-page-content">
				<div className=" h2">
					Communication Design
				</div>
			</div>
			<div className=" one-col icon">
				<div className=" arrow">
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

class Root extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			category_id : 0,
		};
	}

	updateCategory(category_id_) {
		this.setState({category_id: category_id_});
	}

	render() {
		return (
			<React.Fragment>
				<MenuButton />
				<div className="container">
					<Header />
					<CategoryList onClick={(category_id) => this.updateCategory(category_id)}
						category_id={this.state.category_id} />
					<div style={{height: "300px"}}></div>
					<ProjectList category_id={this.state.category_id} />
					<div style={{height: "300px"}}></div>
					<NextPage />
				</div>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById("root"));
