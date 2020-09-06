import React from 'react';

import my_image from 'images/sq.jpg';

export default function About(props) {
	return (
		<React.Fragment>
			<div className=" row-containers my-image-containers ">
				<img className="my-image " src={my_image} />
			</div>

			<div className=" row-containerstainers full-row ">
				<div className=" one-col h3 ">
					About Me
				</div>
				<div className=" two-col h2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam nobis praesentium aperiam ipsum fuga, facere vel consequatur commodi consequuntur corrupti rerum beatae voluptates odio. Distinctio ipsam accusantium quia maiores!
				</div>
				<div className=" one-col ">
				</div>
			</div>

			<div className=" gap-1x ">
			</div>

			<div className=" row-containers full-row ">
				<div className=" one-col h3 ">
					Education
				</div>
				<div className=" two-col h2 ">
					Pursuing B.Des at IDC School of Design, IIT Bombay
				</div>
				<div className=" one-col ">
				</div>
			</div>
		</React.Fragment>
	);
}
