---
#front stuff
---

<html lang="en" class="theme-blue">
<head>
<meta charset="UTF-8">
<title>Datatables Icons - merging categories data into icons data - clipboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel='stylesheet' href='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/css/bootstrap.css'>
<link rel='stylesheet' href='https://www.cdc.gov/TemplatePackage/4.0/assets/css/app.min.css'>
<link rel='stylesheet' href='https://cdn.datatables.net/v/bs4/dt-1.10.20/cr-1.5.2/kt-2.5.1/sc-2.0.1/datatables.min.css'>
</head>
<body translate="no">
<div class="container d-flex flex-wrap body-wrapper">
<main class="col-12 order-lg-2" role="main" aria-label="Main Content Area">
<p>Using <a href="https://datatables.net/">datatables</a> to display the <a href="https://www.cdc.gov/wcms/4.0/cdc-wp/image-types/standard-icons.html">icons gallery</a>. There are <i>956</i> icons currently defined in the <a href="https://www.cdc.gov/TemplatePackage/4.0/assets/json/cdc_iconfont_manifest.json">icon font manifest JSON</a>.</p>
<div class="alert alert-info col-md-5" role="alert">
<span class="x32 fill-p cdc-icon-info-circle"></span> Clicking on an icon will copy it to your clipboard.
</div>
<table id="icons"></table>
<pre class="fs0875"><code>
  "x-ray-solid": {
    "index": 955,
    "title": "x-ray-solid",
    "class": "cdc-icon-x-ray-solid",
    "path": "../icons/font-awesome/solid/x-ray-solid.svg",
    "folder": "font-awesome-solid",
    "friendlyName": "x ray solid"
  }
</code>
</pre>
</main>
</div>
<script src='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/jquery.min.js'></script>
<script src='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/bootstrap.bundle.min.js'></script>
<script src='https://www.cdc.gov/TemplatePackage/4.0/assets/js/app.bundle.min.js'></script>
<script src='https://cdn.datatables.net/v/bs4/dt-1.10.20/cr-1.5.2/kt-2.5.1/sc-2.0.1/datatables.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js'></script>
<script>
var icons = 'https://www.cdc.gov/TemplatePackage/4.0/assets/json/cdc_iconfont_manifest.json',
    categories = 'https://www.cdc.gov/TemplatePackage/4.0/assets/json/cdc_iconfont_categories.json';
    
$( function() {
	loadIcons();
} );

function loadIcons() {
	$.ajax( {
		url: icons,
		dataType: 'json',
		crossDomain: true,
		success: function( resp ) {
			// console.log( 'icons loaded', iconobj );
			loadCategories( resp );
		},
		error: function() {
			console.log( 'icon error' );
		}
	} );
}

function loadCategories( icons ) {
	$.ajax( {
		url: categories,
		dataType: 'json',
		crossDomain: true,
		success: function( resp ) {
			var arr = [],
				keyword = '',
				t = '';
			// console.log( 'categories loaded', resp );
			$.each( icons, function( idx, obj ) {
				t = resp.icons[ obj.title ];
				keyword = getSafe( function() {
					return t.keywords;
				}, [] );
				obj.keywords = keyword;
			} );
			// console.log( 'icons with categories', icons );
			loadData( icons );
		},
		error: function() {
			console.log( 'categories error' );
		}
	} );
}

function getSafe( fn, defaultVal ) {
	try {
		return fn();
	} catch ( e ) {
		return defaultVal;
	}
}

function loadData( data ) {
	// console.log( 'data', data )
	var arr = [];
	$.each( data, function( idx, obj ) {
		arr.push( obj )
	} );
	$( '#icons' ).on( 'preInit.dt', function() {
		console.log( 'preInit' );
		// append the output div
		$( this ).after( '<div id="out"></div>' );
	} ).DataTable( {
		data: arr,
		pageLength: 24,
		stateSave: true,
		lengthChange: false,
		columns: [ {
			data: 'index'
		}, {
			data: 'title'
		}, {
			data: 'class'
		}, {
			data: 'path'
		}, {
			data: 'friendlyName'
		}, {
			data: 'keywords'
		} ],
		initComplete: function( settings, json ) {
			console.log( 'initComplete' );
			// hide the table
			$( this ).hide();
			setupClipboard();
		},
		preDrawCallback: function( settings ) {
			console.log( 'preDrawCallback' );
			// empty the output (if it exists) prior to redrawing
			$( '#out' ).empty();
		},
		rowCallback: function( row, data, index ) {
			var opencard = '<div class="col-lg-2 col-12 col-sm-6 col-md-4 mb-2"><div class="card h-100 ds-8" style="border: 1px solid rgba(0,0,0,.125)">',
				openbody = '<div class="card-body text-center">',
				closebody = '</div>',
				closecard = '</div></div>',
				output = '';
			output += '<span class="x32 fill-p ' + data[ 'class' ] + '"></span>';
			output += '<b class="d-block">' + data[ 'friendlyName' ] + '</b>';
			$( '#out' ).append( opencard + openbody + output + closebody + closecard );
		},
		drawCallback: function( settings ) {
			// after the rows (columns) have been generated, wrap them into rows as needed
			var divs = $( '#out > .col-lg-2' );
			for ( var i = 0; i < divs.length; i += 6 ) {
				divs.slice( i, i + 6 ).wrapAll( '<div class="row mb-3"></div>' );
			}
			console.log( 'drawCallback' );
		},
	} );
}

function setupClipboard() {
	new ClipboardJS( '.card', {
		text: function( t ) {
			return $( t ).find( 'span' )[ 0 ].outerHTML;
		}
	} ).on( 'success', function( e ) {
		setTooltip( e.trigger, 'Copied!' );
		hideTooltip( e.trigger );
	} ).on( 'error', function( e ) {
		setTooltip( e.trigger, 'Failed!' );
		hideTooltip( e.trigger );
	} );
	$( '.card' ).tooltip( {
		trigger: 'click',
		placement: 'bottom'
	} );
}

function setTooltip( btn, message ) {
	$( btn ).tooltip( 'hide' ).attr( 'data-original-title', message ).tooltip( 'show' );
}

function hideTooltip( btn ) {
	setTimeout( function() {
		$( btn ).tooltip( 'hide' );
	}, 1000 );
}
    </script>
</body>
</html>
