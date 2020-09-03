import React from "react";

export default function Title(props) {
	return (
		<div className="h1" style={{"marginBottom": "50px"}}>
			{props.title}
		</div>
	);
}
