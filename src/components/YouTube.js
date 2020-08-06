import React from 'react';
import PropTypes from 'prop-types';

function YouTube({ url }) {
	return (
		<div className="video">
			<iframe
				src={url}
				width="95%"
				height="350px"
				title="Title"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				frameBorder="0"
				webkitallowfullscreen="true"
				mozallowfullscreen="true"
				allowFullScreen
			/>
		</div>
	);
}

YouTube.propTypes = {
	url: PropTypes.string.isRequired,
};

export default YouTube;
