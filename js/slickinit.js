/* eslint-disable complexity */
function slickInit( target, settings ) {
	var t = target,
		s = settings || {},
		slik = null,
		bps = {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
			xxl: 1440
		},
		defaults = {
			dots: true,
			infinite: true,
			speed: 300,
			centerMode: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileCaption: true,		// if we should show the caption in mobile
			mobileFirst: true,
			prevArrow: prev,
			nextArrow: next,
			enableAria: true,
			accessibility: true,
			focusOnSelect: false,
			ariaLabel: '', 				// label if a label target isn't defined
			ariaLabelTarget: '',		// one or more IDs for the slider label, typically the heading proceeding it
			sliderType: 'standard', 	// new optional flag for handling standard vs video vs modal vs jumbotron sliders
			bodyClass: '', 				// new optional flag for setting bg color on card body
			sliderCss: '', 				// additional CSS on the slider
			sliderClass: '', 			// additional CSS class on the slider
			slideCss: '', 				// additional CSS on each slide
			slideClass: '', 			// additional CSS class on each slide
			callback: null, 			// callback function
			showStatus: false, 			// always show the slide status indicator?
			rows: 0 					// force rows to be 0 unless specifically passed in
		};
	if ( 0 === $( target ).length ) {
		console.error( 'Slider ID not defined or found. Please make sure slickInit is called with a slider ID that exists on the page.' );
		return;
	}
	// if we're always showing the status indicator, hide the dots
	if ( s.showStatus ) {
		s.dots = false;
	}
	// replace our default settings with whatever is passed in
	$.extend( true, defaults, s );

	if ( 'video' === defaults.sliderType ) {
		handleVideo( $( t ), defaults );
	} else if ( 'modal' === defaults.sliderType ) {
		handleModal( $( t ), defaults );
	} else if ( 'jumbotron' === defaults.sliderType ) {
		if ( 3 < $( t ).find( '.jumbotron' ).length ) {
			console.error( 'Jumbotron slider should have 3 or fewer images' );
		}
		$( t ).addClass( 'cdc-jumbotron-slider' );
	} else if ( 'standard' === defaults.sliderType ) {
		$( t ).addClass( 'cdc-standard-slider' );
	} else if ( 'carousel' === defaults.sliderType ) {
		handleCarousel( $( t ), defaults );
	} else if ( 'video-carousel' === defaults.sliderType ) {
		handleVideoCarousel( $( t ), defaults );
	} else if ( 0 === defaults.sliderType.trim.length ) {
		// incase we need this, an empty string was passed in so default back to standard
		defaults.sliderType = 'standard';
		$( t ).addClass( 'cdc-standard-slider' );
	} else {
		console.warn( 'Unknown sliderType defined' );
	}

	if ( ! defaults.mobileCaption ) {
		$( t ).addClass( 'cdc-no-mobile-caption' );
	}
	// slides are treated a little differently in centerMode, flagging the slider here for use in CSS later
	if ( defaults.centerMode ) {
		$( t ).addClass( 'cdc-centermode-slider' );
	}
	// NOTE: the next two methods do basically the same thing,
	// EXCEPT we need to call init specifically in order to append the slider-status div
	// handling the appropriate events for tracking paging info
	$( t ).on( 'init', function( event, slick, currentSlide, nextSlide ) {
		slik = slick;
		handleInit( $( this ), slick, defaults );
	} );
	// handling the appropriate events for tracking paging info
	$( t ).on( 'reInit afterChange', function( event, slick, currentSlide, nextSlide ) {
		var i = ( currentSlide ? currentSlide : 0 ) + 1,
			$t = $( this );
		$t.next( '.cdc-slider-status' ).text( i + '/' + slick.slideCount );
	} );
	$( t ).on( 'breakpoint', function( event, slick, breakpoint ) {
		// Optional: CSS we want to apply to each slide at breakpoint
		if ( '' !== defaults.slideCss ) {
			$( t ).find( '.slick-slide' ).css( defaults.slideCss );
		}
		// Optional: className we want to add at breakpoint
		if ( '' !== defaults.slideClass ) {
			$( t ).find( '.slick-slide' ).addClass( defaults.slideClass );
		}
		// Optional: CSS we want to apply to the slider at breakpoint
		if ( '' !== defaults.sliderCss ) {
			$( t ).css( defaults.sliderCss );
		}
		// Optional: CSS we want to apply to each slide at breakpoint
		if ( '' !== defaults.sliderClass ) {
			$( t ).addClass( defaults.sliderClass );
		}
	} );
	// handle metrics capture on events in the slider
	// handle any embedded videos
	// NOTE: nextSlide doesn't work in afterChange, so this was created
	$( t ).on( 'beforeChange', function( event, slick, currentSlide, nextSlide ) {
		handleBeforeChange( $( this ), event, slick, currentSlide, nextSlide );
	} );

	// initialize the slider with the settings
	$( t ).slick( defaults );

	// ARIA
	if ( defaults.enableAria ) {
		// set aria-label on each CARD
		// remove aria-describedby on each CARD
		$( t ).find( '.card' ).each( function() {
			var c = $( this ),
				title = c.find( '.card-title' ),
				titleText = 'UNDEFINED';
			if ( title.length ) {
				titleText = title.text().replace( /(\r\n|\n|\r)/gm, '' );
				c.attr( 'aria-label', titleText );
			}
			c.removeAttr( 'aria-describedby' ); // there's a ticket for this, where this aria attribute references nothing causing an aXe error in pageinfo, so the "fix" is to remove it
		} );
		// a target for the slider label
		if ( '' !== defaults.ariaLabel ) {
			$( t ).attr( 'aria-label', defaults.ariaLabel );
		} else if ( '' !== defaults.ariaLabelTarget ) {
			$( t ).attr( 'aria-labelledby', defaults.ariaLabelTarget );
		} else {
			console.error( 'ariaLabel or ariaLabelTarget must be set in slickInit settings' );
		}
	}
	// TP4 class to add to the card body, should be background classes; e.g. .bg-whatever
	if ( '' !== defaults.bodyClass ) {
		$( t ).find( '.card-body' ).each( function() {
			var c = $( this );
			c.addClass( defaults.bodyClass );
		} );
	}
	// Optional: CSS we want to apply to each slide at runtime
	if ( '' !== defaults.slideCss ) {
		if ( 'object' === typeof defaults.slideCss ) {
			$( t ).find( '.slick-slide' ).css( defaults.slideCss );
		} else {
			console.error( 'slideCss needs to be a JSON representation of a CSS string. E.g. {"border": "1px solid red"} ' );
		}
	}
	// Optional: CSS class we want to apply to each slide at runtime
	if ( '' !== defaults.slideClass ) {
		// remove the first character if it's a dot
		var cn = '.' === defaults.slideClass[ 0 ] ? defaults.slideClass.substr( 1 ) : defaults.slideClass;
		$( t ).find( '.slick-slide' ).addClass( cn );
	}
	// Optional: Classname we want to add to the slider at runtime
	if ( '' !== defaults.sliderClass ) {
		// remove the first character if it's a dot
		var classname = '.' === defaults.sliderClass[ 0 ] ? defaults.sliderClass.substr( 1 ) : defaults.sliderClass;
		$( t ).addClass( classname );
	}
	// Optional: CSS we want to apply to the slider at runtime
	if ( '' !== defaults.sliderCss ) {
		if ( 'object' === typeof defaults.sliderCss ) {
			$( t ).css( defaults.sliderCss );
		} else {
			console.error( 'sliderCss needs to be a JSON representation of a CSS string. E.g. {"border": "1px solid red"} ' );
		}
	}
	// Optional: callback function
	if ( null !== defaults.callback ) {
		defaults.callback( $( t ), defaults, slik );
	}
	// Optional: always display status
	if ( true === defaults.showStatus ) {
		$( t ).next( '.cdc-slider-status' ).addClass( 'd-block' );
	}
}

function handleBeforeChange( $t, event, slick, currentSlide, nextSlide ) {
	var swipeOrDrag = event.changedTouches ? 'swipe' : 'mousedrag',
		direction = 'slider-prev';

	// on the carousel slider, if the user navigates by sliding the top slider, update the thumbnail slider location
	if( $t.hasClass( 'cdc-carousel-slider' ) ) {
		var cts = $('.cdc-carousel-thumbnail-slider'),
			step = 4;

		if( 0 === nextSlide % step ) {
			cts[0].slick.slickGoTo( nextSlide );
		}
	}

	// this was largely copied from existing code in TP4
	if ( 1 === Math.abs( nextSlide - currentSlide ) ) {
		direction = 0 < nextSlide - currentSlide ? 'slider-next' : 'slider-prev';
	} else {
		direction = 0 < nextSlide - currentSlide ? 'slider-prev' : 'slider-next';
	}
	// capture swipe/drag and direction to metrics
	$( event.currentTarget ).trigger( 'metrics-capture', [ direction, swipeOrDrag ] );
	// if it's a play-in-place video slider
	if ( $t.hasClass( 'cdc-video-slider' ) ) {
		var embed = $( 'iframe.embed-responsive-item' );
		// if there's an embedded iframe
		if ( $t.has( embed ).length ) {
			// stop all of the videos on navigation
			$( '.embed-responsive-item' ).each( function() {
				$( this )[ 0 ].contentWindow.postMessage( '{"event":"command","func":"stopVideo","args":""}', '*' );
			} );
		}
	}
}

function handleInit( $t, slick, defaults ) {
	// append the slider status after the slider
	$t.after( '<div class="cdc-slider-status" />' );
	// kick off the slider status count
	$t.next( '.cdc-slider-status' ).text( '1/' + slick.slideCount );
	// reduce the bottom space under the jumbotron
	if ( 'jumbotron' === defaults.sliderType ) {
		$t.find( '.slick-dots' ).css( 'bottom', '0' );
	}
	// add a tabindex to the arrows to make them tabbable
	$t.find( '.slick-arrow' ).attr( 'tabindex', 0 );
	// handling number key events on the slider so the end user can use 1-0 to navigate or space/enter on arrows
	$t.on( 'keydown', function( e ) {
		if ( ! isNaN( e.key ) || null !== e.key ) {
			// tab for the future!
			if ( 'tab' === e.key.toLowerCase() ) {
				// metrics call
			} else if ( ' ' === e.key.toLowerCase() || 'enter' === e.key.toLowerCase() ) {
				// click on the element that's the target of the action
				$( e.target ).click();
			}
			var dots = $( '.slick-dots li' ),
				key = 0;
			// get the number - 1
			key = 0 === parseInt( e.key ) ? 9 : parseInt( e.key ) - 1;
			// if we have dots, try to click it
			if ( dots.length ) {
				$( dots[ key ] ).click();
			}
		}
	} );
}

// clone the slider into a thumbnail slider, removing the card body
function handleCarousel( $t, defaults ) {
	var	clone = $t.clone(),
		id = $t.attr( 'id' ) + '-clone';

	clone.attr( 'id', id );
	clone.find( '.card-body' ).remove();

	clone.find( 'a > .card-img-top' ).unwrap();

	$t.after( clone );

	var thumbnails = defaults.thumbnailsToShow || 4;
	var showThumbnailsInMobile = defaults.showThumbnailsInMobile || false;

	slickInit( '#' + id, {
		'sliderType': 'thumbnail',
		'bodyClass': '',
		'ariaLabel': '',
		'centerMode': false,
		'ariaLabelTarget': 'sliderLabel',
		'slidesToShow': thumbnails,
		'slidesToScroll': thumbnails,
		'slideCss': {
			'box-shadow': 'none',
			'margin': '0 3px'
		},
		'callback': function( slider ) {
			if ( !showThumbnailsInMobile ) {
				slider.addClass( 'd-none' );
			}
			slider.addClass( 'cdc-carousel-thumbnail-slider d-lg-block' );
			slider.find( '.card' ).on( 'click', function() {
				var index = $( this ).data( 'slick-index' );
				$t[ 0 ].slick.slickGoTo( index );
			} );
		},
		'responsive': [ {
			'breakpoint': 1200,
			'settings': {
				'slidesToShow': thumbnails,
				'slidesToScroll': thumbnails
			}
		}, {
			'breakpoint': 992,
			'settings': {
				'slidesToShow': thumbnails,
				'slidesToScroll': thumbnails
			}
		}, {
			'breakpoint': 768,
			'settings': {
				'slidesToShow': thumbnails,
				'slidesToScroll': thumbnails
			}
		}, {
			'breakpoint': 576,
			'settings': {
				'slidesToShow': 3,
				'slidesToScroll': 3
			}
		}, {
			'breakpoint': 0,
			'settings': {
				'slidesToShow': 2,
				'slidesToScroll': 2,
				'centerPadding': '20px'
			}
		} ]
	} );
}

// almost the same as the handleCarousel method, this one uses the URL of the YouTube video to create the card images in the thumbnail slider
function handleVideoCarousel( $t, defaults ) {
	var clone = $t.clone(),
		id = $t.attr( 'id' ) + '-clone';

	clone.attr( 'id', id );
	clone.find( '.card-body' ).remove();

	$t.addClass( 'cdc-video-slider' )

	var thumbnails = defaults.thumbnailsToShow || 4;

	clone.find( '.embed-responsive' ).each( function() {
		var ct = $( this ),
			iframe = ct.find( 'iframe' ),
			src = iframe[0].src,
			regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
			videoId = src.match( regExp ),
			cit = '';

			if( videoId && videoId[2].length === 11 ) {
				cit = '<div class="card-img-wrap">'+playbtn+'<img alt="Card image cap" class="card-img-top" src="http://i.ytimg.com/vi/' + videoId[2] + '/mqdefault.jpg" /></div>';
			}

			ct.after( cit );
			ct.remove();
	} );

	$t.after( clone );

	// init the thumbnail clone
	slickInit( '#' + id, {
		'sliderType': 'thumbnail',
		'bodyClass': '',
		'ariaLabel': '',
		'centerMode': false,
		'ariaLabelTarget': 'sliderLabel',
		'slidesToShow': thumbnails,
		'slidesToScroll': thumbnails,
		'slideCss': {
			'box-shadow': 'none',
			'margin': '0 3px'
		},
		'callback': function( slider ) {
			slider.addClass( 'cdc-carousel-thumbnail-slider d-none d-lg-block' );
			slider.find( '.card' ).on( 'click', function() {
				var index = $( this ).data( 'slick-index' );
				$t[ 0 ].slick.slickGoTo( index );
			} );
		},
		'responsive': [ {
			'breakpoint': 1200,
			'settings': {
				'slidesToShow': thumbnails,
				'slidesToScroll': thumbnails
			}
		}, {
			'breakpoint': 992,
			'settings': {
				'slidesToShow': thumbnails,
				'slidesToScroll': thumbnails
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
}

function handleVideo( $t, defaults ) {
	// video slider
	$t.addClass( 'cdc-video-slider' ).find( '.card-img-top' ).each( function() {
		var $tc = $( this ),
			imgdata = $tc.data();
		// if we have data attributes, add them to the footer we're creating here
		if ( imgdata ) {
			var footerhtml = '<div class="card-footer"><div class="video-links"><div class="video-transcript">';
			if ( imgdata.transcriptUrl ) {
				footerhtml += '<a class="nonHtml noDecoration" href="' + imgdata.transcriptUrl + '" target="new" tabindex="0"><span class="cdc-icon-pdf fill-pdf mr-1 ml-2"></span>View Transcript</a>';
			}
			if ( imgdata.audioUrl ) {
				footerhtml += '<a class="nonHtml noDecoration" href="' + imgdata.audioUrl + '" target="new" tabindex="0"><span class="cdc-icon-media fill-media mr-1 ml-2"></span>Audio Description</a>';
			}
			if ( imgdata.lowresUrl ) {
				footerhtml += '<a class="nonHtml noDecoration" href="' + imgdata.lowresUrl + '" target="new" tabindex="0"><span class="cdc-icon-video_01 mr-1 ml-2"></span>Low Resolution Video</a>';
			}
			footerhtml += '</div></div></div>';
			$tc.parent().find( '.card-body' ).after( footerhtml );
		}
		// wrap the image so we can center the play button inside it
		// then handle clicking on it
		$tc.wrap( '<div class="card-img-wrap" />' ).before( playbtn ).add( '.playbtn' ).on( 'click', function( e ) {
			e.stopImmediatePropagation();
			var $c = $( this ),
				video,
				newData;
			// if they clicked the play button instead of the video image
			if ( $c.hasClass( 'playbtn' ) ) {
				// set this to the video image
				$c = $c.next();
			}
			// remove the playbutton
			$c.prev( '.playbtn' ).remove();
			// get the data attributes from the image

			newData = $c.data();
			if ( '' !== newData.videoId ) {
				// define the video embed
				video = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + newData.videoId + '?enablejsapi=1&version=3&playerapiid=ytplayer" allow="" allowfullscreen=""></iframe></div>';
				// replace the image with the video embed
				$c.replaceWith( video );
			} else {
				console.error( 'VIDEO ID is EMPTY or MISSING.' );
			}
		} );
	} );
}

function handleModal( $t, defaults ) {
	// video MODAL slider
	$t.addClass( 'video-modal' )
		.find( '.card-img-top' )
		.wrap( '<div class="card-img-wrap" />' )
		.before( playbtn )
		.add( '.playbtn' )
		.on( 'click', function( e ) {
			e.stopImmediatePropagation();
			var $tc = $( this ),
				data;
			// if they clicked the play button instead of the video image
			if ( $tc.hasClass( 'playbtn' ) ) {
				// set this to the video image
				$tc = $tc.next();
			}
			data = $tc.data();
			// show the modal with the video
			showModal( data );
		} );
}


// modal for the video popup
function showModal( data ) {
	var output = '<div id="CDC_videoModal" class="modal fade z-supermax" tabindex="-1" role="dialog" aria-label="Video Modal" aria-hidden="true">';
	output += '<div class="modal-dialog modal-lg" >';
	output += '<div class="modal-content">';
	output += '<div class="modal-header" style="height: 66px"><button type="button" class="close rounded-circle" data-dismiss="modal" aria-label="Close"><span class="sr-only">Close</span><svg style="width:24px;height:24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path class="fill-w" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg></button></div>';
	output += '<div class="modal-body">';
	output += '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + data.videoId + '?enablejsapi=1&version=3&playerapiid=ytplayer" allow="" allowfullscreen=""></iframe></div>';
	output += '</div>';
	output += '<div class="modal-footer fj-start">';
	output += '	<div class="video-links">';
	output += '	<div class="video-transcript">';
	if ( data.transcriptUrl ) {
		output += '<a class="nonHtml noDecoration" href="' + data.transcriptUrl + '" target="new"><span class="cdc-icon-pdf fill-pdf mr-1"></span>View Transcript</a>';
	}
	if ( data.audioUrl ) {
		output += '<a class="nonHtml noDecoration" href="' + data.audioUrl + '" target="new"><span class="ml-3 cdc-icon-media fill-media mr-1"></span>Audio Description</a>';
	}
	if ( data.lowresUrl ) {
		output += '<a class="nonHtml noDecoration" href="' + data.lowresUrl + '" target="new"><span class="ml-3 cdc-icon-video_01 mr-1"></span>Low Resolution Video</a>';
	}
	output += '</div>';
	output += '</div>';
	output += '</div>';
	output += '</div>';
	output += '</div>';
	output += '</div>';
	$( 'body' ).append( output );
	$( '#CDC_videoModal' ).modal();
	$( '#CDC_videoModal' ).modal( 'show' );

	// remove the modal, stops video playback, too!
	$( '#CDC_videoModal' ).on( 'hidden.bs.modal', function( e ) {
		$( this ).remove();
	} );
}
// play button
var playbtn = '<img role="button" class="playbtn" alt="play video button" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/slider-icons/play.png" />';
// prev button
var prev = '<img role="button" class="slider-prev" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/slider-icons/left.svg?sanitize=true" alt="previous slide button">';
// next button
var next = '<img role="button" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/slider-icons/right.svg?sanitize=true" alt="next slide button" class="slider-next">';
/* eslint-enable complexity */