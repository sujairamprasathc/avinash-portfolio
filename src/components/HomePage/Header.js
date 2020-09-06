import React from 'react';
import ReactDOM from 'react-dom';

import CloseButton from 'components/CloseButton';
import CategoryPage from 'components/CategoryPage';

export default function Header(props) {
	return (
		<React.Fragment>
			<CloseButton onClick={() => { 
				ReactDOM.render(<CategoryPage />, document.getElementById("root"));
			} }/>
			<header>
				<div className=" h1 ">
					Avinash M
				</div>
			</header>
		</React.Fragment>
	);
}
