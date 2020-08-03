import React from "react";

export const Heading = ({ tag, children }) => {
  const Htag = `h${tag}`;
  return <Htag>{children}</Htag>;
};

export default Heading;
