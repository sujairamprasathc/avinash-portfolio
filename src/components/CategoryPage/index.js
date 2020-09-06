import React from 'react';
import ReactDOM from 'react-dom';

import * as project_list from 'data/data.json';
import * as category_list from 'data/categories.json';

import Header from './Header/';
import Footer from './Footer/';
import ProjectList from './ProjectList/';
import CategoryList from './CategoryList/';
import HomePage from 'components/HomePage';
import CloseButton from 'components/CloseButton/';

export default class Root extends React.Component
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

	nextCategory() {
		this.setState({category_id: (this.state.category_id + 1) % project_list["numProjects"]});
	}

	getNextCategory() {
		return category_list["categories"][(this.state.category_id + 1) % project_list["numProjects"]]["category"];
	}

	render() {
		return (
			<div className="container">
				<CloseButton onClick={() => {
					ReactDOM.render(<HomePage />, document.getElementById("root"));
				} } />
				<Header />
				<CategoryList onClick={(category_id) => this.updateCategory(category_id)}
					current_category_id={this.state.category_id} />
				<div style={{height: "300px"}}></div>
				<ProjectList category_id={this.state.category_id} />
				<div style={{height: "300px"}}></div>
				<Footer onClick={() => this.nextCategory()} next_category={this.getNextCategory()} />
			</div>
		);
	}
}
