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
			mobileFirst: true,
			prevArrow: prev,
			nextArrow: next,
			enableAria: true,
			accessibility: true,
			focusOnSelect: false,
			ariaLabel: '',				// label if a label target isn't defined
			ariaLabelTarget: '',		// one or more IDs for the slider label, typically the heading proceeding it
			sliderType: 'standard',		// new optional flag for handling standard vs video vs modal vs jumbotron sliders
			bodyClass: '',				// new optional flag for setting bg color on card body
			sliderCss: '',				// additional CSS on the slider
			sliderClass: '',			// additional CSS class on the slider
			slideCss: '',				// additional CSS on each slide
			slideClass: '',				// additional CSS class on each slide
			callback: null,				// callback function
			showStatus: false,			// always show the slide status indicator?
			rows: 0						// force rows to be 0 unless specifically passed in
		};

	if( 0 === $( target ).length ) {
		console.error( 'Slider ID not defined or found. Please make sure slickInit is called with a slider ID that exists on the page.' );
		return;
	}
	
	// if we're always showing the status indicator, hide the dots
	if( s.showStatus ) { 
		s.dots = false;
	}
	
	// replace our default settings with whatever is passed in
	$.extend( true, defaults, s );

	if( 'video' === defaults.sliderType ) {
		// video slider
		$( t )
			.addClass( 'cdc-video-slider' )
			.find( '.card-img-top' )
			.each( function() {
				var $t = $( this ),
					data = $t.data();

				// if we have data attributes, add them to the footer we're creating here
				if( data ) {
					var footerhtml = '<div class="card-footer"><div class="video-links"><div class="video-transcript">';

					if( data.transcriptUrl ) {
						footerhtml += '<a class="nonHtml noDecoration" href="'+data.transcriptUrl+'" target="new" tabindex="0"><span class="cdc-icon-pdf fill-pdf mr-1 ml-2"></span>View Transcript</a>';
					}
					if( data.audioUrl ) {
						footerhtml += '<a class="nonHtml noDecoration" href="'+data.audioUrl+'" target="new" tabindex="0"><span class="cdc-icon-media fill-media mr-1 ml-2"></span>Audio Description</a>';
					}
					if( data.lowresUrl ) {
						footerhtml += '<a class="nonHtml noDecoration" href="'+data.lowresUrl+'" target="new" tabindex="0"><span class="cdc-icon-video_01 mr-1 ml-2"></span>Low Resolution Video</a>';
					}

					footerhtml += '</div></div></div>';

					$t.parent().find( '.card-body' ).after( footerhtml );
				}

				// wrap the image so we can center the play button inside it
				// then handle clicking on it
				$t.wrap( '<div class="card-img-wrap" />' )
					.before( playbtn )
					.add( '.playbtn' )
					.on( 'click', function( e ) {
						e.stopImmediatePropagation();
						var $c = $( this ),
							video,
							data;

						// if they clicked the play button instead of the video image
						if( $c.hasClass('playbtn') ) {
							// set this to the video image
							$c = $c.next();
						}

						// remove the playbutton
						$c.prev('.playbtn').remove();

						// get the data attributes from the image
						data = $c.data();

						if ( '' !== data[ 'videoId' ] ) {
							// define the video embed
							video = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/'+data[ 'videoId' ]+'?enablejsapi=1&version=3&playerapiid=ytplayer" allow="" allowfullscreen=""></iframe></div>';

							// replace the image with the video embed
							$c.replaceWith( video );						
						} else {
							console.error( 'VIDEO ID is EMPTY or MISSING.' );
						}
					} );
			} );		
	} else if( 'modal' === defaults.sliderType ) {
		// video MODAL slider
		$( t ).addClass( 'video-modal' )
			.find( '.card-img-top' )
			.wrap( '<div class="card-img-wrap" />' )
			.before( playbtn )
			.add( '.playbtn' )
			.on( 'click', function( e ) { 
				e.stopImmediatePropagation();		
				var $t = $( this ),
					data;
			
				// if they clicked the play button instead of the video image
				if( $t.hasClass( 'playbtn' ) ) {
					// set this to the video image
					$t = $t.next();
				}

			data = $t.data()

			// show the modal with the video
			showModal( data );
		} );			   
   	} else if ( 'jumbotron' === defaults.sliderType ) {
		if( 3 < $( t ).find( '.jumbotron').length ) {
			console.error( 'Jumbotron slider should have 3 or fewer images' );
		}

		$( t ).addClass( 'cdc-jumbotron-slider' );
	} else if( 'carousel' === defaults.sliderType ) {
		var t = $( t ),
			clone = t.clone(),
			id = t.attr( 'id' ) + '-clone';

			clone.attr( 'id', id );
			clone.find( '.card-body' ).remove();
			t.after( clone );

			slickInit( '#' + id , {
				'sliderType': 'thumbnail',
				'bodyClass': '',        
				'ariaLabel': '',
				'centerMode': false,
				'ariaLabelTarget': 'sliderLabel',
				'slideCss': {'box-shadow': 'none', 'margin': '0 3px'},
				'callback': function( slider ) {
					slider.addClass( 'cdc-carousel-thumbnail-slider d-none d-lg-block' );

					slider.find( '.card' ).on( 'click', function() {
						var index = $( this ).data( 'slick-index' );
						t[0].slick.slickGoTo( index );
					} );
				},
				'responsive': [ 
					{ 'breakpoint': 1200, 'settings': { 'slidesToShow': 4, 'slidesToScroll': 2 } },         
					{ 'breakpoint': 992, 'settings': { 'slidesToShow': 4, 'slidesToScroll': 2 } },
					{ 'breakpoint': 768, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },          
					{ 'breakpoint': 576, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
					{ 'breakpoint': 0, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, 'centerPadding': '20px' } }
				]
			} );			

	} else {
		console.info( 'No sliderType defined' );
	}
		
	// NOTE: the next two methods do basically the same thing, 
	// EXCEPT we need to call init specifically in order to append the slider-status div	
	// handling the appropriate events for tracking paging info
	$( t ).on( 'init', function( event, slick, currentSlide, nextSlide ) {
		var $t = $( this );
		
		slik = slick;
				
		$t.after( '<div class="cdc-slider-status" />' );
		
		$t.next( '.cdc-slider-status' ).text( '1/' + slick.slideCount );
		
		if ( 'jumbotron' === defaults.sliderType ) {
			$( t ).find( '.slick-dots' ).css( 'bottom', '0' );
		}
		
		// $( t ).find( '.slick-arrow' ).each( function ( i ) { $( this ).attr( 'tabindex', i + 1 ); } );
		
		// handling number key events on the slider
		$( t ).on( 'keydown', function( e ) {
			if ( !isNaN( e.key ) || !e.key === null ) {
				var dots = $( '.slick-dots li' ),
					key = 0;
				
				// get the number - 1
				key = parseInt( e.key ) === 0 ? 9 : parseInt( e.key ) - 1;
				
				// if we have dots, try to click it
				if ( dots.length ) {
					$( dots[ key ] ).click();
				}
			}
		} );
	} );	
	
	// handling the appropriate events for tracking paging info
	$( t ).on( 'reInit afterChange', function( event, slick, currentSlide, nextSlide ) {
		var i = ( currentSlide ? currentSlide : 0 ) + 1,
			$t = $( this );
		
		$t.next( '.cdc-slider-status' ).text( i + '/' + slick.slideCount ); 
	} );
	
	$( t ).on( 'breakpoint', function( event, slick, breakpoint ) {
		// Optional: CSS we want to apply to each slide at breakpoint
		if( '' !== defaults.slideCss ) {
			$( t ).find( '.slick-slide' ).css( defaults.slideCss );
		}

		// Optional: className we want to add at breakpoint
		if( '' !== defaults.slideClass ) {
			$( t ).find( '.slick-slide' ).addClass( defaults.slideClass );
		}

		// Optional: CSS we want to apply to the slider at breakpoint
		if( '' !== defaults.sliderCss ) {
			$( t ).css( defaults.sliderCss );
		}

		// Optional: CSS we want to apply to each slide at breakpoint
		if( '' !== defaults.sliderClass ) {
			$( t ).addClass( defaults.sliderClass );
		}		
	} );
	
	// handle metrics capture on events in the slider
	// handle any embedded videos
	// NOTE: nextSlide doesn't work in afterChange, so this was created
	$( t ).on( 'beforeChange', function( event, slick, currentSlide, nextSlide ) { 
		var $t = $( this ),
			swipeOrDrag = event.changedTouches ?
				'swipe' :
				'mousedrag',
			direction = 'slider-prev';
		
		// this was largely copied from existing code in TP4
		if ( Math.abs( nextSlide - currentSlide ) === 1 ) {
			direction = ( nextSlide - currentSlide > 0 ) ? 'slider-next' : 'slider-prev';
		} else {
			direction = ( nextSlide - currentSlide > 0 ) ? 'slider-prev' : 'slider-next';
		}
		// capture swipe/drag and direction to metrics
		$( event.currentTarget ).trigger( 'metrics-capture', [ direction, swipeOrDrag ] );
		
		// if it's a play-in-place video slider
		if( $t.hasClass( 'cdc-video-slider' ) ) {
			var embed = $( 'iframe.embed-responsive-item' );
			
			// if there's an embedded iframe
			if( $t.has( embed ).length ) {
				// stop all of the videos on navigation
				$( '.embed-responsive-item' ).each( function() {
					$( this )[0].contentWindow.postMessage( '{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*' );
				} );
			}
		}
	} );	

	// initialize the slider with the settings
	$( t ).slick( defaults );
	
	// ARIA
	if( defaults.enableAria ) {
		
		// set aria-label on each CARD
		// remove aria-describedby on each CARD
		$( t ).find( '.card' ).each( function() { 
			var c = $( this ),
				title = c.find( '.card-title'),
				titleText = 'UNDEFINED';
			
			if( title.length ) {
				titleText = title.text().replace( /(\r\n|\n|\r)/gm, '' );
				c.attr( 'aria-label', titleText );
			}
			
			c.removeAttr( 'aria-describedby' );		// there's a ticket for this, where this aria attribute references nothing causing an aXe error in pageinfo, so the "fix" is to remove it
		} );		
		
		// a target for the slider label
		if( '' !== defaults.ariaLabel ) {
			$( t ).attr( 'aria-label' , defaults.ariaLabel );
		}
		else if( '' !== defaults.ariaLabelTarget ) {
			$( t ).attr( 'aria-labelledby' , defaults.ariaLabelTarget );
		} else {
			console.error( 'ariaLabel or ariaLabelTarget must be set in slickInit settings' );
		}		
	}
	
	// TP4 class to add to the card body, should be background classes; e.g. .bg-whatever
	if( '' !== defaults.bodyClass ) {
		$( t ).find( '.card-body' ).each( function() { 
			var c = $( this );
			c.addClass( defaults.bodyClass );
		} );
	}
	
	// Optional: CSS we want to apply to each slide at runtime
	if( '' !== defaults.slideCss ) {
		if( 'object' === typeof defaults.slideCss ) {
			$( t ).find( '.slick-slide' ).css( defaults.slideCss );
		} else {
			console.error( 'slideCss needs to be a JSON representation of a CSS string. E.g. {"border": "1px solid red"} ');
		}
	}
	
	// Optional: CSS class we want to apply to each slide at runtime
	if( '' !== defaults.slideClass ) {
		// remove the first character if it's a dot
		var cn = ( '.' === defaults.slideClass[0]) ? defaults.slideClass.substr(1) : defaults.slideClass;

		$( t ).find( '.slick-slide' ).addClass( cn );		
	}

	// Optional: Classname we want to add to the slider at runtime
	if( '' !== defaults.sliderClass ) {

		// remove the first character if it's a dot
		var cn = ( '.' === defaults.sliderClass[0]) ? defaults.sliderClass.substr(1) : defaults.sliderClass;

		$( t ).addClass( cn );
	}	
	
	// Optional: CSS we want to apply to the slider at runtime
	if( '' !== defaults.sliderCss ) {
		if( 'object' === typeof defaults.sliderCss ) {
			$( t ).css( defaults.sliderCss );
		} else {
			console.error( 'sliderCss needs to be a JSON representation of a CSS string. E.g. {"border": "1px solid red"} ');
		}		
	}	
	
	// Optional: callback function
	if( null !== defaults.callback ) {
		defaults.callback( $( t ), defaults, slik );
	}

	// Optional: always display status
	if( true === defaults.showStatus ) {
		$( t ).next( '.cdc-slider-status' ).addClass( 'd-block' );
	}
}

// modal for the video popup
function showModal( data ) {
	var html =  '<div id="CDC_videoModal" class="modal fade z-supermax" tabindex="-1" role="dialog" aria-label="Video Modal" aria-hidden="true">';
	html += '<div class="modal-dialog modal-lg" >';
	html += '<div class="modal-content">';
	html += '<div class="modal-header" style="height: 66px"><button type="button" class="close rounded-circle" data-dismiss="modal" aria-label="Close"><span class="sr-only">Close</span><svg style="width:24px;height:24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path class="fill-w" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg></button></div>';
	html += '<div class="modal-body">';
	html += '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/'+data[ 'videoId' ]+'?enablejsapi=1&version=3&playerapiid=ytplayer" allow="" allowfullscreen=""></iframe></div>';
	html += '</div>';
	html += '<div class="modal-footer fj-start">';
	html += '	<div class="video-links">';
	html += '	<div class="video-transcript">';
	if( data['transcriptUrl'] ) {
		html += '<a class="nonHtml noDecoration" href="'+data[ 'transcriptUrl' ]+'" target="new"><span class="cdc-icon-pdf fill-pdf mr-1"></span>View Transcript</a>';
	}
	if( data['audioUrl'] ) {
		html += '<a class="nonHtml noDecoration" href="'+data[ 'audioUrl' ]+'" target="new"><span class="ml-3 cdc-icon-media fill-media mr-1"></span>Audio Description</a>';
	}
	if( data['lowresUrl'] ) {
		html += '<a class="nonHtml noDecoration" href="'+data[ 'lowresUrl' ]+'" target="new"><span class="ml-3 cdc-icon-video_01 mr-1"></span>Low Resolution Video</a>';
	}
	html += '</div>';
	html += '</div>';	
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	$( 'body' ).append( html );
	
	$( '#CDC_videoModal' ).modal();
	$( '#CDC_videoModal' ).modal( 'show' );
	// $( 'body' ).removeClass( 'modal-open' );
	
	// remove the modal, stops video playback, too!
	$( '#CDC_videoModal' ).on( 'hidden.bs.modal', function( e ) {
		$( this ).remove();
	} );
}

// base64 of the play button
var playbtn = '<img role="button" class="playbtn" alt="play video button" src="data:image/png;base64,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" />';

// base64 of the prev button
var prev = '<img role="button" class="slider-prev" src="data:image/png;base64,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" alt="previous slide button">';

// base64 of the next button
var next = '<img role="button" src="data:image/png;base64,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" alt="next slide button" class="slider-next">';
