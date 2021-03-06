---
title: Install and Use
type: project
---

## About

I'm assuming you have Jekyll installed already. If not, [look here.](https://jekyllrb.com/docs/installation/)
 
There's some notes on the Jekyll site 
[about running it on Windows](https://jekyllrb.com/docs/windows/).
[running it on MacOS](https://jekyllrb.com/docs/installation/macos/)

Adding Ruby to PATH: export PATH="/home/YOUR_INFO/.gem/ruby/2.6.0/bin:$PATH".

## Features

* A 2-column portfolio and blog theme, with support for project documentation
* Easy to install, with minimal dependencies (but not yet packaged as a theme gem)
* Easy to configure, with minimal options - albeit not that flexible
* Compatible with GitHub pages
* Responsive layout - the sidebar jumps to either top or bottom, depending on content relevance
* Context-sensitive sidebar content - configurable if you want to change the layout, but it starts with sensible defaults
* Boostrap 4 Beta CSS with no packaged SCSS or customisations and minimal additional theme CSS
* Roll your own Bootstrap 4 to change the look and feel
* Entypo SVG icons included
* Pygments syntax higlighting using the Monokai syntax theme
* Support for tags, with a little bit of JS to make the tag display more useful. Ditto skills on the portfolio
* Data files to make it easy to change the nav and profile links
* A collection to list your projects, with a documentation-like layout for each project
* Permalinks using a base url throughout, so the site can run under a folder to share a docroot with your other projects
* Permalinks using .html extensions thoughtout for portability to environments that might not provide default directory indexes

## Download and Install

1. Create a directory for your new site.
2. Download this repo into it from [GitHub](https://github.com/peterbenoit/code).
3. cd to your directory and run `jekyll serve`, or `jekyll serve --livereload`
4. Open the resulting site (probably `http://localhost:4000`) in your browser to check it works

If it does, you can begin customizing it.

Make sure NPM is up-to-date: npm install -g npm

Unable to load the EventMachine C extension; To use the pure-ruby reactor, require 'em/pure_ruby'
gem uninstall eventmachine
gem install eventmachine --platform ruby
gem install jekyll-assets

## Configuration

Open `_config.yml` and change the `title` and `name` fields to your settings. Copy your own avatar image to `/theme/img/avatar.jpg` - it helps if this image is square.

Set a `baseurl` if needed. This lets you run your site under a folder like `/site` if need be.

## Tweak the Data Files

There's two data files that help create elements of the web site.

1. `_data/nav.yml` - use this to build a list of links that will be in the top nav bar. The defaults expose all elements of the theme. If you delete eg the about page, don't forget to edit this file. The Jekyll build will not warn you, because this file cannot use the `{% raw %}{%- link -%}{% endraw %}` tag.

2. `_data/profile.yml` - this contains a list of links that will be in the left-hand profile bar. Typical usage would be to add your social media and other portfolio links.

## Writing Content

1. `_pages/index.md` - this is the default home page.
2. `_includes/components/intro.md` - this chunk is reused between the top of the homepage and the top of the about page.
3. `_pages/about.md` reuses the intro and adds a bit more content about yourself.
4. `_posts` is the default Jekyll collection of blog posts. Each post has a list of tags. These lists are combined into a tag cloud on the post list page.
5. `_portfolio` is a collection of portfolio work. Each file within it is a single piece of work. Use filenames to keep the work in order - this can be date-based like a `_post` entry, or here I have used 000, 010, 020, etc. Each file has a list of skills, which are combined like the tags into a cloud on the portfolio list page.
6. `_projects` is a directory of project pages. These are not organised into a collection. Each page can hold a description or documentation about a hobby or open-source project.

## Changing the Style

This theme does not use its own SCSS or CSS apart from a few layout tweaks in `theme/css/site.css`. You can modify the appearance by rolling your own Bootstrap theme, or download an existing theme. The HTML is crafted for Boostrap 4 Beta - themes built for 4 Alpha will not work! When you have got a new Bootstrap CSS file, replace the one in `theme/css/bootstrap.css` with your new build.

This theme also bundles `syntax.css` for the pygments highlighting. It is the monokai theme. You can get other syntax.css files from various places. [Here](http://jwarby.github.io/jekyll-pygments-themes/languages/javascript.html) is quite a good one, with previews of a few languages.

## Changing the Theme

This is Jekyll so you are able into the HTML and make this theme do what you need. The `list` directory contains the three files responsible for listing posts, projects and portfolio files, and also managing the files. Quite a few chunks of HTML are tidied off into `_layouts/components`. Otherwise everything else should be standard Jekyll.

## HTML Content

Jekyll lets you mix HTML into Markdown in the content, so it is possible to utilise Bootstrap 4's components. The [blog posts]({{ site.baseurl }}{%- link list/posts.html -%}) have some examples.



