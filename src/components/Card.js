import React from 'react';

const Card = ({joke, cnum, tot}) => {
	return (
		<div>
			<article className="br2 ba dark-gray b--black-30 mv4 w-100 w-50-m w-25-l mw5 center">
			  <img src={`https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png`} className='db w-100 br2 br--top' alt='Image of Chuck.' />
			  <div className="pa2 ph3-ns pb3-ns">
			    <div className="dt w-100 mt1">
			      <div className="dtc">
			        <h1 className="f5 f4-ns mv0"></h1>
			      </div>
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


{/*
		<div>
			<img alt='chuck norris joke' src={`https://assets.chucknorris.host/img/avatar/chuck-norris.png`} />
			<article className="center mw5 mw6-ns hidden ba mv4">
				<h1 className="f4 bg-near-black white mv0 pv2 ph3">Joke { cnum + 1} of {tot + 1}</h1>
				<div className="pa3 bt">
					<p className="f6 f5-ns lh-copy measure mv0">
						{joke}
					</p>
				</div>
			</article>
		</div>*/}