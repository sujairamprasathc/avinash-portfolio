import React from 'react';

import '../..//index.css';

import Header from './Header/';
import Footer from './Footer/';
import CloseButton from './CloseButton/';
import CategoryList from './CategoryList/';
import ProjectList from './ProjectList/';

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

	render() {
		return (
			<div className="container">
				<CloseButton />
				<Header />
				<CategoryList onClick={(category_id) => this.updateCategory(category_id)}
					category_id={this.state.category_id} />
				<div style={{height: "300px"}}></div>
				<ProjectList category_id={this.state.category_id} />
				<div style={{height: "300px"}}></div>
				<Footer />
			</div>
		);
	}
}
