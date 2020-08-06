import React from 'react';

import Heading from '../components/heading';
import SmartLink from '../components/smart-link';
import YouTube from '../components/youtube';
import NextPrev from '../components/next-prev';

// Include all components that will be parsed by MDX as React components here.
// Any React component you'd like to allow your editors to use should be placed here.
const CMS_SHORTCODES = {
	YouTube: (props) => <YouTube {...props} />,
	NextPrev: (props) => <NextPrev {...props} />,
};

// Include any tags you'd like to replace with React components
const CMS_COMPONENTS = {
	h1: (props) => <Heading tag={1} {...props} />,
	h2: (props) => <Heading tag={2} {...props} />,
	h3: (props) => <Heading tag={3} {...props} />,
	h4: (props) => <Heading tag={4} {...props} />,
	h5: (props) => <Heading tag={5} {...props} />,
	h6: (props) => <Heading tag={6} {...props} />,
	a: (props) => <SmartLink {...props} />,
};

export { CMS_SHORTCODES, CMS_COMPONENTS };
