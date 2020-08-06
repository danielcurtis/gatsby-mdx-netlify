import React from 'react';

import Heading from '../components/heading';
import SEO from '../components/seo';
import RenderMarkdown from '../core/render-markdown';
import { safelyGetFrontMatter, withFallback } from '../cms/cms-utils';

function HomePageTemplate({ title, sections }) {
	return (
		<article>
			<SEO title={title} />
			<Heading tag={1}>{title}</Heading>
			{withFallback(sections, []).map((section, i) => {
				return (
					<section key={i}>
						<h2>{section.title}</h2>
						<RenderMarkdown md={section.body} />
						<hr />
					</section>
				);
			})}
		</article>
	);
}

function HomePage({ pageContext }) {
	return (
		<HomePageTemplate
			{...safelyGetFrontMatter(pageContext)}
			isPreview={false}
		/>
	);
}

export { HomePage, HomePageTemplate };
