import React from 'react';

export default function(props) {
	return (
		<div className=" personal-interests row-containers ">
			<div className=" one-col h3 "> 
				Personal Interests
			</div>
			<div className=" three-col interests-list ">
				<div className=" row-containers interests-list-item ">
					<div className=" one-col h2">
						Branding
					</div>
					<div className=" two-col b1">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit obcaecati consequatur doloribus nisi, vitae veritatis
					</div>
				</div>
				<div className=" row-containers interests-list-item ">
					<div className=" one-col h2">
						Storytelling
					</div>
					<div className=" two-col b1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam praesentium explicabo quis nobis repudiandae iste, ducimus suscipit molestiae mollitia
					</div>
				</div>
			</div>
		</div>
	);
}
