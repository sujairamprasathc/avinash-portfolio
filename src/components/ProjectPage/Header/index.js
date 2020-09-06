import React from 'react';
import Meta from './meta/'
import Title from './title/'
import Description from './description/'

export default function ProjectHeader(props) {
	return (
		<header>
			<Title title={props.title} />
			<div className="row-containers b1">
				<Meta category={props.category} timestamp={props.timestamp} />
				<div className="two-col">
					<Description description={props.description} />
				</div>
				<div className="one-col"></div>
			</div>
		</header>
	);
}
