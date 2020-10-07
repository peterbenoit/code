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
image: styles.jpg
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
    }

    .card.card-profile-2 .card-img-profile {
        width: 150px;
        margin: 0 auto;
        margin-top: -75px; /* 1/2 of the width */
    }

    .card.card-profile-3 .card-img-profile {
        width: 80px;
        margin-top: -40px; /* 1/2 of the width */
    }

    .card.card.card-profile-3 .card-img-profile.right {
        width: 80px;
        margin-top: -40px; /* 1/2 of the width */
        margin-left: auto;
    }

    .card.card-profile-4 .card-img-profile {
        width: 150px;
        margin: 0 auto;
        margin-top: -75px; /* 1/2 of the width */
        border: 10px solid rgba(255,255,255,.5);
        border-radius: 50%;
        height: 150px; /* same as width */
    }

    .card.card-profile-4a .card-img-profile {
        width: 150px;
        margin: 0 auto;
        margin-top: -75px; /* 1/2 of the width */
        border: 10px solid rgba(255,255,255,.5);
        border-radius: 50%;
        height: 150px; /* same as width */
    }

    .card.card-profile-4a .card-title {
        font-size: 2rem;
        font-weight: bold;
        color: #005eaa;
    }

    .card.card-profile-4a .card-body {
        padding-top: 0;
    }

    .card.card-profile-5 .card-img-profile {
        width: 100px;
        margin: 0 auto;
        margin-top: -50px; /* 1/2 of the width */
        border-radius: 50%;
        height: 100px; /* same as width */
        box-shadow: 0px 2px 4px #000000;
    }

    .fa-facebook-square {
        color: #3b5998
    }

    .fa-twitter-square {
        color: #55acee
    }

    .fab {
        font-size: 2rem;
    }

    .fab:not(last-child) {
        margin-right: .7rem;
    }
</style>

<div class="container">
    <div class="row">
        <div class="col-lg-4 col-md-6 mb-3">
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
        <div class="col-lg-4 col-md-6 mb-3">
            <div class="card card-profile-2">
                <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
                <img alt="Card image profile" class="card-img-profile"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/avatars/avatar%20(1).png">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
            <div class="card card-profile-3">
                <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
                    <img alt="Card image profile" class="card-img-profile"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/avatars/avatar%20(2).png">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-6 mb-3">
            <div class="card card-profile-3">
                <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(39).jpg">
                    <img alt="Card image profile" class="card-img-profile right"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/avatars/avatar%20(3).png">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
            <div class="card card-profile-4">
                <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(16).jpg">
                <img alt="Card image profile" class="card-img-profile"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/users/user%20(3).png">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
            <div class="card card-profile-5">
                <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(38).jpg">
                <img alt="Card image profile" class="card-img-profile"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/users/user%20(2).png">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-6 mb-3">
            <div class="card card-profile-4 text-center">
                <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(16).jpg">
                <img alt="Card image profile" class="card-img-profile"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/users/user%20(3).png">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
            <div class="card card-profile-4a text-center">
                <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(16).jpg">
                <img alt="Card image profile" class="card-img-profile"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/users/user%20(3).png">
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
            <div class="card card-profile-4a text-center">
                <img alt="Card image cap" class="card-img-top img-fluid"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(16).jpg">
                <img alt="Card image profile" class="card-img-profile"
                    src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/users/user%20(3).png">
                <div class="card-body">
                    <h4 class="card-title text-uppercase">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
<div aria-multiselectable="true" class="accordion indicator-plus accordion-white mb-3 mt-3" id="accordion-4" role="tabpanel">
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-3" data-toggle="collapse" id="accordion-4-card-3" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-3">Notes</a>
		</div>
		<div aria-labelledby="accordion-4-card-3" class="collapse show" id="accordion-4-collapse-3" role="tabpanel">
			<div class="card-body">
				<p>Some info on this demo.</p>
				<p>A variety of Bootstrap 4 card styles.</p>
			</div>
		</div>
	</div>
</div>
</div>
