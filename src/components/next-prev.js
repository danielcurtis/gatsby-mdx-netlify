import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function NextPrev({ prev, prevUrl, next, nextUrl }) {
	return (
		<div className="NextPrev">
			{prev === '' ? (
				<div />
			) : (
				<Link className="NextPrev-link" to={prevUrl} className="NextPrev-link">
					<small>
						<strong>Previous:</strong>
					</small>
					<br />
					{prev}
				</Link>
			)}
			{next === '' ? (
				<div />
			) : (
				<Link className="NextPrev-link" to={nextUrl}>
					<small>
						<strong>Next:</strong>
					</small>
					<br />
					{next}
				</Link>
			)}
		</div>
	);
}

NextPrev.propTypes = {
	prev: PropTypes.string.isRequired,
	prevUrl: PropTypes.string.isRequired,
	next: PropTypes.string.isRequired,
	nextUrl: PropTypes.string.isRequired,
};

export default NextPrev;
