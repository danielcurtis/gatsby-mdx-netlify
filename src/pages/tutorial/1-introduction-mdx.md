---
title: 1. Introduction to MDX
description: A page full of the built-in MDX components
---

Using [gatsby-mdx-embed](https://gatsby-mdx-embed.netlify.app/), you can embed pretty
much everything out of the box. I cover some examples below, but check out the
[docs](https://gatsby-mdx-embed.netlify.app/) for more.

You can also create custom React components to embed in MDX. Currently, there are **2**
components: **`<NextPrev />`** and **`<Repl />`** for next and previous buttons and
repl.it code snippets. There is also syntax highlighting for code directly in your MDX.

## Next and Previous Buttons

Create next and previous buttons at the bottom of the page. I've found too many edge cases
where the next page isn't always the next oldest or some other measure to make it work
programmatically, like Gatsby's blog does. So instead I pass in the title and URL as props.

**Syntax:**

```js
// Only prev button
<NextPrev prev="Page 1" prevUrl="/page/1" />
// Both prev and next buttons
<NextPrev prev="Page 1" prevUrl="/page/1" next="Page 3" nextUrl="/page/3" />
```

Only pass in one set of props if you do not have a next or previous page, as shown above in the first example.

**Example:**

<NextPrev prev="Page 1" prevUrl="/tutorial/1-introduction-mdx" />

## Repl.it

The power of MDX is the ability to create custom React components. For example, I created
a Repl.it embed component in **`/src/components/repl.js`**. The component is then included in
**`/src/cms/cms-components.js`** so it's possible to use it in your local IDE and Netlify CMS.

**Syntax:**

```js
<Repl
	url="https://repl.it/@curtiscodes/MatureScratchyDriverwrapper"
	height="600"
/>
```

**Example:**

<Repl url="https://repl.it/@curtiscodes/MatureScratchyDriverwrapper" height="600" />

## Local Code

Prism is used to provide syntax highlighting for code directly in the MDX.

**JavaScript:**

```js
const str = 'This is some JavaScript';

function logStr(str) {
	console.log(str);
}
```

**Command Line:**

## Tweet

**Syntax:**

`<Tweet tweetLink="codescurtis/status/1283206486697676800?s=20" align="center" />`

**Example:**

<Tweet tweetLink="codescurtis/status/1283206486697676800?s=20" align="center" />

## CodePen

**Syntax:**

`<CodePen codePenId="PNaGbb" tabs={['js', 'result']} />`

**Example:**

<CodePen codePenId="BajwOBO" tabs={['js', 'result']} />

## YouTube

**Syntax:**

`<YouTube youTubeId="OXRVnZNmT-k" />`

**Example:**

<YouTube youTubeId="OXRVnZNmT-k" />

## SoundCloud

**Syntax:**

`<SoundCloud soundCloudLink="tracks/499997862" />`

**Example:**

<SoundCloud soundCloudLink="tracks/499997862" />

For more embeds, check the [gatsby-mdx-embed docs](https://gatsby-mdx-embed.netlify.app/) or create
one similar to the Repl.it example!

<NextPrev next="2. Using Netlify CMS" nextUrl="/tutorial/2-using-netlify-cms" />
