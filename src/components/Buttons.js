import React from 'react';
import './Buttons.css'

const Buttons = ({ onNewBtnClick, onPrevBtnClick })=> {
	return (
		<div className='buttons pa2'>
			<button
				key='prevBtn'
				className='ma2 pa3 ba b--dark-blue bg-lightest-blue'
				type='button' 
				onClick={onPrevBtnClick}
			>
			Prev Joke
			</button>		

			<button
				key='nxtBtn'
				className='ma2 pa3 ba b--dark-blue bg-lightest-blue'
				type='button' 
				onClick={onNewBtnClick}
			>
			NewJoke
			</button>
		</div>
	);
}

export default Buttons;