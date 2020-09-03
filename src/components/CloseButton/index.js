import React from 'react';

export default function CloseButton(props) {
	return (
		<div className=" menu-circle-mobile">
			<svg viewBox="-5 -5 40 40" height="30" width="30">
				<line x1="1" y1="28" x2="29" y2="1"/>
				<line x1="29" y1="29" x2="1" y2="1" />
				Sorry, your browser does not support inline SVG.
			</svg>
		</div>
	);
}
