import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';

// Global application wrapper
function AppLayout({ children, pageContext }) {
	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={(data) => {
				return (
					<>
						<Header siteTitle={data.site.siteMetadata.title} />
						<Menu />
						<main className="AppLayout-main">{children}</main>
						<Footer />
					</>
				);
			}}
		/>
	);
}

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppLayout;
