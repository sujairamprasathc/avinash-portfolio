import React from 'react';

export default function ProjectFooter(props) {
	return (
		<div className="next-page row-containers">
			<div className="one-col h1">Next Project</div>

			<div className=" three-col next-page-content">

				<div className="float-item project-info b1">
					Fudr
					<br/>
					UI/UX Enhancement
				</div>

				<div className=" icon float-item" >
					<svg transform="rotate(90 0 0)" h1eight="30" width="30">
						<line x1="1" y1="28" x2="29" y2="1"/>
						<line x1="0" y1="1" x2="29" y2="1" />
						<line x1="29" y1="0" x2="29" y2="29"/>
						Sorry, your browser does not svgupport inline SVG.
					</svg>
				</div>
			</div>
		</div>
	);
}
