---
permalink: datatables/simple-custom-search-results.html
description: A simple version of the custom search results example.
title: Simple Custom Search Results
---



<!DOCTYPE html>
<html lang="en" class="theme-blue">
<head>
	<meta charset="UTF-8">
	<title>Simple Custom Datatables JS output</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel='stylesheet' href='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/css/bootstrap.css'>
	<link rel='stylesheet' href='https://www.cdc.gov/TemplatePackage/4.0/assets/css/app.min.css'>
	<link rel='stylesheet' href='https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css'>
</head>
<body translate="no">
	<div class="container d-flex flex-wrap body-wrapper">
	<main class="col-12 order-lg-2" role="main" aria-label="Main Content Area">
		<p>This is a <b><i>very</i></b> basic example of working with <a href="https://www.datatables.net">datatables</a> to produce custom output.</p>

		<table id="datatable"></table>
	</main>
	</div>
	<script src='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/jquery.min.js'></script>
	<script src='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/bootstrap.bundle.min.js'></script>
	<script src='https://www.cdc.gov/TemplatePackage/4.0/assets/js/app.bundle.min.js'></script>
	<script src='https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min.js'></script>
	<script src='https://cdn.datatables.net/1.10.18/js/dataTables.bootstrap4.min.js'></script>
	<script id="rendered-js">
var keyword = 'flu';

$( function() {
	getTheDatas();
} );

// poll the API for the JSON response
function getTheDatas() {
	// our ajax fetch
	$.ajax( {
		url: 'https://search.cdc.gov/srch/internet/browse2?wt=json&q='+keyword+'&rows=200&start=0&hl=on&df=description,title&hl.simple.pre=%3Cstrong%3E&hl.simple.post=%3C/strong%3E&hl.fragsize=200&affiliate=cdc-main',
		type: 'GET',
		success: function( data ) {

			data = JSON.parse( data ); 		// make sure the data is a proper JSON object
			var docs = data.response.docs;	// select the JSON nodes you want to use

			createTheTable( docs );			// call the function to build the datatable
		}
	} );
}

// create the datatable and modify the response
function createTheTable( docs ) {
	$( '#datatable' )
		.on( 'preInit.dt', function() {
			// append a div to place the output markup
			$( this ).after( '<div id="output"></div>' );
		} )
		.DataTable( {
			data: docs,
			columns: [ {
				'data': 'title',
				'defaultContent': 'Title is Missing'
			}, {
				'data': 'url',
				'defaultContent': 'URL is Missing'
			}, {
				'data': 'description',
				'defaultContent': 'Description is Missing'
			} ],
			searching: false,
			lengthChange: false,
			pageLength: 20,
			initComplete: function() {
				// hide the table
				$( this ).hide();
     		},
			drawCallback: function( settings ) {
				// reposition the window at the top when paging
				window.scrollTo( 0, 0 );
			},
			rowCallback: function( row, data, index ) {
				// with each row, build the markup and append it to the output
				var outputHtml = '',
					description = data.description === 'undefined' ? data.title : data.description;
					// ^ description isn't always available, if it isn't, replace it with the title.

				outputHtml += '<h3>' + data.title + '</h3>';
				outputHtml += '<a href="'+ data.url +'">'+ data.url +'</a>';
				outputHtml += '<p>'+ description +'</p>';

				$( '#output' ).append( outputHtml );
			},
			preDrawCallback: function( settings ) {
				// empty the output prior to redrawing
				$( '#output' ).empty();
			}
		} );
}
    </script>
</body>
</html>
