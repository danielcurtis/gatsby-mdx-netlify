import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import { FiGithub, FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { MenuContext } from '../core/menu-context';

function Header({ siteTitle }) {
	const { menu, toggleMenu } = useContext(MenuContext);

	return (
		<header className="Header">
			<div>
				<Link className="Header-link" to="/">
					{siteTitle}
				</Link>
				<input className="Header-input" placeholder="Search" />
			</div>
			<div className="Header-flex">
				<small>v1.0</small>
				<a
					href="https://github.com/danielcurtis/gatsby-mdx-netlify"
					target="_blank"
					rel="noreferrer"
					className="Header-flex">
					<FiGithub className="Header-icon" />
				</a>
				<ThemeToggler>
					{({ theme, toggleTheme }) => (
						<div className="Header-flex">
							{theme === 'dark' ? (
								<FiSun
									className="Header-icon"
									role="button"
									onClick={() => toggleTheme('light')}
								/>
							) : (
								<FiMoon
									className="Header-icon"
									role="button"
									onClick={() => toggleTheme('dark')}
								/>
							)}
						</div>
					)}
				</ThemeToggler>
				<FiMenu
					className="Header-icon"
					role="button"
					onClick={() => toggleMenu(!menu)}
				/>
			</div>
		</header>
	);
}

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
