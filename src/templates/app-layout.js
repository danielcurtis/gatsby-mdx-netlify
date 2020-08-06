import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/header';
import Menu from '../components/menu';

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
				const footerStyle = {
					background: '#4B5566',
					color: 'white',
					textAlign: 'center',
					padding: '30px 55px',
				};

				return (
					<>
						<Header siteTitle={data.site.siteMetadata.title} />
						<Menu />
						<div>
							<main className="Main-content">{children}</main>
							<footer style={footerStyle}>
								© {new Date().getFullYear()}. Built with{' '}
								<a style={{ color: 'white' }} href="https://www.gatsbyjs.org">
									Gatsby
								</a>{' '}
								by{' '}
								<a
									style={{ color: 'white' }}
									href="https://www.curtiscodes.com">
									Daniel Curtis
								</a>
								.
							</footer>
						</div>
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
