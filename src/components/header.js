import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FiGithub, FiMenu } from "react-icons/fi";

export const Header = ({ siteTitle }) => {
  const brandStyle = {
    textDecoration: `none`,
    fontWeight: `bold`,
    fontSize: `24px`,
    color: ``, // 36B47B
    padding: 0,
    margin: 0,
  };
  const headerStyle = {
    margin: `0 auto`,
    padding: `16px 20px`,
    display: `flex`,
    alignContent: `center`,
    justifyContent: `space-between`,
  };
  const inputStyle = {
    marginLeft: `22px`,
    padding: `4px 8px`,
    fontSize: `14px`,
    border: `1px solid lightgrey`,
    borderRadius: `4px`,
  };

  return (
    <header
      style={{
        borderBottom: `1px solid lightgrey`,
        position: `fixed`,
        top: 0,
        width: `100%`,
      }}
    >
      <div style={headerStyle}>
        <div>
          <Link to="/" style={brandStyle}>
            {siteTitle}
          </Link>
          <input style={inputStyle} placeholder="Search" />
        </div>
        <div style={{ display: `flex`, alignItems: `center` }}>
          <span style={{ marginBottom: `6px` }}>v1.0</span>
          <a
            href="https://github.com/danielcurtis/gatsby-mdx-netlify"
            style={{ marginLeft: `12px` }}
          >
            <FiGithub />
          </a>
          <FiMenu style={{ marginLeft: `12px` }} className="Main-menu-btn" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
