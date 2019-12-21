---
#front stuff
---

<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>File upload CSV or JSON into Datatables.net using Javascript</title>
    <!-- <link href='https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css' rel='stylesheet'> -->
    <link href="https://cdn.datatables.net/v/bs4-4.1.1/dt-1.10.20/datatables.min.css" rel="stylesheet">
	<style>
        #fileSize {
            display: none;
        }
	</style>
</head>
<body translate="no">
	<h3>File Upload</h3>
	<p>Using a CSV or JSON file to populate Datatables on the fly. Try these samples.</p>
	<p><a href="https://raw.githubusercontent.com/peterbenoit/cdn/master/data/datatables/data.csv" download>data.csv</a></p>
	<p><a href="https://raw.githubusercontent.com/peterbenoit/cdn/master/data/datatables/data.json" download>data.json</a></p>
	<form>
		<input type="file"> <span id="fileSize">total size: 0</span>
	</form>
	<table id="results"></table>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <!-- <script src="https://cdn.datatables.net/v/bs4-4.1.1/dt-1.10.20/datatables.min.js"></script> -->
	<script>
	     function CSVToJSON( csvData ) {
	     	var data = CSVToArray( csvData ),
	     		objData = [];
	     	for ( var i = 1; i < data.length; i++ ) {
	     		objData[ i - 1 ] = {};
	     		for ( var k = 0; k < data[ 0 ].length && k < data[ i ].length; k++ ) {
	     			var key = data[ 0 ][ k ];
	     			objData[ i - 1 ][ key ] = data[ i ][ k ]
	     		}
	     	}
	     	return JSON.stringify( objData ).replace( /},/g, "},\r\n" );;
	     }

	     function CSVToArray( csvData, delimiter ) {
	     	delimiter = ( delimiter || ',' );
	     	var pattern = new RegExp( ( '(\\' + delimiter + '|\\r?\\n|\\r|^)' + '(?:\'([^\']*(?:\'\'[^\']*)*)\'|' + '([^\'\\' + delimiter + '\\r\\n]*))' ), 'gi' ),
	     		data = [
	     			[]
	     		],
	     		matches = null,
	     		matchedDelimiter = '';
	     	while ( matches = pattern.exec( csvData ) ) {
	     		matchedDelimiter = matches[ 1 ];
	     		if ( matchedDelimiter.length && ( matchedDelimiter != delimiter ) ) {
	     			data.push( [] );
	     		}
	     		if ( matches[ 2 ] ) {
	     			matchedDelimiter = matches[ 2 ].replace( new RegExp( "\"\"", "g" ), "\"" );
	     		} else {
	     			matchedDelimiter = matches[ 3 ];
	     		}
	     		data[ data.length - 1 ].push( matchedDelimiter );
	     	}
	     	return ( data );
	     }
	     $( 'input[type="file"]' ).on( 'change', function( e ) {
	     	$( 'body' ).remove( 'pre' ).append( '<pre/>' );
	     	if ( $.fn.DataTable.isDataTable( '#results' ) ) {
	     		$( '#results' ).DataTable().clear().destroy();
	     	}
	     	var files = $( this )[ 0 ].files,
	     		file = files[ 0 ],
	     		bytes = file.size,
	     		output = bytes + ' bytes',
	     		extension = file.name.substr( file.name.lastIndexOf( '.' ) + 1, file.name.length ).toLowerCase(),
	     		reader = new FileReader(),
	     		result = null,
	     		arr = [];
	     	if ( -1 === [ 'csv', 'json' ].indexOf( extension ) ) {
	     		alert( 'CSV and JSON files are currently supported' );
	     		return false;
	     	}
	     	reader.onload = function( e ) {
	     		var result = e.target.result;
	     		$( 'pre' )[ 0 ].textContent = e.target.result;
	     		if ( 'csv' === extension ) {
	     			result = $.parseJSON( CSVToJSON( result ) );
	     		}
	     		if ( 'json' === extension ) {
	     			result = $.parseJSON( result );
	     		}
	     		$( '#results' ).DataTable( {
	     			data: result,
	     			columns: [ {
	     				data: 'name',
	     				defaultContent: 'missing'
	     			}, {
	     				data: 'title',
	     				defaultContent: 'missing'
	     			}, {
	     				data: 'location',
	     				defaultContent: 'missing'
	     			}, {
	     				data: 'score',
	     				defaultContent: 'missing'
	     			}, {
	     				data: 'date',
	     				defaultContent: 'missing'
	     			}, {
	     				data: 'salary',
	     				defaultContent: 'missing'
	     			} ],
	     		} );
	     	}
	     	reader.readAsText( file );
	     	for ( var aMultiples = [ 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB' ],
	     			nMultiple = 0,
	     			nApprox = bytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++ ) {
	     		output = nApprox.toFixed( 3 ) + ' ' + aMultiples[ nMultiple ] + ' (' + bytes + ' bytes)';
	     	}
	     	$( '#fileSize' ).show().text( output );
	     } );
	</script>
</body>
</html>