import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { safelyGetSiteConfig } from '../cms/cms-utils';

export const query = graphql`
	query {
		sitePage(path: { eq: "/config/" }) {
			context {
				frontmatter {
					menu_nav {
						text
						url
					}
				}
			}
		}
	}
`;

function Menu() {
	return (
		<StaticQuery
			query={query}
			render={(data) => {
				const menu = safelyGetSiteConfig(data.sitePage).menu_nav || [];
				const style = {
					textDecoration: 'none',
					paddingLeft: '12px',
					color: '#272727',
				};
				const activeStyle = {
					color: '#0554f2',
				};

				return (
					<div className="Main-menu">
						<ul>
							{menu.map((item, i) => (
								<li key={i}>
									{item.url ? (
										<Link to={item.url} style={style} activeStyle={activeStyle}>
											{item.text}
										</Link>
									) : (
										item.text
									)}
								</li>
							))}
						</ul>
					</div>
				);
			}}
		/>
	);
}

export default Menu;
