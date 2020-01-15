---
permalink: datatables/niosh.html
description: Data from https://www.cdc.gov/niosh/programs/hwd/resources.html
title: NOISH Resources
---

<html class="theme-blue" lang="en">
<head>
	<meta charset="UTF-8">
	<title>DataTables Sort &amp; Filter - NIOSH data</title>
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<link href='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/css/bootstrap.css' rel='stylesheet'>
	<link href='https://www.cdc.gov/TemplatePackage/4.0/assets/css/app.min.css' rel='stylesheet'>
	<link href='https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css' rel='stylesheet'>
	<link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' rel='stylesheet'>
	<link href='https://cdn.datatables.net/v/bs4-4.1.1/jszip-2.5.0/dt-1.10.20/b-1.6.1/b-colvis-1.6.1/b-html5-1.6.1/b-print-1.6.1/r-2.2.3/datatables.min.css' rel='stylesheet'>
	<style>
	 .btn i {
	 font-size: 2rem;
	 position: relative;
	 top: 10px;
	 line-height: 0;
	}

	.card-img-top, .card-img-left {
	 max-height: 500px;
	}

	a {
	 color: #000;
	}

	.dataTables_filter {
	 display: none;
	}

	.dataTables_wrapper {
	 max-width: 100%;
	 overflow-x: hidden;
	}

	.dataTables_info {
	 font-size: .75rem;
	}

	#results td, #results th {
	 max-width: 100px;
	 overflow: hidden;
	}
	</style>
	<script>
window.addEventListener("hashchange", function(e) {
console.log('hash')
})	
	</script>
</head>
<body translate="no">
	<div class="container d-flex flex-wrap body-wrapper">
		<main aria-label="Main Content Area" class="col-12 order-lg-2" role="main">
			<div class="row">
				<div class="col-md-3 border">"leftnav"</div>
				<div class="col-md-9">
					<h3>DataTables Sort &amp; Filter</h3>
					<p>Data from https://www.cdc.gov/niosh/programs/hwd/resources.html</p><a class="btn btn-outline-primary" href="#" id="datatable"><i class="material-icons">view_headline</i> Datatable</a> <a class="btn btn-outline-secondary" href="#" id="card"><i class="material-icons">view_module</i> Card</a> <a class="btn btn-outline-secondary" href="#" id="details"><i class="material-icons">view_stream</i> Details</a>
					<table class="table table-striped table-bordered fs0875" id="results" width="100%"></table>
				</div>
			</div>
		</main>
	</div>
	<script src='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/jquery.min.js'>
	</script> 
	<script src='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/bootstrap.bundle.min.js'>
	</script> 
	<script src='https://www.cdc.gov/TemplatePackage/4.0/assets/js/app.bundle.min.js'>
	</script> 
	<script src='https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js'>
	</script> 
	<script src='https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js'>
	</script> 
	<script src='https://cdn.datatables.net/v/bs4/jszip-2.5.0/dt-1.10.20/b-1.6.1/b-colvis-1.6.1/b-html5-1.6.1/b-print-1.6.1/r-2.2.3/datatables.min.js'>
	</script> 
	<script id="rendered-js">
	     var filters = {},
	   sort = {},
	   items = {},
	   keys = {},
	   tableId = '#results',
	   dataUrl = 'https://raw.githubusercontent.com/peterbenoit/cdn/master/data/datatables/niosh/sortable-5.json';

	function init() {
	   if ( $.fn.DataTable.isDataTable( tableId ) ) {
	       $( tableId ).DataTable().clear().destroy();
	       $( '#filters' ).remove();
	       $( '#copy').remove();
	   }
	   
	   sessionStorage.viewType = sessionStorage.viewType || 'datatable';
	   
	   if( sessionStorage.viewType === 'card' ) {
	       $( '#card' ).removeClass( 'btn-outline-secondary' ).addClass( 'btn-outline-primary' );
	       $( '#details' ).removeClass( 'btn-outline-primary' ).addClass( 'btn-outline-secondary' );
	       $( '#datatable' ).removeClass( 'btn-outline-primary' ).addClass( 'btn-outline-secondary' );
	   } else if( sessionStorage.viewType === 'details' ) {
	       $( '#card' ).removeClass( 'btn-outline-primary' ).addClass( 'btn-outline-secondary' );
	       $( '#details' ).removeClass( 'btn-outline-secondary' ).addClass( 'btn-outline-primary' );
	       $( '#datatable' ).removeClass( 'btn-outline-primary' ).addClass( 'btn-outline-secondary' );
	   } else {
	       $( '#card' ).removeClass( 'btn-outline-primary' ).addClass( 'btn-outline-secondary' );
	       $( '#details' ).removeClass( 'btn-outline-primary' ).addClass( 'btn-outline-secondary' );
	       $( '#datatable' ).removeClass( 'btn-outline-secondary' ).addClass( 'btn-outline-primary' );
	   }
	   
	   // TODO: should only do this once, on the first load
	   // using getJSON to fetch the search json 
	   $.getJSON( dataUrl, function( result ) {
	       filters = result.filters;
	       sort = result.sort;
	       items = result.items;
	       keys = Object.keys( result.items[0] );
	       

	       setupFilters( filters );
	       setupTable( items, keys );
	       setupSort( sort );
	   } );
	}

	// create the filter area which contains/calls the selects
	function setupFilters( filters ) {

	   // add the filter card before the results table
	   $( tableId )
	       .before( '<div class="card mb-3 mt-3" id="filters"><div class="card-body"></div></div>' )
	       .before( '<div class="text-right"><a href="#" id="copy" title="Link Copied!" data-toggle="tooltip"><i class="fas fa-link"></i></a></div>');
	   
	   // looping over each of the filters
	   $.each( filters, function( name , values ) {
	       createSelect( name, values );
	   } );

	   // get our session storage keys
	   var keys = Object.keys( sessionStorage ),
	       key;

	   // make our selections
	   for (var i = 0; key = keys[i]; i++) {
	       $( 'select[name="'+key+'"]' ).val( decodeURI( sessionStorage.getItem( key ) ) );
	   }

	   // wrap them in rows
	   $( '.custom-select-filter:even' ).each( function() {
	       $( this ).parent().next().addBack().wrapAll( '<div class="row"></div>' );
	   } );
	   
	   // when clicking the copy link
	   $( '#copy' ).on( 'click', function( e ) { 
	       e.preventDefault();
	       
	       copyToClipboard( location.href );
	       $( '#copy' ).tooltip( 'show' );
	       
	       // hide the tooltip
	       setTimeout( function() {
	           $( '[data-toggle="tooltip"]' ).tooltip( 'hide' );
	       }, 1000 );
	   } );
	   
	   // change default bs4 tooltip behavior
	   $( '[data-toggle="tooltip"]' ).tooltip( {
	       trigger: 'click'
	   } )  
	}

	// create the select filters
	function createSelect( name, values ) {
	   var select = $( '<select class="custom-select custom-select-filter" name="'+name.split( ' ' ).join( '' )+'" />' ),
	       options = '';
	   
	   // default select option
	   options += '<option value="" selected>Filter By '+name+'</option>';
	   
	   // loop over all the values and build options
	   $.each( values, function( i, name ){ 
	       options += '<option value="'+name+'">'+name+'</option>';
	   } );
	   
	   // append all the options to the select
	   select.append( options );
	   
	   // wrap each select in a col and append it to the filter card body
	   $( '#filters .card-body' ).append( select.wrap( '<div class="col-md-6 mb-3"></div>' ).parent() );
	}

	// unused atm
	function setupSort( sort ) {
	   return; 
	}

	// create the datatable
	function setupTable( items, keys ) {
	   var cols = [];
	   for( var i = 0; i < keys.length; i++ ) {
	       cols.push( { 'data': keys[i], 'title': keys[i] } );
	   }

	   var tableOptions = {
	       'tablecols': 1,                     // number of BS4 columns
	       'target': tableId,                  // target table (datatables.net requires a table to start with?)
	       'output': '#table_1_output',        // output div
	       'search': { 'regex': true },
	       'data': items,
	       // 'responsive': {
	       //  'breakpoints': [
	       //      {'name': 'xxlarge', 'width': 1440},
	       //      {'name': 'xlarge', 'width': 1200},
	       //      {'name': 'large', 'width': 992},
	       //      {'name': 'medium', 'width': 768},
	       //      {'name': 'small', 'width': 576}
	       //  ]
	       // },
	       // 'responsive': true,
	       'columns': cols,
	       
	       // [ 
	       //  // {    
	       //  //  'data': 'Iconic Image',
	       //  //  'render': function( d ) {
	       //  //      var url = d.indexOf( '/' ) === 0 ? 'https://www.cdc.gov' + d : d;
	       //  //      return '<a href="' + url + '" target="_blank">Image</a>';
	       //  //  }
	       //  // },
	       //  { 'data': 'Title', 'title': 'Title' },
	       //  { 'data': 'Link Descriptor Text', 'title': 'Description' },
	       //  { 'data': 'Public URL', 'title': 'URL' },
	       //  { 'data': 'Meta Keywords', 'title': 'Keywords' },
	       // ],
	       'columnDefs': [ 
	           // {
	           //  'targets': [ 0 ],
	           //  'visible': false
	           // },
	       ],
	       'pageLength': 9,
	       'stateSave': true,
	       'lengthChange': false,      
	       'preInit': function (e, settings) { },
	       'initComplete': function( settings, json ) {
	           var t = this;
	           
	           if( sessionStorage.viewType !== 'datatable' ) {
	               $( this ).hide();
	           } else {
	               $( this ).show();
	           }
	           
	       },
	       'drawCallback': function( settings ) {
	           
	           if( sessionStorage.viewType === 'card' ) {
	               // after the rows (columns) have been generated, wrap them into rows as needed
	               var divs = $( '#out > .col-lg-4' );
	               for ( var i = 0; i < divs.length; i += 3 ) {
	                   divs.slice( i, i + 3 ).wrapAll( '<div class="row mb-3"></div>' );
	               }           
	           } else if( sessionStorage.viewType === 'details' ) {
	               $( '#out > .col' ).wrap( '<div class="row"></div>' );
	           }

	           console.log( 'drawCallback' );
	       },
	       'rowCallback': function( row, data, index ) {
	           if( sessionStorage.viewType === 'card' ) {
	               drawCard( data );
	           } else if( sessionStorage.viewType === 'details' ){
	               drawDetails( data );
	           }
	       },
	       'preDrawCallback': function( settings ) {
	           // clear list before draw
	           $( '#out' ).empty();

	           console.log( 'preDrawCallback' );
	       }
	   };

	   // execute the datatable with the supplied options
	   var table = $( tableOptions.target )
	       .on( 'preInit.dt', function() {
	           console.log( 'preInit' );

	           // append the output div
	           $( this ).after( '<div id="out"></div>' );
	       } ).DataTable( tableOptions ),
	       columns = table.settings().init().columns,
	       colnames = [];
	   
	   // store the column names for use in filtering
	   // table.columns().every( function( index ) {
	   //  // colnames.push( columns[ index ].data.split( ' ' ).join( '' ) );
	   // } );
	   
	   // update the table when making a select filter change
	   $( '.custom-select-filter' ).on( 'change', function() { 
	       var t = $( this );
	           
	       // store the selection for later
	       sessionStorage[ t[0].name ] = t.val();
	       
	       updateUrlParameter( location.href, t[0].name, t.val() );
	       
	       // search the table/column for value
	       // table.column( colnames.indexOf( t[0].name ) ).search( t.val() ).draw();
	       table.column( columns.indexOf( t[0].name ) ).search( t.val() ).draw();
	   } );
	   
	   var search = $( '<input type="search" class="form-control" placeholder="Search" />' );

	   search.on( 'keyup', function() {
	       table.search( this.value ).draw();
	   } );
	       
	   $( '#filters .card-body' ).prepend( search.wrap( '<div class="col-md-6 mb-3"></div>' ).parent().wrap( '<div class="row"></div>').parent() );    
	}

	function drawCard( data ) {
	   var url = data['Public URL'],
	       img = data['Iconic Image'];
	   
	   url = fixBeginningSlash( url );
	   img = fixBeginningSlash( img );

	   var openrow = '<div class="row">',
	       opencard = '<div class="col-lg-4 mb-2"><a href="'+url+'" class="card h-100" style="border: 1px solid rgba(0,0,0,.125)">',
	       cardbody = '<div class="card-body">',
	       cardimg = 'undefined' !== typeof img ? '<img class="card-img-top" src="'+img+'" alt="">' : '',
	       close = '</div>',
	       closecard = '</a></div></div>',
	       description = '',
	       output = '';

	   if( 'undefined' === typeof data['Link Descriptor Text'] ) {
	       description = '<span class="mark mark-yellow">NO DESCRIPTION PROVIDED</span>';
	   } else {
	       description = data['Link Descriptor Text'].toString().replace( /<[^>]*>?/gm, '' ).trim();
	   }

	   output += '<div class="card-title h4">' + data['Title'].toString().trim() + '</div>';

	   if( description.length > 150 ) {
	       output += '<p>' + description.substr( 0,150 ) + '&hellip;' + '</p>';
	   } else {
	       output += '<p>' + description + '</p>'; 
	   }

	   $( '#out' ).append( opencard + cardimg + cardbody + output + close + closecard );
	}

	function drawDetails( data ) {
	   var url = data['Public URL'],
	       img = data['Iconic Image'];
	   
	   url = fixBeginningSlash( url );
	   img = fixBeginningSlash( img );
	   
	   var openrow = '<div class="row">',
	       opencard = '<div class="col mb-2"><a href="'+url+'" class="card h-100" style="border: 1px solid rgba(0,0,0,.125)">',
	       cardbody = '<div class="card-body"><div class="row">',
	       cardimg = 'undefined' !== typeof img ? '<div class="col-4"><img class="card-img-left w-100" src="'+img+'" alt=""></div>' : '',
	       closebody = '</div></div>',
	       closecard = '</a></div>',
	       description = '',
	       output = '<div class="col"><div class="card-title h4">' + data['Title'].toString().trim() + '</div>';

	   if( 'undefined' === typeof data['Link Descriptor Text'] ) {
	       description = '<span class="mark mark-yellow">NO DESCRIPTION PROVIDED</span>';
	   } else {
	       description = data['Link Descriptor Text'].toString().replace( /<[^>]*>?/gm, '' ).trim();
	   }

	   if( description.length > 500 ) {
	       output += '<p>' + description.substr( 0,500 ) + '&hellip;' + '</p>';
	   } else {
	       output += '<p>' + description + '</p>'; 
	   }

	   $( '#out' ).append( opencard + cardbody + cardimg + output + '</div>' + closebody + closecard );
	}

	function fixBeginningSlash( path ) {
	   if( 'undefined' !== typeof path ) {
	       return ( path.indexOf( '/' ) === 0 ) ? 'https://www.cdc.gov' + path : path;
	   }
	}

	// Add / Update a key-value pair in the URL query parameters
	function updateUrlParameter( uri, key, value ) {
	   // remove the hash part before operating on the uri
	   var i = uri.indexOf( '#' );
	   var hash = i === -1 ? '' : uri.substr( i );
	   uri = i === -1 ? uri : uri.substr( 0, i );
	   var re = new RegExp( "([?&])" + key + "=.*?(&|$)", "i" );
	   var separator = uri.indexOf( '?' ) !== -1 ? "&" : "?";
	   if ( uri.match( re ) ) {
	       uri = uri.replace( re, '$1' + key + "=" + value + '$2' );
	   } else {
	       uri = uri + separator + key + "=" + value;
	   }
	   var tmp = uri + hash;
	   window.history.pushState( {
	       tmp
	   }, '', tmp );
	}

	function copyToClipboard( str ) {
	   var el = document.createElement( 'textarea' );
	   el.value = str;
	   document.body.appendChild( el );
	   el.select();
	   document.execCommand( 'copy' );
	   document.body.removeChild( el );
	};

	$( '#card' ).on( 'click', function( e ) {
	   e.preventDefault();
	   sessionStorage.viewType = 'card';
	   updateUrlParameter( location.href, 'viewType', 'card' );
	   init();
	} );

	$( '#details' ).on( 'click', function( e ) {
	   e.preventDefault();
	   sessionStorage.viewType = 'details';
	   updateUrlParameter( location.href, 'viewType', 'details' );
	   init();
	} );

	$( '#datatable' ).on( 'click', function( e ) {
	   e.preventDefault();
	   sessionStorage.viewType = 'datatable';
	   updateUrlParameter( location.href, 'viewType', 'datatable' );
	   init();
	} );

	$( function() {
	   // on first load, check for params and stick them in session
	   if( location.search ) {
	       var filters = location.search.substring( 1 ).split( '&' ),
	           d = [];
	       
	       for( var i=0; i < filters.length; i++ ) {
	           d = filters[i].split( '=' );
	           sessionStorage[ d[0] ] = d[1];
	       }
	   }
	   
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