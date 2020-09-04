import React from 'react';

export default function Footer(props) {
	return (
		<div class="next-page row-containers">
			<div class=" one-col h1">
				Next Category
			</div>
			<div class=" three-col next-page-content ">
				<div class=" float-item"> 
					<div class=" h2">Communication Design </div>
				</div>
				<div class=" icon float-item" >
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

