---
#front stuff
---

<html lang="en" class="theme-blue">
<head>
<meta charset="UTF-8">
<title>Datatables Icons</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/css/bootstrap.css">
<link rel="stylesheet" href="https://www.cdc.gov/TemplatePackage/4.0/assets/css/app.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css"/>
<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.1/css/buttons.bootstrap4.min.css"/>
 
<style>
	.card {
		cursor: pointer;
	}

	.btn-secondary:not(:disabled):not(.disabled).active {
		background-color: #005eaa!important;
		border-color: #005eaa!important;
		color: #fff!important;
	}

	#datatable {
		display:none;
		font-size: smaller;
	}

	@media (max-width: 767.98px) { 
		.paginate_button {
			display: none;
		}
		.pagination li {
			display: none;
		}
		.pagination li.previous, li.next {
			display: inline;
		}

		div.dataTables_wrapper div.dataTables_info {
			padding-top: 0;
		}
	}
</style>
</head>
<body translate="no">
<div class="container d-flex flex-wrap body-wrapper">
<main class="col-12 order-lg-2" role="main" aria-label="Main Content Area">
<p>Using <a href="https://datatables.net/">datatables</a> to display the <a href="https://www.cdc.gov/wcms/4.0/cdc-wp/image-types/standard-icons.html">icons gallery</a>. There are <i>956</i> icons currently defined in the <a href="https://www.cdc.gov/TemplatePackage/4.0/assets/json/cdc_iconfont_manifest.json">icon font manifest JSON</a>.</p>
<div class="alert alert-info col-md-7" role="alert">
<span class="x32 fill-p cdc-icon-info-circle"></span> Clicking on an icon will copy the HTML for it to your clipboard.
</div>
<div class="btn-group btn-group-toggle" data-toggle="buttons">
	<label class="btn btn-secondary">
		<input type="radio" name="options" data-id="datatable" autocomplete="off"> Datatable
	</label>
	<label class="btn btn-secondary active">
		<input type="radio" name="options" data-id="buttons" autocomplete="off" checked> Buttons
	</label>
</div>
<div class="btn-group btn-group-toggle btn-group-2" data-toggle="buttons"></div>

<table id="datatable" class="table table-striped"></table>
</main>
</div>
<script src="https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/jquery.min.js"></script>
<script src="https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/bootstrap.bundle.min.js"></script>
<script src="https://www.cdc.gov/TemplatePackage/4.0/assets/js/app.bundle.min.js"></script>

 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
<script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.6.1/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.bootstrap4.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.html5.min.js"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>
<script>
var icons = 'https://www.cdc.gov/TemplatePackage/4.0/assets/json/cdc_iconfont_manifest.json',
    categories = 'https://www.cdc.gov/TemplatePackage/4.0/assets/json/cdc_iconfont_categories.json';
    
$( function() {
	loadIcons();

	$( 'input[name="options"]' ).on( 'change', function() {
		var t = $(this).data('id').toLowerCase();
		$( '#datatable' ).hide();
		$( '#buttons' ).hide();
		$( '#' + t ).show();
	} )
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
				category = '',
				t = '';
			// console.log( 'categories loaded', resp );
			$.each( icons, function( idx, obj ) {
				t = resp.icons[ obj.title ];
				keyword = getSafe( function() {
					return t.keywords;
				}, [] );
				obj.keywords = keyword;
				category = getSafe( function() {
					return t.categories;
				}, [] );
				obj.categories = category;				
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
	$( '#datatable' ).on( 'preInit.dt', function() {
		console.log( 'preInit' );
		// append the output div
		$( this ).after( '<div id="buttons"></div>' );
	} ).DataTable( {
		data: arr,
		pageLength: 24,
		stateSave: true,
		lengthChange: false,
		columns: [ {
			data: 'index',
			title: 'ID'
		}, {
			data: 'title',
			title: 'Title'
		}, {
			data: 'class',
			title: 'Class'
		}, {
			data: 'path',
			title: 'Path'
		}, {
			data: 'friendlyName',
			title: 'Friendly Name'
		}, {
			data: 'keywords',
			title: 'Keywords'
		}, {
			data: 'categories',
			title: 'Categories'
		} ],
		initComplete: function( settings, json ) {
			console.log( 'initComplete' );
			// hide the table
			// $( this ).hide();
			addButtons( this );
			setupClipboard();
		},
		preDrawCallback: function( settings ) {
			console.log( 'preDrawCallback' );
			// empty the output (if it exists) prior to redrawing
			$( '#buttons' ).empty();
		},
		rowCallback: function( row, data, index ) {
			var opencard = '<div class="col-lg-2 col-12 col-sm-6 col-md-4 mb-2"><div class="card h-100 ds-8" style="border: 1px solid rgba(0,0,0,.125)">',
				openbody = '<div class="card-body text-center">',
				closebody = '</div>',
				closecard = '</div></div>',
				output = '';
			output += '<span class="x32 fill-p ' + data[ 'class' ] + '"></span>';
			output += '<b class="d-block">' + data[ 'friendlyName' ] + '</b>';
			$( '#buttons' ).append( opencard + openbody + output + closebody + closecard );
		},
		drawCallback: function( settings ) {
			// after the rows (columns) have been generated, wrap them into rows as needed
			var divs = $( '#buttons > .col-lg-2' );
			for ( var i = 0; i < divs.length; i += 6 ) {
				divs.slice( i, i + 6 ).wrapAll( '<div class="row mb-3"></div>' );
			}
			console.log( 'drawCallback' );
		},
	} );
}

function addButtons( table ) {
	var buttons = new $.fn.dataTable.Buttons( table, {
		buttons: [ 'copyHtml5', 'excelHtml5', 'csvHtml5', 'pdfHtml5' ]
	} ).container().appendTo( $( '.btn-group-2' ) );
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
