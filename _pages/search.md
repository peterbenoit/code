---
layout: defaults/page
permalink: search.html
narrow: true
description: 
title: 
type: home
---

<div id="search-container">
    <input type="text" id="search-input" placeholder="search...">
    <div id="results-container"></div>
</div>

<script src="https://unpkg.com/simple-jekyll-search/dest/simple-jekyll-search.min.js"></script>

<script>
    //https://github.com/christian-fei/Simple-Jekyll-Search/wiki#options
    SimpleJekyllSearch( {
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        // searchResultTemplate: '<div><a href="{{ site.url }}{url}"><h3>{title}</h3></a><div>{{ site.url }}{url}{desc}</div><p></p></div>',
        json: 'search.json'
    } );

    document.getElementById('search-input').addEventListener( 'input', function() {
        if ( 'undefined' !== typeof( Storage ) ) {
            localStorage.setItem( 'searchval' , this.value );
        }
    } );
    
    if( window.performance.navigation.type === 2 ) {
        if ( 'undefined' !== typeof( Storage ) ) {
            if ( null !== localStorage.getItem( 'searchval' ) ) {
                document.getElementById('search-input').value = localStorage.getItem( 'searchval' );

                window.setTimeout( function() { 
                    triggerEvent( document.getElementById('search-input'), 'keyup' )
                }, 100 );
            }
        }
    }

    function triggerEvent( el, type ) {
        if ('createEvent' in document) {
            // modern browsers, IE9+
            var e = document.createEvent( 'HTMLEvents' );
            e.initEvent( type, false, true );
            el.dispatchEvent( e );
        } else {
            // IE 8
            var e = document.createEventObject();
            e.eventType = type;
            el.fireEvent( 'on' + e.eventType, e );
        }
    }    

    </script>