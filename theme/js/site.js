
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