---
layout: template
permalink: datatables/datatables-icons.html
description: Using Datatables to provide default functionality, with a custom render method for displaying the icon data in a Bootstrap 4 grid.
title: Font Icons
type: demo
localcss: datatables.css
localjs: 
includePrismJs: true
externalcss: https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css, https://cdn.datatables.net/buttons/1.6.1/css/buttons.bootstrap4.min.css, https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css
externaljs: https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js, https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js, https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js, https://cdn.datatables.net/buttons/1.6.1/js/dataTables.buttons.min.js, https://cdn.datatables.net/buttons/1.6.1/js/buttons.bootstrap4.min.js, https://cdn.datatables.net/buttons/1.6.1/js/buttons.html5.min.js, https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js, https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js
---

{%- include breadcrumbs.html -%}
 
<style>
	/* styles for this demo */
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
		.btn-group {
			margin-bottom: 1rem;
		}
		.btn-group .btn {
			font-size: .875rem;
		}
		.btn-group div.dt-buttons {
			margin-bottom: 0;
		}

		#datatable td:nth-child(2), #datatable th:nth-child(2), #datatable td:nth-child(3), #datatable th:nth-child(3) {
			display: table-cell;
		}
		#datatable td, #datatable th {
			display: none;
		}		
	}
</style>

<p>Using <a href="https://datatables.net/">datatables</a> to display the <a href="https://www.cdc.gov/wcms/4.0/cdc-wp/image-types/standard-icons.html">icons gallery</a>. There are currently <i id="keycount"></i> icons available.</p>
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
<div class="custom-control custom-checkbox d-none">
	<input type="checkbox" class="custom-control-input" id="autofilter" checked>
	<label class="custom-control-label" for="autofilter">Filter Automatically</label>
</div>

<table id="datatable" class="table table-striped w-100"></table>

<div aria-multiselectable="true" class="accordion indicator-plus accordion-white mb-3" id="accordion-4" role="tabpanel">
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-3" data-toggle="collapse" id="accordion-4-card-3" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-3">Notes</a>
		</div>
		<div aria-labelledby="accordion-4-card-3" class="collapse show" id="accordion-4-collapse-3" role="tabpanel">
			<div class="card-body">
				<p>Some info on this demo.</p>
				<ol>
					<li>The data for this demo appears in two related JSON datasets, one for the <a href="https://www.cdc.gov/TemplatePackage/4.0/assets/json/cdc_iconfont_manifest.json">icons</a> and the other for the <a href="https://www.cdc.gov/TemplatePackage/4.0/assets/json/cdc_iconfont_categories.json">keywords &amp; categories</a>. The second dataset was merged into the icons based on named keyword and category matching. There are potential issues doing this, and while it would be safer to work with a single dataset, this seemed like the only reasonable option.</li>
					<li>The buttons used in the demo are a mix of custom buttons for the display toggle between the datatable view and the icon grid view. The export buttons are included using the <a href="http://stuartk.com/jszip">jszip</a> and datatables <a href="https://datatables.net/extensions/buttons/">buttons extension</a>. </li>
					<li>Search/Filter has been modified to append a clear and search button</li>
					<li>Both views have been setup to be responsive, and the datatable controls have been adjusted to work in mobile. This was purely a CSS adjustment.</li>
					<li>Copy to Clipboard functionality is done using a custom call to the <a href="https://clipboardjs.com/">clipboard.js</a> library.</li>
					<li>Postback position is retained and adjusted when the table reloads. This really isn't a problem on pages with only the datatable control, however longer pages seem to redirect to the bottom on pagination clicks. Ideally, this would be caught with a <code>.preventDefault()</code> on the anchors, however it wasn't working. More to do.</li>
					<li>The Datatables library auto-filtering works great, however I don't believe it's 508 compliant. I added code on lines 167-172 to account for this.</li>
				</ol>	
			</div>
		</div>
	</div>
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-1" data-toggle="collapse" id="accordion-4-card-1" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-1">HTML</a>
		</div>
		<div aria-labelledby="accordion-4-card-1" class="collapse" id="accordion-4-collapse-1" role="tabpanel">
			<div class="card-body">
				<div class="row">
					<div class="col">
						<pre><code class="language-markup line-numbers"><script type="prism-html-markup"><table id="datatable" class="table table-striped w-100"></table></script></code></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-2" data-toggle="collapse" id="accordion-4-card-2" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-2">Javascript</a>
		</div>
		<div aria-labelledby="accordion-4-card-2" class="collapse" id="accordion-4-collapse-2" role="tabpanel">
			<div class="card-body">
				<div class="row">
					<div class="col">
						<pre id="script-output"></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script id="prism-source">

window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {
		loadIcons();

		// toggle the datatable vs buttons view
		$( 'input[name="options"]' ).on( 'change', function() {
			var t = $(this).data('id').toLowerCase();
			$( '#datatable' ).hide();
			$( '#buttons' ).hide();
			$( '#' + t ).show();
		} );

	} )( jQuery );
} );

// fetch the icons
function loadIcons() {
	$.ajax( {
		url: 'https://www.cdc.gov/TemplatePackage/4.0/assets/json/cdc_iconfont_manifest.json',
		dataType: 'json',
		crossDomain: true,
		success: function( resp ) {
			loadCategories( resp );
			document.getElementById( 'keycount' ).textContent =  Object.keys( resp ).length;
		},
		error: function() {
			console.log( 'icon error' );
		}
	} );
}

// fetch the categories
function loadCategories( icons ) {
	$.ajax( {
		url: 'https://www.cdc.gov/TemplatePackage/4.0/assets/json/cdc_iconfont_categories.json',
		dataType: 'json',
		crossDomain: true,
		success: function( resp ) {
			var keyword = '',
				category = '',
				t = '';
			$.each( icons, function( idx, obj ) {
				t = resp.icons[ obj.title ];
				keyword = getProperty( function() {
					return t.keywords;
				}, [] );
				obj.keywords = keyword;
				category = getProperty( function() {
					return t.categories;
				}, [] );
				obj.categories = category;				
			} );
			loadData( icons );
		},
		error: function() {
			console.log( 'categories error' );
		}
	} );
}

// returns the property or the default value (typeof property always throws undefined)
function getProperty( fn, val ) {
	try {
		return fn();
	} catch ( e ) {
		return val;
	}
}

// load the data from the icons and the categories (combined) into the datatable
function loadData( data ) {
	var arr = [],
		top = 0;

	// place the json in an array for datatables to process
	$.each( data, function( idx, obj ) {
		arr.push( obj )
	} );

	$( '#datatable' ).on( 'preInit.dt', function() {
		// append the buttons div for use later
		$( this ).after( '<div id="buttons"></div>' );
	} ).DataTable( {
		data: arr,
		pageLength: 24,
		stateSave: true,
		lengthChange: false,
		responsive: true,
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
			addButtons( this );
			addClearButton( this );
			setupClipboard();
		},
		preDrawCallback: function( settings ) {
			// empty the output (if it exists) prior to redrawing
			$( '#buttons' ).empty();

			// maintain the scroll position for redraw
			top  = window.pageYOffset || document.documentElement.scrollTop;
		},
		rowCallback: function( row, data, index ) {
			var opencard = '<div class="col-lg-2 col-12 col-sm-6 col-md-4 mb-2"><div class="card h-6 ds-8" style="border: 1px solid rgba(0,0,0,.125)">',
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

			window.scrollTo( 0, top );
		},
	} );
}

// append the action buttons to the 2nd button group
function addButtons( table ) {
	var buttons = new $.fn.dataTable.Buttons( table, {
		buttons: [ 'copyHtml5', 'excelHtml5', 'csvHtml5', 'pdfHtml5' ]
	} ).container().appendTo( $( '.btn-group-2' ) );
}

function addClearButton( table ) {
	var btnClear = $( '<div class="input-group-append"><button class="btn btn-outline-secondary" id="btn-clear" type="button"><span class="cdc-icon-close"></span></button><button class="btn btn-outline-secondary" id="btn-search" type="button"><span class="cdc-icon-search-light"></span></button></div>' ),
		filter = $( '#' + table[ 0 ].id ).parents( '.dataTables_wrapper' ).find( '.dataTables_filter' );

	filter.find( 'label' ).addClass( 'input-group input-group-sm' );
	filter.find( 'input' ).after( btnClear );

	$( '#' + table[ 0 ].id + '_wrapper #btn-clear' ).click( function() {
		$( '#' + table[ 0 ].id ).dataTable().fnFilter( '' );
	} );

	$( '#' + table[ 0 ].id + '_wrapper #btn-search' ).click( function() {
		$( '#' + table[ 0 ].id ).dataTable().fnFilter( filter.find( 'input' ).val() );
	} );

	// NOTE: removing the comments here will turn off the auto-filtering done and require the need to click the search button
	// filter.find('input.form-control.form-control-sm').off('keyup.DT search.DT input.DT paste.DT cut.DT').off( 'keypress.DT' ).on( 'keypress.DT', function(e) { 
	// 	if ( e.keyCode == 13 ) {
	// 		$( '#btn-search' ).click();
	// 	}
	// } );
}

// add clipboard functionality to each button
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

// show the tooltip with the message passed in
function setTooltip( btn, message ) {
	$( btn ).tooltip( 'hide' ).attr( 'data-original-title', message ).tooltip( 'show' );
}

// hide the tooltip after timeout
function hideTooltip( btn ) {
	setTimeout( function() {
		$( btn ).tooltip( 'hide' );
	}, 1000 );
}
</script>