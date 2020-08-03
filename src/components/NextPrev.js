import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export const NextPrev = ({ nextUrl, prevUrl, next, prev }) => {
  const style = {
    display: `flex`,
    justifyContent: `space-between`,
  };
  const linkStyle = {
    padding: `12px`,
    textDecoration: `none`,
  };

  return (
    <div style={style}>
      <Link to={prevUrl} style={linkStyle}>
        <small>
          <strong>Previous:</strong>
        </small>
        <br />
        {prev}
      </Link>
      <Link to={nextUrl} style={linkStyle}>
        <small>
          <strong>Next:</strong>
        </small>
        <br />
        {next}
      </Link>
    </div>
  );
};

NextPrev.propTypes = {
  url: PropTypes.string.isRequired,
};
