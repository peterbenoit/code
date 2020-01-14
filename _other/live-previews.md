---
layout: bootstrap
permalink: other/live-previews.html
description: Responsive live previewer of demo content
title: Live Previews
type: demo
localcss: previews.css
localjs: previews.js
includePrismJs: false
externalcss:
externaljs:
showinnav: true
---
    
<style>
    .row:not(:first-of-type) {
        margin-top: 30px;
    }

    .fs0875 {
        font-size: .875rem;
    }
</style>

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


    
        } )( jQuery );
    } );
</script>
