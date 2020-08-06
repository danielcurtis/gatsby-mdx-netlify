import React, { useContext } from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { safelyGetSiteConfig } from '../cms/cms-utils';

import { MenuContext } from '../core/menu-context';

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
	const { menu } = useContext(MenuContext);

	return (
		<StaticQuery
			query={query}
			render={(data) => {
				const menuArr = safelyGetSiteConfig(data.sitePage).menu_nav || [];
				const style = {
					textDecoration: 'none',
					paddingLeft: '12px',
					color: '#272727',
				};
				const activeStyle = {
					color: '#0554f2',
				};

				return (
					<div className={menu ? 'Menu' : 'Menu-hide'}>
						<ul>
							{menuArr.map((item, i) => (
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
