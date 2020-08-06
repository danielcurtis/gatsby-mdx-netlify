import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { CMS_COMPONENTS, CMS_SHORTCODES } from '../cms/cms-components';
import { safelyGetFrontMatter, withFallback } from '../cms/cms-utils';
import Heading from '../components/heading';
import SEO from '../components/seo';
import RenderMarkdown from '../core/render-markdown';

function DefaultPageTemplate({ title, body, children }) {
	return (
		<article style={{ marginTop: `70px` }}>
			<SEO title={withFallback(title, '')} />
			<Heading tag={1}>{title}</Heading>
			{/* If children should be used instead of body, body will be empty, so it's safe to have both */}
			<RenderMarkdown md={body} />
			{/* Include children to support any normal MDX files in the project */}
			<MDXProvider components={{ ...CMS_COMPONENTS, ...CMS_SHORTCODES }}>
				{children}
			</MDXProvider>
		</article>
	);
}

function DefaultPage({ pageContext, ...props }) {
	console.log('Page context', safelyGetFrontMatter(pageContext));

	return (
		<DefaultPageTemplate
			{...safelyGetFrontMatter(pageContext)}
			{...props}
			isPreview={false}
		/>
	);
}

export { DefaultPage, DefaultPageTemplate };
