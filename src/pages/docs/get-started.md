---
title: Get Started
description: Getting started with this starter
---

## Installation

Ensure you have NodeJS and the Gatsby CLI installed. If you don't read [these instructions](https://www.gatsbyjs.org/tutorial/part-zero/).

**Create the project**

```
gatsby new gatsby-starter-netlify-docs https://github.com/danielcurtis/gatsby-starter-netlify-docs
```

**Start the project**

```
cd gatsby-starter-netlify-docs
```

```
npm install
```

_You may see some security warnings on this step. Those are being worked on._

```
gatsby develop
```

The starter will start up at [localhost:8000](http://localhost:8000)

**Netlify CMS**

1. After cloning the project, create a repo on GitHub. Don't push it yet!
2. Change the repo listed in **static/admin/config.yml** to your newly created repo.
3. Commit and push your changes. _Note, the default branch is set to main in the config._

After committing, you can start the project up again with `gatsby develop` and you should get an output from the CLI for the URL to visit the CMS UI.

<NextPrev next="Hello World" nextUrl="/docs/hello-world" />
