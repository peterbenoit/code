---
title: Reading Mode
tags:
  - Content
  - CSS
type: post
---

<style>
  blockquote {
    color: rgba(0,0,0,.5);
    padding-left: 1.5em;
    border-left: 5px solid rgba(0,0,0,.1);
}
</style>

Before I get too far into this post, I want to make a point that I'm rather interested in at work.

> No one reads your content.

That's right. Your article, publication, journal, my blog posts, no one *reads* any of it.

Reading is an active act of engagement between the reader and your content, and generally speaking, most people just aren't that interested to become that involved.

## If that is the case, what is the point of it all!?

I'm glad you asked.

People skim, scroll and scan. People want what they're looking for without all of the rest of that stuff which is getting in the way of what they're looking for. Think of it like flipping through a magazine. Who reads a magazine from front to back? No one, that's who!

## Okay, okay. I kind of see your point. What do I do?

Keep writing!

Write with your audience in mind. Be creative, but not *too* creative. Explain thoroughly but succinctly. Try to understand what they want and discover what is the best way to give it to them. Have an effective content strategy, and use it consistently. 

## Alright, fine. But what does this have to do with Reader Mode?

In many ways, websites today (2020) are much worse than they were back in the early 2000's. It is difficult to immediately find what you are looking for, even if the result comes from a Google search. Instead, you're often treated to content structured something like this:

- Teaser
- Ad
- Backstory
- Ad
- Ad
- Related Info
- Ad
- Ad
- Some content 
- What you're looking for
- Ad
- Related Pages
- Ad

Reader Mode attempts to alleviate some of this page pollution and reduce the noise on your page to simply the content. It'll look more like this:

- Teaser
- Backstory
- Related Info
- Some content 
- What you're looking for
- Related Pages

It does more than remove the advertisements from your content, rather reader mode will also remove other page components in order to promote the content as much as possible without other distractions on your page. And there are plenty. Reader Mode also will format the content that remains with a light background and large serif font. Think of an e-reader, like as a Kindle. Like that.

Safari and Firefox have made some attempts to provide a Reader Mode, but those can only take you so far, for any number of reasons. To offset these potential shortcomings, I created a demo of using reader mode on CDC pages. This allows greater customizations and flexibility, and the additional benefit of providing a basis for printing from.

You can try it out by adding this <dfn title="A bookmarklet is a bookmark or favorite with some Javascript">bookmarklet</dfn> to your browser <a class="bookmarklet" href="javascript:(function()%7Bfunction%20callback()%7Bconsole.log('running...')%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fcodepen.io%2Fpeterbenoit%2Fpen%2FbGNOEYK.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()">Reader Mode</a>, visiting a page on <a href="https://www.cdc.gov/injury/features/older-driver-safety/index.html">CDC.gov</a> and clicking on the bookmark.

For those interested in the inner workings, I've provided the Codepen pen.

<p class="codepen" data-height="300" data-theme-id="22720" data-default-tab="css,result" data-user="peterbenoit" data-slug-hash="bGNOEYK" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="reader mode">
  <span>See the Pen <a href="https://codepen.io/peterbenoit/pen/bGNOEYK">
  reader mode</a> by Pete (<a href="https://codepen.io/peterbenoit">@peterbenoit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
