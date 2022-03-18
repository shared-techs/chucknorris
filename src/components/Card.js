import React from 'react';
import chucknorrisT from './chucknorrisT.png';

const Card = ({joke, cnum, tot}) => {
	return (
		<div>
			<article className="br2 ba dark-gray b--black-30 mv4 w-100 w-50-m w-25-l mw5 center">
			  <img src={chucknorrisT} className='db center w-75 br2 br--top' alt="Chuck Norris Cartoon figure" />
			  <div className="pa2 ph3-ns pb3-ns">
			    <div className="dt w-100 mt1">
			      <div className="f6 lh-copy ">
			        <h2 className="center measure mt2 mid-gray f5 mv0">Joke: { cnum + 1} of {tot + 1}</h2>
			      </div>
			    </div>
			    <p className="f5 lh-copy ">
			      {joke}
			    </p>
			  </div>
			</article>
		</div>
	);
}

export default Card;
