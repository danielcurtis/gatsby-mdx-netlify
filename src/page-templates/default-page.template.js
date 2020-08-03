import React from "react";
import { MDXProvider } from "@mdx-js/react";

import {
  safelyGetFrontMatter,
  withFallback,
  CMS_COMPONENTS,
  CMS_SHORTCODES,
} from "../cms";
import { SEO, Heading } from "../components";
import { RenderMarkdown } from "../core";

export const DefaultPageTemplate = ({ title, body, children }) => {
  return (
    <article style={{ marginTop: `70px` }}>
      <SEO title={withFallback(title, "")} />
      <Heading tag={1}>{title}</Heading>
      {/* If children should be used instead of body, body will be empty, so it's safe to have both */}
      <RenderMarkdown md={body} />
      {/* Include children to support any normal MDX files in the project */}
      <MDXProvider components={{ ...CMS_COMPONENTS, ...CMS_SHORTCODES }}>
        {children}
      </MDXProvider>
    </article>
  );
};

const DefaultPage = ({ pageContext, ...props }) => {
  console.log("Page context", safelyGetFrontMatter(pageContext));
  // console.log("Props", props);

  return (
    <DefaultPageTemplate
      {...safelyGetFrontMatter(pageContext)}
      {...props}
      isPreview={false}
    />
  );
};

export default DefaultPage;
