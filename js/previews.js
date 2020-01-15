$( function() {
    // createIframe();
    var w = $( 'body > .container' ).width() - 60;
 
    $( '.buttons a' ).on( 'click', function( e ) {
        var t = $( this ),
            h = t.attr( 'href' );

        $( '.buttons a' ).removeClass( 'active' );
        t.addClass( 'active' );

        $( '#iframe-target' ).animate( {
            width: w,
        } );        
        return false;
    } );

    $( 'a[href^="#"]' ).on( 'click', function( e ) {
        e.preventDefault();

        $( 'html, body' ).animate( {
            'scrollTop': $( '#iframe-target' ).offset().top - 50
        }, 500 ); 
        
        $( '#iframe-target' ).animate( {
            height: 610,
        } );
    } );

    var counts = [ 412, 576, 768, 992, 1200, 1440 ],
        goal = w,
        closest = counts.reduce( function( prev, curr ) {
    	    return ( Math.abs( curr - goal ) < Math.abs( prev - goal ) ? curr : prev );
        } );

    $( 'a[href="'+closest+'px"]' ).click();    
} );

var template = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"><div class="container"><a class="navbar-brand" href="#">Start Bootstrap</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ml-auto"><li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="#">About</a></li><li class="nav-item"><a class="nav-link" href="#">Services</a></li><li class="nav-item"><a class="nav-link" href="#">Contact</a></li></ul></div></div></nav><div class="container"><div class="row"><div class="col-lg-12 text-center"><h1 class="mt-5">A Bootstrap 4 Template</h1><p class="lead">Complete with pre-defined file paths and responsive navigation!</p><ul class="list-unstyled"><li>Bootstrap 4.0.0</li><li>jQuery 3.2.1</li></ul></div></div></div>';

function loadHtml( target, css, js ) {
    if ( target.charAt( 0 ) !== '.' && target.charAt( 0 ) !== '#' ) {
        // not a class or an ID, try a variable!
        createIframe( window[ target ], css, js );
    } else {
        createIframe( $( target )[ 0 ].outerHTML, css, js );
    }
}

function createIframe( body, css, js ) {
    var headOpen = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" crossorigin="anonymous"><link href="../css/preview-iframe.css" rel="stylesheet"><style>body{padding: 1rem;padding-top:2rem;}</style>',
        css = css ? '<link href="'+css+'" rel="stylesheet" />' : '',
        headClose = '</head>',
        bodyOpen = '<body><div class="ruler"><label>0</label><label>100</label><label>200</label><label>300</label><label>400</label><label>500</label><label>600</label><label>700</label><label>800</label><label>900</label><label>1000</label><label>1100</label><label>1200</label><label>1300</label><label>1400</label><label>1500</label><label>1600</label><label>1700</label><label>1800</label><label>1900</label><label>2000</label></div>',
        foot = '<scr' + 'ipt src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></scr' + 'ipt><scr' + 'ipt src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" crossorigin="anonymous"></scr' + 'ipt><scr' + 'ipt src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" crossorigin="anonymous"></scr' + 'ipt>',
        js = js ? '<scr' + 'ipt src="'+js+'"></scr' + 'ipt>' : '',
        bodyClose = '</body></html>',
        iframe = document.getElementById( 'iframe-target' );
    if ( iframe ) {
        iframe.contentWindow.document.clear();
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write( headOpen + css + headClose + bodyOpen + body + foot + js + bodyClose );
        iframe.contentWindow.document.close();
    }
}