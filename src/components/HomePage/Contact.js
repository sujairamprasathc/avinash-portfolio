import React from 'react';

export default function Contact(props) {
	return (
	<React.Fragment>
		<div className=" full-row h3 ">
			Contacts
		</div>
		<div className=" row-containers">
			<div className=" one-col h2 contact-list-item " > 
				Feedback is always welcome.<br/>Go Nuts :)
			</div>
			<div className=" three-col contact-list ">
				<div className=" row-containers contact-list-item ">
					<div className=" one-col h2">
						Phone
					</div>
					<div className=" two-col b1">
						+91 94884 10790
					</div>
				</div>
				<div className=" row-containers contact-list-item ">
					<div className=" one-col h2">
						E-mail
					</div>
					<div className=" two-col b1">
						avinashmani1999@gmail.com
					</div>
				</div> 
			</div>
		</div>
	</React.Fragment>
	);
}
