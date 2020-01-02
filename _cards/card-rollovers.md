---
layout: bootstrap
permalink: cards/card-rollovers.html
description: Different rollover styles for use on cards
title: Card Rollovers
type: demo
localcss: cards.css
localjs:
includePrismJs: true
externalcss:
externaljs: 
---

<style>
    .card-img-wrap {
        position: relative;
        vertical-align: middle;
    }

    .card-img-wrap div {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .card-img-wrap div span {
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
    .card.card-hover-1 .card-img-wrap div { 
	   display: none;
    }
    a.card {
        color: #000
    }
    a.card:hover {
        text-decoration: none;
    }
</style>

<div class="container">
    <div class="row mb-4">
        <div class="col-md-4">
            <a href="https://cdc.gov" class="card card-hover-1">
                <div class="card-img-wrap">
                    <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
                    <div><span>Learn More</span></div>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </a>
        </div>
        <div class="col-md-4 clearfix d-none d-md-block">
            <div class="card">
                <img alt="Card image cap" class="img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 clearfix d-none d-md-block">
            <div class="card">
                <img alt="Card image cap" class="img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <img alt="Card image cap" class="img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(39).jpg">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 clearfix d-none d-md-block">
            <div class="card">
                <img alt="Card image cap" class="img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(16).jpg">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 clearfix d-none d-md-block">
            <div class="card">
                <img alt="Card image cap" class="img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(38).jpg">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>    
</div>