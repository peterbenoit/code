---
layout: bootstrap
permalink: cards/card-styles.html
description: Different styles for use on cards
title: Card Styles
type: demo
localcss: cards.css
localjs:
includePrismJs: true
externalcss:
externaljs: 
---

<style>
    .card.card-profile-1 {
        position: relative;
    }

    .card-img-wrap {
        position: relative;
        text-align: center;
    }

    .card.card-profile-1 .card-img-top.rounded-circle {
        width: 200px;
        height: 200px;
        margin: 1rem auto;
        object-fit: cover;
        border: 2px solid #000;
    } 
</style>

<div class="container">
    <div class="row mb-4">
        <div class="col-md-4">
            <div class="card card-profile-1">
                <div class="card-img-wrap">
                    <img alt="Card image cap" class="card-img-top img-fluid rounded-circle"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
                </div>
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