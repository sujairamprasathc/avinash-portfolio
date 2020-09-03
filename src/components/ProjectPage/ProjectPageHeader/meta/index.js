import React from 'react';
import Category from './category/'
import Timestamp from './timestamp/'

export default function Meta(props) {
	return (
		<div className="one-col project-info">
			<Category category={props.category} />
			<br/>
			<Timestamp timestamp={props.timestamp} />
		</div>
	);
}
