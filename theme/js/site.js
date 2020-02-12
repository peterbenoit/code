---
---

function parseHash () {
    if ( document.location.hash.length > 0 ) {
        var tag = document.location.hash.slice( 1 )
        var name = $( ".tag-" + tag ).first().text()
        showPostByTag( tag, name )
    } else {
        clearTags()
    }
}

function showPostByTag ( tag, name ) {
    $( "#currently-showing" ).show()
    $( ".card-post" ).hide()
    $( ".tag" ).removeClass( "bg-warning" ).addClass( "bg-white" ).removeClass( "text-dark" )
    $( ".card-post" ).each( function( idx, card ) {
        var matches = $( card ).find( ".tag-" + tag )
        if ( matches.length > 0 ) $( card ).show()
    } )
    $( ".tag-" + tag ).removeClass( "bg-white" ).addClass( "bg-warning" ).addClass( "text-dark" ).blur()
    $( "#active-tag" ).html( name )
}

function clearTags() {
    $( "#currently-showing" ).hide()
    $( ".card-post" ).show()
    $( ".tag" ).removeClass( "bg-warning" ).addClass( "bg-white" ).removeClass( "text-dark" )
    document.location.hash = ""
}

$( function() {
    if( $( "#currently-showing" ).length ) {
        parseHash();
        $( window ).on( "hashchange", parseHash );
    }


    if( 'project' === document.body.getAttribute( 'data-type' ) ) {
        // create the OTP nav
        var tpl = '<li class="nav-item"><a class="nav-link bg-white mb-1" href="#header[idx]">[name]</a></li>';
        $( 'h2' ).each( function( idx, h2 ) {
            $( h2 ).attr( 'id', 'header' + idx )
            var name = $( h2 ).text().trim(),
                dom_string = tpl.replace( '[name]', name ).replace( '[idx]', idx ),
                header = $( dom_string );

            $( '.header-list' ).append( header )
        } );
    }
} );

//https://github.com/christian-fei/Simple-Jekyll-Search/wiki#options
SimpleJekyllSearch( {
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    // searchResultTemplate: '<div><a href="{{ site.url }}{url}"><h3>{title}</h3></a><div>{{ site.url }}{url}{desc}</div><p></p></div>',
    json: '{{ site.baseurl }}/search.json'
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