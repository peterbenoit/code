---
title: jQuery CSS !important
tags:
  - Javascript
  - jQuery
  - CSS
type: post
---

You cannot add an <code>!important</code> declaration to your CSS using jQuery's <code>.css</code> method, but you can add it using <code>.attr</code> with <code>style</code> like so. This method keeps the original style declarations.

{%- highlight javascript -%}

function setMyCSS( element, setting, value ) {
    $( element ).attr( 'style', function( i, s ) { return ( s || '' ) + setting + ':' + value + '!important;' } );
}

setMyCSS( 'body', 'background-color', 'red' );


{%- endhighlight -%}