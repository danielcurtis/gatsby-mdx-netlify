---
title: 2. Using Netlify CMS
description: How to use Netlify CMS
---

[Netlify CMS](https://www.netlifycms.org/) is an open source CMS. Every time you create or edit a page on the CMS, it makes a commit to your repo!

It allows you to view pages in markdown or how they would look on the website live while editing them in markdown or a WYSIWYG editor.

## Getting Started Locally

1. Update the config file at **/src/static/admin/config.yml** to have your repo.
2. Start the project locally, `gatsby develop`
3. You'll see what port the project is live on after gatsby builds
4. Visit the url, something like localhost:5082/admin, and authenticate with Netlify
5. You should see the pages that exist on this site in the **/src/pages/docs** and **/src/pages/tutorial** directories.
6. Notice there are templates, you can use the homepage template if you like, but I mainly left that there for an example.
7. Create or edit a page, and save it
8. Pull the latest changes from your main branch and start gatsby again
9. You should see the changes!

## Changes in Production

1. You'll be able to visit Netlify CMS at https://yourURL/admin. Any changes you make will be pushed to GitHub!

## Code Configuration

The **/src/cms** folder houses the code for Netlify CMS in this project. There are preview templates and editor components which I do not really use, but have for examples. These were created from the [original project](https://github.com/renvrant/gatsby-mdx-netlify-cms-starter), which has more information about them.

- The **/src/cms/cms.js** file imports the CMS and calls the preview templates and editor components.
- The **/src/cms/cms-components.js** file is used to make local React components available.
- The **/src/cms/cms-util.js** file is used for markdown/frontmatter parsing utility functions.

<NextPrev prev="1. Introduction to MDX" prevUrl="/tutorial/1-introduction-mdx" next="3. Using Gatsby" nextUrl="/tutorial/3-using-gatsby" />
