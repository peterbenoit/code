---
permalink: datatables/phil.html
description: PHIL Images in a standard Row/Column Card layout
title: Public Health Image Library
image: PHIL.jpg
---

<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>PHIL - Datatables v2</title>
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<link href='https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css' rel='stylesheet'>
	<link href='https://cdn.datatables.net/v/bs4-4.1.1/dt-1.10.20/datatables.min.css' rel='stylesheet'>
	<style>
	 table {
	 display: none;
	}

	.btn i {
	 font-size: 2rem;
	 position: relative;
	 top: 10px;
	 line-height: 0;
	}

	.card-img-top {
	 max-height: 400px;
	}

	.card-subtitle {
	 color: #bdbdbd;
	 font-size: .875rem;
	}

	.card-body {
	 color: #000;
	}

	.card:hover {
	 text-decoration: none;
	}

	.dataTables_wrapper .dataTables_paginate .paginate_button {
	 padding: 0;
	}
	.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
	 border: 1px solid #dee2e6;
	 background: transparent;
	}

	@media (max-width: 991.98px) {
	 .modal {
	   padding: 0 !important;
	 }

	 .modal-lg {
	   max-width: 100%;
	   margin: 0;
	 }

	 .modal-body {
	   padding: .5rem;
	 }
	}
	@media (max-width: 991.98px) {
	 .modal {
	   padding: 0 !important;
	 }

	 .modal-lg {
	   max-width: 100%;
	   margin: 0;
	 }

	 .modal-body {
	   padding: 1rem;
	 }
	}
	@media (min-width: 992px) {
	 .modal-xlg {
	   max-width: 1000px;
	 }
	}
	@media (max-width: 767.98px) {
	 .modal-body {
	   padding: .5rem;
	 }
	}
	</style>
</head>
<body translate="no">
    {%- include breadcrumbs.html -%}
	<div class="container mt-5 mb-5">
		<h3>PHIL using DataTables.js Row/Column layout</h3> <a class="btn btn-outline-primary" href="#" id="card"><i class="material-icons">view_module</i> Card</a> <a class="btn btn-outline-secondary" href="#" id="details"><i class="material-icons">view_stream</i> Details</a>
		<table id="results"></table>
	</div>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script> 
	<script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js'></script> 
	<script src='https://cdn.datatables.net/v/bs4-4.1.1/dt-1.10.20/datatables.min.js'></script> 
	<script>
        $( '#card' ).on( 'click', function() {
        sessionStorage.viewType = 'card';
        init();
        } );

        $( '#details' ).on( 'click', function() {
        sessionStorage.viewType = 'details';
        init();
        } );
  

        function init() {
        if ( $.fn.DataTable.isDataTable( '#results' ) ) {
            $( '#results' ).DataTable().clear().destroy();
        }
        
        sessionStorage.viewType = sessionStorage.viewType || 'card';
        
        if( sessionStorage.viewType === 'card' ) {
            $( '#card' ).removeClass( 'btn-outline-secondary' ).addClass( 'btn-outline-primary' );
            $( '#details' ).removeClass( 'btn-outline-primary' ).addClass( 'btn-outline-secondary' );
        } else {
            $( '#card' ).removeClass( 'btn-outline-primary' ).addClass( 'btn-outline-secondary' );
            $( '#details' ).removeClass( 'btn-outline-secondary' ).addClass( 'btn-outline-primary' );
        }

        var url = 'https://raw.githubusercontent.com/peterbenoit/cdn/master/data/datatables/phil/media.json';
        
            $( '#results' )
            .on( 'preInit.dt', function() {
                console.log( 'preInit' );

                // append the output div
                $( this ).after( '<div id="out"></div>' );
            } ).DataTable( {
            ajax: {
                url: url,
                dataSrc: 'results'
            },
            columns: [ {
                data: 'name',
                defaultContent: 'missing'
            },
            {
                data: 'description',
                defaultContent: 'missing'
            } ],
            pageLength: 9,
            stateSave: true,
            lengthChange: false,
            rowCallback: function( row, data, index ) {
                console.log( 'rowCallback', data );
                
                if( sessionStorage.viewType === 'card' ) {
                    drawCard( data );
                } else {
                    drawDetails( data );
                }
            },
            preDrawCallback: function( settings ) {
                console.log( 'preDrawCallback' );

                // empty the output (if it exists) prior to redrawing
                $( '#out' ).empty();
            },
            drawCallback: function( settings ) {
                
                if( sessionStorage.viewType === 'card' ) {
                    // after the rows (columns) have been generated, wrap them into rows as needed
                    var divs = $( '#out > .col-lg-4' );
                    for ( var i = 0; i < divs.length; i += 3 ) {
                        divs.slice( i, i + 3 ).wrapAll( '<div class="row mb-3"></div>' );
                    }           
                } else {
                    $( '#out > .col' ).wrap( '<div class="row"></div>' );
                }

                console.log( 'drawCallback' );
            },
            initComplete: function( settings ) { 
                finalize();
                // this is the only way I could reliably maintain scroll position in Win Chrome
                $( 'html,body' ).animate({ scrollTop: sessionStorage.scrollPos || 0 }, 100 );
            }
        } );    
        }

        function drawCard( data ) {
        var openrow = '<div class="row">',
            opencard = '<div class="col-lg-4 mb-2"><a href="'+data['targetUrl']+'" id="'+data['id']+'" target="_blank" class="card h-100" style="border: 1px solid rgba(0,0,0,.125)">',
            cardbody = '<div class="card-body">',
            cardimg = '<img class="card-img-top" src="'+ data.enclosures[0].resourceUrl+'" alt="">',
            carddate = '<div class="card-subtitle">'+ moment( data.datePublished ).format('LL') +'</div>',
            close = '</div>',
            closecard = '</a></div></div>',
            description = '',
            output = '';

        if( 'undefined' === typeof data['description'] ) {
            description = '<span class="mark mark-yellow">NO DESCRIPTION PROVIDED</span>';
        } else {
            description = data['description'].toString().replace( /<[^>]*>?/gm, '' ).trim();
        }

        // output += '<div class="card-title h4">' + data['name'].toString().trim() + '</div>';
        output += '<div class="card-title h4">ID: ' + data['id'] + '</div>';
        output += carddate
        // output += '<div class="url">' + data['targetUrl'].toString().trim() + '</div>';

        if( description.length > 150 ) {
            output += '<p>' + description.substr( 0,150 ) + '&hellip;' + '</p>';
        } else {
            output += '<p>' + description + '</p>'; 
        }

        $( '#out' ).append( opencard + cardimg + cardbody + output + close + closecard );
        }

        function drawDetails( data ) {
        var openrow = '<div class="row">',
            opencard = '<div class="col mb-2"><a href="'+data['targetUrl']+'" class="card h-100" style="border: 1px solid rgba(0,0,0,.125)">',
            cardbody = '<div class="card-body"><div class="row">',
            cardimg = '<div class="col-4"><img class="card-img-left w-100" src="'+ data.enclosures[0].resourceUrl+'" alt=""></div>',
            carddate = '<div class="card-subtitle">'+ moment( data.datePublished ).format('LL') +'</div>',
            closebody = '</div></div>',
            closecard = '</a></div>',
            description = '',
            output = '<div class="col"><div class="card-title h4">' + data['name'].toString().trim() + '</div>';

        if( 'undefined' === typeof data['description'] ) {
            description = '<span class="mark mark-yellow">NO DESCRIPTION PROVIDED</span>';
        } else {
            description = data['description'].toString().replace( /<[^>]*>?/gm, '' ).trim();
        }

        output += carddate

        if( description.length > 500 ) {
            output += '<p>' + description.substr( 0,500 ) + '&hellip;' + '</p>';
        } else {
            output += '<p>' + description + '</p>'; 
        }

        $( '#out' ).append( opencard + cardbody + cardimg + output + '</div>' + closebody + closecard );
        }

        function drawModal( id ) {
        var open = '<div id="preview-modal" class="modal fade" role="dialog"><div class="modal-dialog modal-lg modal-xlg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body">',
            close = '</div><div class="modal-footer"></div></div></div></div>',
            body = '';
        
        $.getJSON( 'https://tools.cdc.gov/api/v2/resources/media/' + id + '.json', function( data ) {
            var r = data.results[0];
            
            console.log( r );

            body += '<img src="' + r.enclosures[0].resourceUrl + '" class="w-100 mb-3" />';
            body += '<h4>ID: ' + r.id + '</h4>';
            body += '<p>' + r.description + '</p>';
            body += '<p><a href="https://phil.cdc.gov/PHIL_Images/'+id+'/'+id+'.tif">Download High Resolution Image</a></p>';

                // output += ;
            $( 'body' ).append( open + body + close );
            
            $( '#preview-modal' ).modal( 'show' ).on( 'hidden.bs.modal', function ( e ) {
                $( this ).remove();
            } );        
        } );
        }

        function finalize() {
        $( 'a.card' ).on( 'click', function( e ) {
            e.preventDefault();
            
            drawModal( this.id );
        } )
        }

        $( function( e ) {
            init();
        } );

        $( window ).scroll( function() {
            sessionStorage.scrollPos = $( window ).scrollTop();
        } );

        // we update the querystring on events which keeps our event state in history, but doesn't allow refresh on back/forward button nav
        // this captures that navigation and redirects 
        window.onpopstate = function(event) {
            //console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
            top.location.href = document.location;
        };        
	</script>
</body>
</html>