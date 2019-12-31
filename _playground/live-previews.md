---
layout: bootstrap
permalink: playground/live-previews.html
description: Responsive live previewer of demo content
title: Live Previews
type: demo
localcss: previews.css
localjs:
includePrismJs: false
externalcss:
externaljs:
---

<html class="theme-blue" lang="en">
<head>
    <meta charset="UTF-8">
    <title>Live Previews</title>
    <style>
        .row:not(:first-of-type) {
            margin-top: 30px;
        }

        .fs0875 {
            font-size: .875rem;
        }
    </style>
</head>


<div class="container">
    <h1 class="display-3">Live Previews</h1>
    <p class="lead">Demo to include markup into an iframe in which it has all the styles of the template, as well
        as can be resposive (iframe resize). For instance, you can load <a href="#iframe-target" onclick="loadHtml( '.lead' ); return false;"> this paragraph</a> 
        into it, or even load <a href="#iframe-target" onclick="loadHtml( 'template' ); return	false;">predefined templates</a> for testing.</p>
    <div class="row">
        <div class="col previews">
            <div class="row buttons ml-0 mt-3 fs0875">
                <a href="412px" class="rounded-top-left col">XS</a>
                <a href="576px" class="col">SM</a>
                <a href="768px" class="col">MD</a>
                <a href="992px" class="col">LG</a>
                <a href="1200px" class="col">XL</a>
                <a href="1440px" class="rounded-top-right col">XXL</a>
            </div>
            <iframe id="iframe-target" frameborder="0" class="border-top-0"></iframe>                
        </div>
    </div>
    <div class="row">
        <div class="col-5">
            <a href="#iframe-target" class="btn btn-primary" onclick="loadHtml('.card')">Load Card</a>
            <div class="card">
                <img class="card-img-top" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg"
                    alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">You can load more complicated content into it, such as this card.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="col">
                <a href="#iframe-target" class="btn btn-primary" onclick="loadHtml('#accordion')">Load Accordion</a>
                <div id="accordion" role="tablist">
                    <div class="card">
                        <div class="card-header" role="tab" id="headingOne">
                            <h5 class="mb-0">
                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Collapsible Group Item #1
                                </a>
                            </h5>
                        </div>
                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne"
                            data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingTwo">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseTwo"
                                    aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Group Item #2
                                </a>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo"
                            data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingThree">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseThree"
                                    aria-expanded="false" aria-controls="collapseThree">
                                    Collapsible Group Item #3
                                </a>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree"
                            data-parent="#accordion">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    
<script id="prism-source">
    window.addEventListener( 'DOMContentLoaded', function() {
        ( function( $ ) {

            createIframe();
    
            $( '.buttons a' ).on( 'click', function() {
                var h = $( this ).attr( 'href' );
                $( 'iframe' ).css( 'width', h );
                return false;
            } );

            $( 'a[href^="#"]' ).on( 'click', function( e ) {
                e.preventDefault();

                $( 'html, body' ).animate( {
                	'scrollTop': $( '#iframe-target' ).offset().top - 50
                }, 500 ); 
                
                $( '#iframe-target' ).animate( {
                    height: 610,
                } );
            } );
    
        } )( jQuery );
    } );

    var template = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"><div class="container"><a class="navbar-brand" href="#">Start Bootstrap</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ml-auto"><li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="#">About</a></li><li class="nav-item"><a class="nav-link" href="#">Services</a></li><li class="nav-item"><a class="nav-link" href="#">Contact</a></li></ul></div></div></nav><div class="container"><div class="row"><div class="col-lg-12 text-center"><h1 class="mt-5">A Bootstrap 4 Starter Template</h1><p class="lead">Complete with pre-defined file paths and responsive navigation!</p><ul class="list-unstyled"><li>Bootstrap 4.0.0-beta</li><li>jQuery 3.2.1</li></ul></div></div></div>';

    function loadHtml( target ) {
        if ( target.charAt( 0 ) !== '.' && target.charAt( 0 ) !== '#' ) {
            // not a class or an ID, try a variable!
            createIframe( window[ target ] );
        } else {
            createIframe( $( target )[ 0 ].outerHTML );
        }
    }

    function createIframe( body ) {
        body = body || 'Select something to demo';
        var head = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" crossorigin="anonymous"><link href="../css/preview-iframe.css" rel="stylesheet"><style>body{padding: 1rem;padding-top:2rem;}</style></head><body><div class="ruler"><label>0</label><label>100</label><label>200</label><label>300</label><label>400</label><label>500</label><label>600</label><label>700</label><label>800</label><label>900</label><label>1000</label><label>1100</label><label>1200</label><label>1300</label><label>1400</label><label>1500</label><label>1600</label><label>1700</label><label>1800</label><label>1900</label><label>2000</label></div>',
            foot = '<scr' + 'ipt src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></scr' + 'ipt><scr' + 'ipt src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" crossorigin="anonymous"></scr' + 'ipt><scr' + 'ipt src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" crossorigin="anonymous"></scr' + 'ipt></body></html>',
            iframe = document.getElementById( 'iframe-target' );
        if ( iframe ) {
            iframe.contentWindow.document.clear();
            iframe.contentWindow.document.open();
            iframe.contentWindow.document.write( head + body + foot );
            iframe.contentWindow.document.close();
        }
    }
</script>
