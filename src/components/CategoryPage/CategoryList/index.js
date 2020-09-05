import React from 'react';

import * as categories from '../../../data/categories.json';

function Category(props) {
	return (
		<ul className={((props.category_id === 0 && props.current_category_id === 0) && "category-list-item-1 h2") ||
				((props.category_id === 0 && props.current_category_id !== 0) && "category-list-item-1 b1") ||
				((props.category_id !== 0 && props.current_category_id === props.category_id)
					&& "category-list-item h2") ||
				((props.category_id !== 0 && props.current_category_id !== props.category_id)
					&& "category-list-item b1")
				}
				onClick={ props.onClick } key={props.name} >
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

export default function CategoryList(props) {
	var rows = [];

	rows.push( categories["categories"].map((category) => {
		return (
			<div>
				<Category name={category["category"]} onClick={() => props.onClick(category["id"])}
					category_id={category["id"]} current_category_id={props.current_category_id} />
			</div>
		);
	}) );

	return (
		<nav className=" category-filter row-containers">
			<div className=" h3 one-col">
				Categories
			</div>
			<div className=" one-col ">
				{rows}
			</div>
			<div className=" two-col"></div>
		</nav>
	);
}
