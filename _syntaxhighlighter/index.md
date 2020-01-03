---
---

<html lang="en">
<head>
	<meta charset="utf-8">
	<title>SyntaxHighlighter</title>
	<link href="{{ site.baseurl }}/css/theme.css" rel="stylesheet">
	<style>
	h5 {
		margin-bottom: 0;
	}
	#copy {
		display: none;
	}
	</style>
</head>
<body>
	<h1>Syntax Highlighter</h1>
	<p>Format HTML, JavaScript and CSS for use in documentation like Microsoft Word or Google Docs.</p>
	<p>Paste your code into the text area below, choose your format type and click the Format button.</p>
	
	<select class="custom-select">
		<option value="html" selected>HTML</option>
		<option value="javascript">JavaScript</option>
		<option value="css">CSS</option>
	  </select>
	<button id="btn">Format</button><button id="copy" data-clipboard-action="copy" data-clipboard-target="div.dp-highlighter">Copy</button><br>
	<textarea name="input" cols="100" rows="10"></textarea>
	<hr>
	<h2>Examples</h2>
	<hr>
	<h5>Screenshot of CSS formatting</h5>
	<img src="../assets/images/examples/screenshot.png" alt="screenshot" />
	<h5>Paste into Microsoft Word</h5>
	<img src="../assets/images/examples/ms-word.png" alt="Microsoft Word" />
	<h5>Paste into Google Docs</h5>
	<img src="../assets/images/examples/google-docs.png" alt="Google Docs" />

	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="https://peterbenoit.github.io/cdn/libs/syntaxhighlighter/syntaxhighlighter.js" type="text/javascript"></script> 
	<script src="https://peterbenoit.github.io/cdn/libs/syntaxhighlighter/brushes.js" type="text/javascript"></script> 
	<script src="https://peterbenoit.github.io/cdn/libs/syntaxhighlighter/brushes.xml.js" type="text/javascript"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>

	<script>
		$( '#btn' ).on( 'click', function() {
			$( 'textarea[name="input"]' )[0].className = $( '.custom-select' ).val();
			var hl = $( '.dp-highlighter' );
			if( hl.length ) {
				hl.remove();
				$( '#copy' ).hide();
				$( 'textarea[name="input"]' ).show();
				$( this ).text( 'Format' );
			} else {
				dp.SyntaxHighlighter.HighlightAll( 'input', true, false );
				$( '#copy' ).show();
				$( this ).text( 'Code' );
			}	
		} );
		
		var clipboard = new ClipboardJS( '#copy' );
		clipboard.on( 'success', function( e ) {
			$( '#copy' ).text( 'Copied!' );

			setTimeout( function() {
				$( '#copy' ).text( 'Copy' );
			}, 2000 );
		} );
		clipboard.on( 'error', function( e ) {
			$( '#copy' ).text( 'Error!' );

			console.error( 'Error Details:', e );

			setTimeout( function() {
				$( '#copy' ).text( 'Copy' );
			}, 2000 );
		} );		
	</script>
	<center style="text-align: center;">Using a customized version of the most excellent <a href="https://github.com/syntaxhighlighter/syntaxhighlighter">SyntaxHighlighter</a> library 🥰</center>
</body>
</html>