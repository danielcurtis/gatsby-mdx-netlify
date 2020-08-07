---
title: 3. Using Gatsby
description: How to use Gatsby in this starter
---

[Gatsby](https://www.gatsbyjs.org/) is a open source framework based on React for static sites. Gatsby bootstraps the process for creating a content-heavy site like documentation!

## Getting Started Locally

1. [Set up your dev environment](https://www.gatsbyjs.org/tutorial/part-zero/).
2. TLDR step 1: `npm install -g gatsby-cli`
3. Install the starter: `gatsby new gatsby-netlifycms-docs-starter https://github.com/gatsbyjs/gatsby-netlifycms-docs-starter`
4. Switch into the new directory: `cd gatsby-netlifycms-docs-starter`
5. Run the local dev server: `gatsby build`

## Code Configuration:

- **/static/admin** holds the Netlify CMS configuration
- **/src/** holds all the development code
- **/src/cms** holds all of the CMS components
- **/src/components** holds all of custom React components
- **/src/core** holds core functions: markdown rendering, error handling, React context
- **/src/images** holds the favicon
- **/src/pages** holds all of markdown content
  - **/src/pages/docs** holds Documentation markdown pages (CMS can CRUD)
  - **/src/pages/tutorial** holds Tutorial markdown pages (CMS can CRUD)
  - **/src/pages/404.js** is a custom 404 page
  - **/src/pages/about.mdx** is a custom MDX page (CMS cannot CRUD)
  - **/src/pages/config.md** is where the menu links are defined
  - **/src/pages/index.md** is the custom home page
- **/src/templates** holds all of templates for the different page types

### Styling

I tried to make the styling as minimalistic as possible. There are currently three `.css` files which define **all** of the styling for the app in about **500 lines**. There is not any inline CSS or CSS in JS.

The three files are:

1. **/src/app.css** global styles (~400 lines)
2. **/src/components/component.css** component styles (~100 lines)
3. **/src/templates/template.css** template styles (~20 lines)

### Major Dependancies

**Dark Mode**

Uses [gatsby-plugin-dark-mode](https://www.gatsbyjs.org/packages/gatsby-plugin-dark-mode/) and a handful of CSS variables in **app.css**.

**Google Analytics**

Uses [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/). Plugin your tracking code in **gatsby-config.js**.

**MDX Embed**

Uses [gatsby-mdx-embed](https://www.gatsbyjs.org/packages/@pauliescanlon/gatsby-mdx-embed/).

**Netlify CMS**

Uses [Netlify CMS](https://netlifycms.org). Plugin your repo in **/static/admin/config.yml**

**React Icons**

Uses [React Icons](https://react-icons.github.io/react-icons/).

<NextPrev prev="2. Introduction to MDX" prevUrl="/tutorial/2-using-netlify-cms" />
