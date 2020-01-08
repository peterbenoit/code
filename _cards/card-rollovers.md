---
layout: bootstrap
permalink: cards/card-rollovers.html
description: Different rollover styles for use on cards
title: Card Rollovers
type: demo
localcss: cards.css
localjs:
includePrismJs: true
externalcss: https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css
externaljs: 
---

<style>
    .card-img-wrap {
        position: relative;
        vertical-align: middle;
        overflow: hidden;
    }

    .card-img-wrap div {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        display: none;
       overflow: hidden;
    }

    .card.card-hover-1 .card-img-wrap div span.btn-learn-more {
        position: relative;
        top: 45%;
        transform: translateY(-45%);
        background-color: #005eaa;
        color: white;
        padding: .5rem 2rem;
        text-transform: uppercase;
        font-weight: bold;
    }    
    .card.card-hover-1:hover .card-img-wrap div { 
       display: block;
       background-color:rgba(0, 0, 0, 0.15);
    }
    a.card {
        color: #000
    }
    a.card:hover {
        text-decoration: none;
    }
    .card.card-hover-2:hover .card-img-wrap div { 
        display: block;
        background-color:rgba(0, 94, 170, 0.795);
        padding-left: 1rem;
        padding-right: 1rem;
        color: #fff;
        
    }
    .card.card-hover-2:hover .card-img-wrap span.btn-learn-more {
        float: right;
        font-weight: bolder;
    }
    .card.card-hover-2:hover .card-img-wrap span.btn-learn-more::after {
        content: ' >'
    }

    .card.card-hover-3:hover .card-img-wrap div { 
       display: block;
       background-color:rgba(0, 0, 0, 0.15);
    }

    .card.card-hover-3 .card-img-wrap div span.btn-learn-more {
        position: absolute;
        transform: translateY(-45%);
        background-color: #005eaa;
        color: white;
        padding: 0.2rem 1rem;
        font-weight: bold;
        bottom: -14px;
        right: 0;
    }  

    .card.card-hover-3 .card-img-wrap div span.btn-learn-more.animated {  
        bottom: 0;
    }
</style>

<div class="container">
    <h3>Without Animations</h3>
    <div class="row mb-4">
        <div class="col-md-4">
            <a href="https://cdc.gov" class="card card-hover-1">
                <div class="card-img-wrap">
                    <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
                    <div><span class="btn-learn-more">Learn More</span></div>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </a>
        </div>
        <div class="col-md-4">
            <a href="https://cdc.gov" class="card card-hover-2">
                <div class="card-img-wrap">
                    <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
                    <div class="pt-lg-5 pt-5 pt-md-1">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span class="btn-learn-more">Learn More</span>
                    </div>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </a>
        </div>
        <div class="col-md-4">
            <a href="https://cdc.gov" class="card card-hover-3">
                <div class="card-img-wrap">
                    <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
                    <div><span class="btn-learn-more">Learn More</span></div>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </a>
        </div>
    </div>
    <h3>With Animations</h3>
    <div class="row mb-4">
        <div class="col-md-4">
            <a href="https://cdc.gov" class="card card-hover-1">
                <div class="card-img-wrap">
                    <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
                    <div class="animated pulse">
                        <span class="btn-learn-more">Learn More</span>
                    </div>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </a>
        </div>
        <div class="col-md-4">
            <a href="https://cdc.gov" class="card card-hover-2">
                <div class="card-img-wrap">
                    <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
                    <div class="animated zoomIn faster pt-lg-5 pt-5 pt-md-1">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span class="btn-learn-more">Learn More</span>
                    </div>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </a>
        </div>
        <div class="col-md-4">
            <a href="https://cdc.gov" class="card card-hover-3">
                <div class="card-img-wrap">
                    <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
                    <div><span class="btn-learn-more animated slideInRight faster">Learn More</span></div>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </a>
        </div>
    </div>
  
</div>