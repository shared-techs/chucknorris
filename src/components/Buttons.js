import React from 'react';
import './Buttons.css';

const Buttons = ({ onNewBtnClick, onPrevBtnClick }) => {
	return (
		<div className='buttons pa2'>
			<a
				onClick={onPrevBtnClick}
				className="ma2 pa3 f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-green"
				href="#0">Prev Joke
			</a>


			<a
				onClick={onNewBtnClick}
				className="ma2 pa3 f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-green"
				href="#0">New Joke
			</a>
		</div>
	);
};

export default Buttons;