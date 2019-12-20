---
#front stuff
---

<html class="theme-blue" lang="en">
<head>
	<meta charset="UTF-8">
	<title>Search results in datatables</title>
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<link href="https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/css/bootstrap.css" rel="stylesheet">
	<link href="https://cdn.datatables.net/v/bs4-4.1.1/dt-1.10.20/r-2.2.3/datatables.min.css" rel="stylesheet">
	<link href="https://www.cdc.gov/TemplatePackage/4.0/assets/css/app.min.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
	<link href="https://codepen.io/peterbenoit/pen/xxxXwMQ.css" rel="stylesheet">
	<style>
        span.input-group-append .fa {
        	cursor: pointer;
        }
        span.input-group-append .fa.v-hidden {
        	cursor: default;
        }
        .slick-dotted.slick-slider {
        	margin-bottom: 5px;
        }
        .stick-to-top {
        	position: fixed;
        	top: 0;
        	left: 0;
        	z-index: 9999;
        	background: rgba(255, 255, 255, 0.9);
        }
        @media (max-width: 767.98px) {
        	.stick-to-top {
        		visibility: visible;
        	}
        }
        .btn-play {
        	width: 75px;
        }
        #podcasts, #journals {
        	font-size: .875rem;
        }
        #podcasts .podcast-date, #journals .podcast-date {
        	color: #bdbdbd;
        }
        #podcasts .podcast-title, #journals .podcast-title {
        	font-weight: bold;
        }
        #podcasts li {
        	border-bottom: 1px solid #bdbdbd;
        	padding-bottom: 1rem;
        }
        #podcasts li:last-child {
        	border-bottom: none;
        	padding-bottom: 0;
        }
        .v-hidden {
        	visibility: hidden;
        	opacity: 0;
        	transition: visibility 0s linear 300ms, opacity 300ms;
        }
        .v-visible {
        	visibility: visible;
        	opacity: 1;
        	transition: visibility 0s linear 0s, opacity 300ms;
        }
        #out p {
        	margin-bottom: 0;
        }
        #out p .mark {
        	padding: 0;
        }
        #out .url {
        	color: #006d21;
        }
        #out a.card-title {
        	color: #075290;
        }
        a {
        	color: #075290;
        }
	</style>
</head>
<body translate="no">
	<div class="container d-flex flex-wrap body-wrapper">
		<main aria-label="Main Content Area" class="col-12 order-lg-2" role="main">
			<div class="row">
				<div class="col-lg-8 order-lg-2">
					<div class="card mb-2">
						<div class="card-body">
							<table class="display" id="search-results"></table><em>search for a topic, try Flu...</em>
						</div>
					</div>
				</div>
				<div class="col-lg-4 order-lg-1">
					<div class="row mb-2 d-none d-lg-flex">
						<div class="col">
							<div class="card" id="search">
								<div class="card-body">
									<form>
										<div class="input-group flex-fill">
											<input aria-label="Search Value" class="form-control border-right-0" placeholder="Search CDC" type="text"> <span class="input-group-append"></span>
											<div class="input-group-text bg-transparent">
												<span class="input-group-append"><i class="fa fa-times v-hidden"></i></span>
											</div>
											<div class="input-group-append">
												<button class="btn btn-outline-secondary" type="button">Search</button>
											</div>
										</div>
										<div class="text-right fs0875">
											<a aria-controls="advanced" aria-expanded="false" data-toggle="collapse" href="#advanced" role="button">advanced</a>
										</div>
										<div class="collapse" id="advanced">
											<div class="card card-body fs0875">
												<div class="form-check">
													<input checked class="form-check-input" id="types1" name="types" type="radio" value="all"> <label class="form-check-label" for="types1">All</label>
												</div>
												<div class="form-check">
													<input class="form-check-input" id="types2" name="types" type="radio" value="application/pdf"> <label class="form-check-label" for="types2">PDF</label>
												</div>
												<div class="form-check">
													<input class="form-check-input" id="types3" name="types" type="radio" value="application/msword"> <label class="form-check-label" for="types3">Word</label>
												</div>
												<div class="form-check">
													<input class="form-check-input" id="types4" name="types" type="radio" value="application/msexcel"> <label class="form-check-label" for="types4">Excel</label>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div class="row mb-2 v-hidden" id="journals">
						<div class="col">
							<div class="card">
								<div class="card-header font-weight-bold">
									Journals
								</div>
								<div class="card-body">
									<ul></ul>
								</div>
								<div class="card-footer text-right">
									<a href="#">More Results</a>
								</div>
							</div>
						</div>
					</div>
					<div class="row mb-2 v-hidden" id="podcasts">
						<div class="col">
							<div class="card">
								<div class="card-header font-weight-bold">
									Podcasts
								</div>
								<div class="card-body">
									<ul class="list-unstyled pl-0"></ul>
								</div>
								<div class="card-footer text-right">
									<a href="#">More Results</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
	<script src="https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/jquery.min.js"></script>
	<script src="https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/bootstrap.bundle.min.js"></script>
	<script src="https://www.cdc.gov/TemplatePackage/4.0/assets/js/app.bundle.min.js"></script>
	<script src="https://cdn.datatables.net/v/bs4-4.1.1/dt-1.10.20/r-2.2.3/datatables.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
	<script src="https://codepen.io/peterbenoit/pen/xxxXwMQ.js"></script>
	<script>
	     $( function() {
	     	$( '.btn' ).on( 'click', function() {
	     		var val = $( this ).parents( '.input-group' ).find( 'input' ).val();
	     		if ( val.length ) {
	     			$( 'em' ).hide();
	     			if ( $.fn.DataTable.isDataTable( '#search-results' ) ) {
	     				$( '#search-results' ).DataTable().clear().destroy();
	     			}
	     			$( '#journals' ).removeClass( 'v-visible' ).addClass( 'v-hidden' ).find( 'ul' ).empty();
	     			$( '#podcasts' ).removeClass( 'v-visible' ).addClass( 'v-hidden' ).find( 'ul' ).empty();
	     			$( 'input[type="text"]' ).val( val );
	     			getResultsData( val );
	     		}
	     	} );
	     	$( 'span.input-group-append .fa' ).on( 'click', function() {
	     		$( '.input-group' ).find( 'input' ).val( '' );
	     		$( '#journals' ).removeClass( 'v-visible' ).addClass( 'v-hidden' ).find( 'ul' ).empty();
	     		$( '#podcasts' ).removeClass( 'v-visible' ).addClass( 'v-hidden' ).find( 'ul' ).empty();
	     		if ( $.fn.DataTable.isDataTable( '#search-results' ) ) {
	     			$( '#search-results' ).DataTable().clear().destroy();
	     		}
	     		$( this ).removeClass( 'v-visible' ).addClass( 'v-hidden' );
	     		$( 'input' ).focus();
	     		$( 'em' ).show();
	     	} );
	     	$( 'input' ).on( 'input propertychange paste', function() {
	     		if ( $( this ).val().trim().length > 0 ) {
	     			$( this ).next().find( '.fa' ).removeClass( 'v-hidden' ).addClass( 'v-visible' );
	     		} else {
	     			$( this ).next().find( '.fa' ).removeClass( 'v-visible' ).addClass( 'v-hidden' );
	     		}
	     	} );
	     	$( 'form' ).on( 'submit', function( e ) {
	     		e.preventDefault();
	     		$( this ).find( '.btn' ).click();
	     	} );
	     } );

	     function getVideoData( val ) {
	     	var deferreds = [],
	     		url = 'https://search.cdc.gov/srch/internet_video/browse2?q=' + val + '&rows=6&start=0&affiliate=cdc-main',
	     		deferredSearchAjax = $.ajax( {
	     			type: 'GET',
	     			url: url,
	     			data: {
	     				wt: 'json'
	     			},
	     			cache: false
	     		} );
	     	console.log( 'video url', url );
	     	deferreds.push( deferredSearchAjax );
	     	$.when.apply( $, deferreds ).then( function() {
	     		if ( deferreds.length ) {
	     			var data = JSON.parse( deferreds[ 0 ].responseText ),
	     				numfound = data.response.numFound,
	     				results = data.response.docs;
	     			if ( 0 < numfound ) {
	     				populateVideos( val, results );
	     			}
	     		}
	     	} );
	     }

	     function getJournalData( val ) {
	     	var deferreds = [],
	     		url = 'https://search.cdc.gov/srch/internet/browse2-journal?q=' + val + '&rows=6&start=0&affiliate=cdc-main',
	     		deferredSearchAjax = $.ajax( {
	     			type: 'GET',
	     			url: url,
	     			data: {
	     				wt: 'json'
	     			},
	     			cache: false
	     		} );
	     	console.log( 'journal url', url );
	     	deferreds.push( deferredSearchAjax );
	     	$.when.apply( $, deferreds ).then( function() {
	     		if ( deferreds.length ) {
	     			var data = JSON.parse( deferreds[ 0 ].responseText ),
	     				numfound = data.response.numFound,
	     				results = data.response.docs;
	     			if ( 0 < numfound ) {
	     				populateJournals( val, results );
	     			}
	     		}
	     	} );
	     }

	     function getPodcastData( val ) {
	     	var deferreds = [],
	     		url = 'https://search.cdc.gov/srch/internet_podcast/browse2?q=' + val + '&rows=3&start=0&affiliate=cdc-main',
	     		deferredSearchAjax = $.ajax( {
	     			type: 'GET',
	     			url: url,
	     			data: {
	     				wt: 'json'
	     			},
	     			cache: false
	     		} );
	     	console.log( 'podcast url', url );
	     	deferreds.push( deferredSearchAjax );
	     	$.when.apply( $, deferreds ).then( function() {
	     		if ( deferreds.length ) {
	     			var data = JSON.parse( deferreds[ 0 ].responseText ),
	     				numfound = data.response.numFound,
	     				results = data.response.docs;
	     			if ( 0 < numfound ) {
	     				populatePodcasts( val, results );
	     			}
	     		}
	     	} );
	     }

	     function getResultsData( val ) {
	     	// if we somehow got here without a search value, bounce out.
	     	if ( !val.trim().length ) {
	     		return;
	     	}
	     	var deferreds = [],
	     		bbData = '',
	     		fileType = $( 'input:radio[name="types"]:checked' ).val(),
	     		fq = fileType !== 'all' ? '&fq=(type:' + fileType + ')' : '',
	     		url = 'https://search.cdc.gov/srch/internet/browse2?q=' + val + fq + '&rows=200&start=0&affiliate=cdc-main',
	     		deferredSearchAjax = $.ajax( {
	     			type: 'GET',
	     			url: url,
	     			data: {
	     				wt: 'json'
	     			},
	     			cache: false
	     		} );
	     	console.log( 'results url', url );
	     	deferreds.push( deferredSearchAjax );
	     	$.when.apply( $, deferreds ).then( function() {
	     		if ( deferreds.length ) {
	     			var data = JSON.parse( deferreds[ 0 ].responseText ),
	     				numfound = data.response.numFound,
	     				results = data.response.docs;
	     			if ( 0 < numfound ) {
	     				if ( 'all' === fileType ) {
	     					getVideoData( val );
	     					getJournalData( val );
	     					getPodcastData( val );
	     				}
	     				populateResults( val, results );
	     			} else {
	     				$( 'em' ).html( 'no results found for <b>' + val + '</b>' ).show();
	     			}
	     		}
	     	} );
	     }

	     function populateResults( val, results ) {
	     	var re = new RegExp( val, 'gi' ),
	     		fileType = $( 'input:radio[name="types"]:checked' ).val();
	     	$( '#search-results' ).on( 'init.dt', function() {
	     		console.log( 'init' );
	     		//duplicate the search so it appears at the top when scrolling
	     		$( '#search' ).clone( true ).attr( 'id', 'search2' ).appendTo( 'main' ).removeClass( function( index, className ) {
	     			return ( className.match( /(^|\s)col-\S+/g ) || [] ).join( ' ' );
	     		} ).addClass( 'stick-to-top v-hidden col-12' );
	     	} ).on( 'preInit.dt', function() {
	     		console.log( 'preInit' );
	     		// append the output div
	     		$( this ).after( '<div id="out"></div>' );
	     	} ).on( 'search.dt', function( e, settings ) {} ).DataTable( {
	     		data: results,
	     		oLanguage: {
	     			sSearch: 'Filter'
	     		},
	     		order: [
	     			[ 3, 'desc' ]
	     		],
	     		columns: [ {
	     			data: 'description',
	     			defaultContent: 'missing'
	     		}, {
	     			data: 'title',
	     			defaultContent: 'missing'
	     		}, {
	     			data: 'url',
	     			defaultContent: 'missing'
	     		}, {
	     			data: 'score',
	     			defaultContent: 'missing'
	     		} ],
	     		initComplete: function( settings, json ) {
	     			console.log( 'initComplete' );
	     			// hide the table
	     			$( this ).hide();
	     		},
	     		drawCallback: function( settings ) {
	     			console.log( 'drawCallback' );
	     			window.scrollTo( 0, 0 );
	     		},
	     		rowCallback: function( row, data, index ) {
	     			console.log( 'rowCallback', data );
	     			var filtervalue = $( '.dataTables_filter input' ).val(),
	     				opencard = '<div class="row mb-2"><div class="col"><div class="card" style="border: 1px solid rgba(0,0,0,.125)"><div class="card-body">',
	     				closecard = '</div></div></div></div>',
	     				description = '',
	     				output = '',
	     				slider = '<div id="search-video-results"><span class="h3" id="sliderLabel">Video Results</span><div class="cdc-card-slider"></div></div>';
	     			// if we're not filtering and 
	     			// we're at the 3rd indexed position in the results list and
	     			// we're on the first page
	     			if ( !filtervalue.length && 3 === index && 'all' === fileType && 0 === $( this ).DataTable().page() ) {
	     				$( '#out' ).append( opencard + slider + closecard );
	     			}
	     			if ( 'undefined' === typeof data[ 'description' ] ) {
	     				description = '<span class="mark mark-yellow">NO DESCRIPTION PROVIDED</span>';
	     			} else {
	     				description = data[ 'description' ].toString().replace( /<[^>]*>?/gm, '' ).replace( re, '<b>' + val + '</b>' ).trim()
	     				if ( filtervalue.length ) {
	     					var fvre = new RegExp( filtervalue, 'gi' );
	     					description = description.replace( fvre, '<span class="mark mark-yellow">' + filtervalue + '</span>' );
	     				}
	     			}
	     			output += '<a class="card-title h4" href="' + data[ 'url' ] + '">' + data[ 'title' ].toString().replace( re, '<b>' + val + '</b>' ).trim() + '</a>';
	     			output += '<div class="url">' + data[ 'url' ].toString().replace( re, '<b>' + val + '</b>' ).trim() + '</div>';
	     			if ( description.length > 150 ) {
	     				output += '<p>' + description.substr( 0, 150 ) + '&hellip;' + '</p>';
	     			} else {
	     				output += '<p>' + description + '</p>';
	     			}
	     			$( '#out' ).append( opencard + output + closecard );
	     		},
	     		preDrawCallback: function( settings ) {
	     			console.log( 'preDrawCallback' );
	     			// empty the output (if it exists) prior to redrawing
	     			$( '#out' ).empty();
	     		}
	     	} );
	     }

	     function populateJournals( val, results ) {
	     	console.log( 'journals', results )
	     	var output = '';
	     	for ( var i = 0; i < results.length; i++ ) {
	     		output += '<li><a href="' + results[ i ].url + '">' + results[ i ].title + '</a></li>';
	     	}
	     	$( '#journals' ).removeClass( 'v-hidden' ).addClass( 'v-visible' ).find( 'ul' ).html( output );
	     }

	     function populatePodcasts( val, results ) {
	     	console.log( 'podcasts', results )
	     	var output = '',
	     		current = '';
	     	// loop over podcast results and create the HTML
	     	for ( var i = 0; i < results.length; i++ ) {
	     		current = results[ i ];
	     		output += '<li>';
	     		output += '<div class="podcast-date">' + moment( current.PodcastPublishDate ).format( 'LL' ) + '</div>';
	     		output += '<div class="podcast-title">' + current.PodcastSeriesTitle + '</div>';
	     		if ( current.PodcastDescription.length > 70 ) {
	     			output += '<p class="mb-1">' + current.PodcastDescription.substr( 0, 70 ) + '&hellip;' + '</p>';
	     		} else {
	     			output += '<p class="mb-1">' + current.PodcastDescription + '</p>';
	     		}
	     		output += '<audio preload="none"><source src="' + current.PodcastAudioUrl + '" type="audio/mp3" /></audio>';
	     		output += '<a href="#" class="btn-play btn btn-sm btn-primary r-xlarge mr-1" title="listen"><i class="fas fa-play"></i> Listen</a>';
	     		output += '<a href="' + current.PodcastAudioUrl + '" class="btn-download btn btn-sm btn-outline-primary r-xlarge mr-1" download="download" target="_blank" title="download"><i class="fas fa-download"></i></a>';
	     		output += '<a href="' + current.PodcastTranscriptUrl + '" class="btn-download btn btn-sm btn-outline-primary r-xlarge" download="download" target="_blank" title="read"><i class="fas fa-align-left"></i></a>';
	     		output += '</li>';
	     	}
	     	// show the podcast div and populate the HTML
	     	$( '#podcasts' ).removeClass( 'v-hidden' ).addClass( 'v-visible' ).find( 'ul' ).html( output );
	     	// handling when the play button is clicked
	     	$( '.btn-play' ).on( 'click', function( e ) {
	     		e.preventDefault();
	     		var t = $( this ),
	     			playing = t.find( 'i' ).hasClass( 'fa-pause-circle' ); // save status for later
	     		// reset all of the buttons
	     		$( '.btn-play' ).find( 'i' ).removeClass( 'fa-pause-circle' ).addClass( 'fa-play' );
	     		// pause all of the playing
	     		$( 'audio' ).each( function() {
	     			$( this )[ 0 ].pause();
	     		} );
	     		// if this one wasn't playing...
	     		if ( !playing ) {
	     			// play it
	     			t.parent().find( 'audio' )[ 0 ].play();
	     			// change the play icon to a pause icon
	     			t.find( 'i' ).removeClass( 'fa-play' ).addClass( 'fa-pause-circle' );
	     		}
	     	} );
	     }

	     function populateVideos( val, results ) {
	     	console.log( 'videos', results )
	     	var output = '',
	     		current = '';
	     	for ( var i = 0; i < results.length; i++ ) {
	     		current = results[ i ];
	     		output += '<div class="card">';
	     		output += '<img alt="Card image cap" class="card-img-top" src="' + current.ThumbnailUrl + '" data-video-id="' + current.videoid + '" data-transcript-url="" data-audio-url="" data-lowres-url="">';
	     		output += '<div class="card-body"><div class="card-title h6">' + current.Title + '</div>';
	     		// output += '<p>' + current.Description + '</p>';
	     		output += '</div>';
	     		output += '</div>';
	     	}
	     	$( '#search-video-results .cdc-card-slider' ).append( output ).addClass( 'v-visible' );
	     	slickInit( '.cdc-card-slider', {
	     		'sliderType': 'modal',
	     		'bodyClass': '',
	     		'ariaLabel': '',
	     		'ariaLabelTarget': 'sliderLabel',
	     		'responsive': [ {
	     			'breakpoint': 1200,
	     			'settings': {
	     				'slidesToShow': 3,
	     				'slidesToScroll': 3
	     			}
	     		}, {
	     			'breakpoint': 992,
	     			'settings': {
	     				'slidesToShow': 3,
	     				'slidesToScroll': 3
	     			}
	     		}, {
	     			'breakpoint': 768,
	     			'settings': {
	     				'slidesToShow': 1,
	     				'slidesToScroll': 1
	     			}
	     		}, {
	     			'breakpoint': 576,
	     			'settings': {
	     				'slidesToShow': 1,
	     				'slidesToScroll': 1
	     			}
	     		}, {
	     			'breakpoint': 0,
	     			'settings': {
	     				'slidesToShow': 1,
	     				'slidesToScroll': 1,
	     				'centerPadding': '20px'
	     			}
	     		} ]
	     	} );
	     	// $( '#journals' ).removeClass( 'v-hidden' ).addClass( 'v-visible' ).find( 'ul' ).html( output );  
	     }
	     // show and hide the top search when scrolling
	     window.onscroll = function() {
	     	if ( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
	     		$( '#search2' ).removeClass( 'v-hidden' ).addClass( 'v-visible' );
	     	} else {
	     		$( '#search2' ).removeClass( 'v-visible' ).addClass( 'v-hidden' );
	     	}
	     };
	</script>
</body>
</html>