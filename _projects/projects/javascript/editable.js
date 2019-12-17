var target;

function formatDoc( cmd, value ) {
	console.log( cmd, value )
	document.execCommand( cmd, false, value ); 
	target[0].focus();
}

function insertHTML( html ) {
	console.log( html )
	document.execCommand( 'insertHTML', false, html );
	target[0].focus();
}

function init() {
	if ( $( '#toolbar' ).length ) { return; }
	target.attr( 'contenteditable', 'true' ).parent().before( toolbar );
	injectCSS()
	handleEvents();
	getFontsLib();
	
	if ( 'undefined' !== typeof(Storage) ) {
		if ( null !== localStorage.getItem( location.href ) ) {
			target[0].innerHTML = localStorage.getItem( location.href );
		}
	}
}

function injectCSS() {
	var link = document.createElement( 'link' );
	link.href = 'https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css';
	link.type = 'text/css';
	link.rel = 'stylesheet';
	document.getElementsByTagName( 'head' )[0].appendChild( link );
}

function getFontsLib() {
	var l = document.createElement( 'script' );
    l.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js',
    l.addEventListener ? l.addEventListener( 'load', loadFonts, !1 ) : l.readyState && ( l.onreadystatechange = loadFonts ),
    document.body.appendChild( l );
}

function loadFonts() {
	$( 'link[rel=stylesheet][href^="https://fonts.googleapis.com"]' ).remove();
	
	var fonts = ['Merriweather Sans', 'Nunito'];
	for( var i = 0; i < fonts.length; i++ ) {
		WebFont.load( {
			google: {
				families: [ fonts[ i ] + ':100,200,300,400,500,600,700,800,900' ]
			}
		} );		
	}	
}

function handleEvents() {
	$( '.cmd' ).on( 'click', function( e ) {
		var t = $( this ), 
			cmd = t.data( 'cmd' ),
			value = t.data( 'value' );
		
		console.log( 'command', cmd, value )

		if ( 'undefined' !== typeof cmd ) {
			if ( 'save' === cmd ) {
				localStorage.setItem( location.href , target[0].innerHTML );

				setTimeout( function() {
					t.tooltip( 'show' );
				}, 200 );
				
				// hide all the tooltips
				setTimeout( function() {
					$( '[data-toggle="tooltip"]' ).tooltip( 'hide' );
				}, 1000 );
			} else if ( 'close' === cmd ) {
				var ls = localStorage.getItem( location.href ),
					content = target[0].innerHTML;
				
				if ( ls !== content ) {
					if ( confirm( 'Changes detected, are you sure you want to close without saving?' ) ) {
						target.attr( 'contenteditable', 'false' );
						$( '#toolbar' ).remove();						
					}
				} else {
					target.attr( 'contenteditable', 'false' );
					$( '#toolbar' ).remove();
				}
			} else if ( 'card' === cmd ) {
				insertHTML( card );			
			}  else if( 'threecards' === cmd ) { 
				insertHTML( threecards );
			}  else if( 'css' === cmd ) { 
				var script = document.createElement('script');
					script.onload = function() {};
					script.onerror = function() {
						alert( 'Error loading, please try again...' );
					};				
					script.src = "https://codepen.io/peterbenoit/pen/jOEqeKV.js";
					document.head.appendChild( script );				
			} else if ( 'undefined' !== typeof value ) {
				formatDoc( cmd, value );
			} else {
				formatDoc( cmd );			
			}
		} else {
			if ( 'hyperlink' === this.title.toLowerCase() ) {
				var link = prompt( 'Enter URL', 'https:\/\/' );

				if ( link && link !== '' && link !== 'https://' ) {
					formatDoc( 'createlink' , link )
				}
			}
		}
	} );

	$( 'select' ).on( 'change', function( e ) {
		formatDoc( $( this ).data( 'cmd' ), $( this ).val() );
		this.selectedIndex = 0;
	} );
	
	$( '[data-toggle="tooltip"]' ).tooltip( { trigger: 'click' } );
}

function setDocMode(bToSource) {
  var oContent;
	oContent = document.createRange();
	oContent.selectNodeContents( target.firstChild );
	target.innerHTML = oContent.toString();
	target.contentEditable = true;
	target.focus();
}

var toolbar = '<div id="toolbar"> <input name="myDoc" type="hidden"><div class="row no-gutters"><div class="col-1"> <select class="custom-select custom-select-sm border-0" data-cmd="formatblock"><option selected> Format</option><option value="h1"> Title 1 &lt;h1&gt;</option><option value="h2"> Title 2 &lt;h2&gt;</option><option value="h3"> Title 3 &lt;h3&gt;</option><option value="h4"> Title 4 &lt;h4&gt;</option><option value="h5"> Title 5 &lt;h5&gt;</option><option value="h6"> Subtitle &lt;h6&gt;</option><option value="p"> Paragraph &lt;p&gt;</option><option value="pre"> Preformatted &lt;pre&gt;</option> </select></div><div class="col-1"> <select class="custom-select custom-select-sm border-0" data-cmd="fontname"><option class="heading" selected> Font</option><option> Open Sans</option><option> Merriweather</option><option> Merriweather Sans</option><option> Nunito</option> </select></div><div class="col-1"> <select class="custom-select custom-select-sm border-0" data-cmd="fontsize"><option class="heading" selected> Size</option><option value="1"> Very Small</option><option value="2"> Small</option><option value="3"> Normal</option><option value="4"> Large</option><option value="5"> Larger</option><option value="6"> Very Large</option><option value="7"> Maximum</option> </select></div><div class="col-1"> <select class="custom-select custom-select-sm border-0" data-cmd="forecolor"><option class="heading" selected> Color</option><option value="red"> Red</option><option value="blue"> Blue</option><option value="green"> Green</option><option value="black"> Black</option> </select></div><div class="col-1"> <select class="custom-select custom-select-sm border-0" data-cmd="backcolor"><option class="heading" selected> Background</option><option value="red"> Red</option><option value="green"> Green</option><option value="black"> Black</option> </select></div></div><a class="cmd text-black" data-cmd="close" data-value="" href="#" title="Close"><i class="material-icons pl-2">cancel</i></a><a class="cmd text-black" data-cmd="save" data-value="" href="#" title="Saved!" data-toggle="tooltip"><i class="material-icons pr-2" style="border-right: 1px solid #c0c0c0;">save</i></a> <a class="cmd text-black mr-1" data-cmd="undo" data-value="" href="#" title="Undo"><i class="material-icons">undo</i></a> <a class="cmd text-black" data-cmd="redo" data-value="" href="#" title="Redo"><i class="material-icons pr-2" style="border-right: 1px solid #c0c0c0;">redo</i></a> <a class="cmd text-black mr-1" data-cmd="bold" data-value="" href="#" title="Bold"><i class="material-icons">format_bold</i></a> <a class="cmd text-black mr-1" data-cmd="italic" data-value="" href="#" title="Italic"><i class="material-icons">format_italic</i></a> <a class="cmd text-black mr-1" data-cmd="underline" data-value="" href="#" title="Underline"><i class="material-icons pr-2" style="border-right: 1px solid #c0c0c0;">format_underline</i></a> <a class="cmd text-black mr-1" data-cmd="justifyleft" data-value="" href="#" title="Left align"><i class="material-icons">format_align_left</i></a> <a class="cmd text-black mr-1" data-cmd="justifycenter" data-value="" href="#" title="Center align"><i class="material-icons">format_align_center</i></a> <a class="cmd text-black mr-1" data-cmd="justifyright" data-value="" href="#" title="Right align"><i class="material-icons pr-2" style="border-right: 1px solid #c0c0c0;">format_align_right</i></a> <a class="cmd text-black mr-1" data-cmd="insertorderedlist" data-value="" href="#" title="Ordered List"><i class="material-icons">format_list_numbered</i></a> <a class="cmd text-black mr-1" data-cmd="insertunorderedlist" data-value="" href="#" title="Unordered List"><i class="material-icons pr-2" style="border-right: 1px solid #c0c0c0;">format_list_bulleted</i></a> <a class="cmd text-black mr-1" data-cmd="formatblock" data-value="blockquote" href="#" title="Quote"><i class="material-icons pr-2" style="border-right: 1px solid #c0c0c0;">format_quote</i></a> <a class="cmd text-black mr-1" data-cmd="outdent" data-value="" href="#" title="Decrease indentation"><i class="material-icons">format_indent_decrease</i></a> <a class="cmd text-black mr-1" data-cmd="indent" data-value="" href="#" title="Add indentation"><i class="material-icons pr-2" style="border-right: 1px solid #c0c0c0;">format_indent_increase</i></a> <a class="cmd text-black mr-1" href="#" title="Hyperlink"><i class="material-icons pr-2" style="border-right: 1px solid #c0c0c0;">insert_link</i></a> <a class="cmd text-black mr-1" href="#" data-cmd="card" data-value="" title="Insert Card"><i class="material-icons">credit_card</i></a><a class="cmd text-black mr-1" href="#" data-cmd="threecards" data-value="" title="Insert Three Cards"><i class="material-icons pr-2" style="border-right: 1px solid #c0c0c0;">view_column</i></a><a class="cmd text-black mr-1" href="#" data-cmd="css" data-value="" title="Add CSS"><i class="material-icons pr-2">code</i></a>',
	card = '<div class="card"><img class="card-img-top w-100" src="https://via.placeholder.com/350x150"><div class="card-body"><div class="card-title h4">Card Title</div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></div></div>',
	threecards = '<div class="row"><div class="col-md-4"><div class="card"> <img alt="Card Title" class="card-img-top w-100" src="https://via.placeholder.com/350x150?text=Card+1"><div class="card-body"><div class="card-title h4">Card Title 1</div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div></div><div class="col-md-4"><div class="card"> <img alt="Card Title" class="card-img-top w-100" src="https://via.placeholder.com/350x150?text=Card+2"><div class="card-body"><div class="card-title h4">Card Title 2</div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p></div></div></div><div class="col-md-4"><div class="card"> <img alt="Card Title" class="card-img-top w-100" src="https://via.placeholder.com/350x150?text=Card+3"><div class="card-body"><div class="card-title h4">Card Title 3</div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div></div></div></div>';
target = $( '.content' );
init();