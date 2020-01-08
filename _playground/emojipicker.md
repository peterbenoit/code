---
layout: bootstrap
permalink: other/emoji-picker.html
description: An emoji picker
title: Emoji Picker!
type: demo
localcss: 
localjs:
includePrismJs: false
externalcss: 
externaljs: 
---

<style>
.emojiPicker, .emojiPicker div.searchbar input:focus, .medium-editor-toolbar li button:focus {
	outline: 0
}
.hljs {
	display: block;
	overflow-x: auto;
	padding: .5em;
	color: #333;
	background: #f8f8f8
}
.diff .hljs-header, .hljs-comment, .hljs-javadoc, .hljs-template_comment {
	color: #998;
	font-style: italic
}
.css .rule .hljs-keyword, .hljs-keyword, .hljs-request, .hljs-status, .hljs-subst, .hljs-winutils, .javascript .hljs-title, .nginx .hljs-title {
	color: #333;
	font-weight: 700
}
.hljs-hexcolor, .hljs-number, .ruby .hljs-constant {
	color: #099
}
.hljs-phpdoc, .hljs-string, .hljs-tag .hljs-value, .tex .hljs-formula {
	color: #d14
}
.coffeescript .hljs-params, .hljs-id, .hljs-title, .scss .hljs-preprocessor {
	color: #900;
	font-weight: 700
}
.clojure .hljs-title, .hljs-subst, .javascript .hljs-title, .lisp .hljs-title {
	font-weight: 400
}
.haskell .hljs-type, .hljs-class .hljs-title, .tex .hljs-command, .vhdl .hljs-literal {
	color: #458;
	font-weight: 700
}
.django .hljs-tag .hljs-keyword, .hljs-rules .hljs-property, .hljs-tag, .hljs-tag .hljs-title {
	color: navy;
	font-weight: 400
}
.hljs-attribute, .hljs-variable, .lisp .hljs-body {
	color: teal
}
.hljs-regexp {
	color: #009926
}
.hljs-prompt, .hljs-symbol, .lisp .hljs-keyword, .ruby .hljs-symbol .hljs-string, .tex .hljs-special {
	color: #990073
}
.clojure .hljs-built_in, .hljs-built_in, .lisp .hljs-title {
	color: #0086b3
}
.hljs-cdata, .hljs-doctype, .hljs-pi, .hljs-pragma, .hljs-preprocessor, .hljs-shebang {
	color: #999;
	font-weight: 700
}
.hljs-deletion {
	background: #fdd
}
.hljs-addition {
	background: #dfd
}
.diff .hljs-change {
	background: #0086b3
}
.hljs-chunk {
	color: #aaa
}
.medium-editor-anchor-preview, .medium-editor-toolbar {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 16px;
	z-index: 2000
}
@-webkit-keyframes medium-editor-image-loading {
	0% {
		-webkit-transform: scale(0);
		transform: scale(0)
	}
	100% {
		-webkit-transform: scale(1);
		transform: scale(1)
	}
}
@keyframes medium-editor-image-loading {
	0% {
		-webkit-transform: scale(0);
		transform: scale(0)
	}
	100% {
		-webkit-transform: scale(1);
		transform: scale(1)
	}
}
@-webkit-keyframes medium-editor-pop-upwards {
	0% {
		opacity: 0;
		-webkit-transform: matrix(.97, 0, 0, 1, 0, 12);
		transform: matrix(.97, 0, 0, 1, 0, 12)
	}
	20% {
		opacity: .7;
		-webkit-transform: matrix(.99, 0, 0, 1, 0, 2);
		transform: matrix(.99, 0, 0, 1, 0, 2)
	}
	40% {
		opacity: 1;
		-webkit-transform: matrix(1, 0, 0, 1, 0, -1);
		transform: matrix(1, 0, 0, 1, 0, -1)
	}
	100% {
		-webkit-transform: matrix(1, 0, 0, 1, 0, 0);
		transform: matrix(1, 0, 0, 1, 0, 0)
	}
}
@keyframes medium-editor-pop-upwards {
	0% {
		opacity: 0;
		-webkit-transform: matrix(.97, 0, 0, 1, 0, 12);
		transform: matrix(.97, 0, 0, 1, 0, 12)
	}
	20% {
		opacity: .7;
		-webkit-transform: matrix(.99, 0, 0, 1, 0, 2);
		transform: matrix(.99, 0, 0, 1, 0, 2)
	}
	40% {
		opacity: 1;
		-webkit-transform: matrix(1, 0, 0, 1, 0, -1);
		transform: matrix(1, 0, 0, 1, 0, -1)
	}
	100% {
		-webkit-transform: matrix(1, 0, 0, 1, 0, 0);
		transform: matrix(1, 0, 0, 1, 0, 0)
	}
}
.medium-editor-anchor-preview {
	left: 0;
	line-height: 1.4;
	max-width: 280px;
	position: absolute;
	text-align: center;
	top: 0;
	word-break: break-all;
	word-wrap: break-word;
	visibility: hidden
}
.medium-editor-anchor-preview a {
	color: #fff;
	display: inline-block;
	margin: 5px 5px 10px
}
.medium-editor-placeholder-relative:after, .medium-editor-placeholder:after {
	content: attr(data-placeholder)!important;
	white-space: pre;
	padding: inherit;
	margin: inherit;
	font-style: italic
}
.medium-editor-anchor-preview-active {
	visibility: visible
}
.medium-editor-dragover {
	background: #ddd
}
.medium-editor-image-loading {
	-webkit-animation: medium-editor-image-loading 1s infinite ease-in-out;
	animation: medium-editor-image-loading 1s infinite ease-in-out;
	background-color: #333;
	border-radius: 100%;
	display: inline-block;
	height: 40px;
	width: 40px
}
.medium-editor-placeholder {
	position: relative
}
.medium-editor-placeholder:after {
	position: absolute;
	left: 0;
	top: 0
}
.medium-editor-placeholder-relative, .medium-editor-placeholder-relative:after {
	position: relative
}
.medium-toolbar-arrow-over:before, .medium-toolbar-arrow-under:after {
	border-style: solid;
	content: '';
	display: block;
	height: 0;
	left: 50%;
	margin-left: -8px;
	position: absolute;
	width: 0
}
.medium-toolbar-arrow-under:after {
	border-width: 8px 8px 0
}
.medium-toolbar-arrow-over:before {
	border-width: 0 8px 8px
}
.medium-editor-toolbar {
	left: 0;
	position: absolute;
	top: 0;
	visibility: hidden
}
.medium-editor-toolbar ul {
	margin: 0;
	padding: 0
}
.medium-editor-toolbar li {
	float: left;
	list-style: none;
	margin: 0;
	padding: 0
}
.medium-editor-toolbar li button {
	box-sizing: border-box;
	cursor: pointer;
	display: block;
	font-size: 14px;
	line-height: 1.33;
	margin: 0;
	padding: 15px;
	text-decoration: none
}
.medium-editor-toolbar li .medium-editor-action-underline {
	text-decoration: underline
}
.medium-editor-toolbar li .medium-editor-action-pre {
	font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
	font-size: 12px;
	font-weight: 100;
	padding: 15px 0
}
.medium-editor-toolbar-active {
	visibility: visible
}
.medium-editor-sticky-toolbar {
	position: fixed;
	top: 1px
}
.medium-editor-relative-toolbar {
	position: relative
}
.medium-editor-toolbar-active.medium-editor-stalker-toolbar {
	-webkit-animation: medium-editor-pop-upwards 160ms forwards linear;
	animation: medium-editor-pop-upwards 160ms forwards linear
}
.medium-editor-action-bold {
	font-weight: bolder
}
.medium-editor-action-italic {
	font-style: italic
}
.medium-editor-toolbar-form {
	display: none
}
.medium-editor-toolbar-form a, .medium-editor-toolbar-form input {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
}
.medium-editor-toolbar-form .medium-editor-toolbar-form-row {
	line-height: 14px;
	margin-left: 5px;
	padding-bottom: 5px
}
.medium-editor-toolbar-form .medium-editor-toolbar-input, .medium-editor-toolbar-form label {
	border: none;
	box-sizing: border-box;
	font-size: 14px;
	margin: 0;
	padding: 6px;
	width: 316px;
	display: inline-block
}
.medium-editor-toolbar-form .medium-editor-toolbar-input:focus, .medium-editor-toolbar-form label:focus {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	box-shadow: none;
	outline: 0
}
.medium-editor-toolbar-form a {
	display: inline-block;
	font-size: 24px;
	font-weight: bolder;
	margin: 0 10px;
	text-decoration: none
}
.medium-editor-toolbar-form-active {
	display: block
}
.medium-editor-toolbar-actions:after {
	clear: both;
	content: "";
	display: table
}
.emojiPicker, .medium-editor-hidden {
	display: none
}
.medium-editor-element {
	word-wrap: break-word;
	min-height: 30px
}
.medium-editor-element img {
	max-width: 100%
}
.medium-editor-element sub {
	vertical-align: sub
}
.medium-editor-element sup {
	vertical-align: super
}
.medium-toolbar-arrow-under:after {
	border-color: #242424 transparent transparent;
	top: 50px
}
.medium-toolbar-arrow-over:before {
	border-color: transparent transparent #242424;
	top: -8px
}
.medium-editor-toolbar {
	background-color: #242424;
	background: -webkit-linear-gradient(top, #242424, rgba(36, 36, 36, .75));
	background: linear-gradient(to bottom, #242424, rgba(36, 36, 36, .75));
	border: 1px solid #000;
	border-radius: 5px;
	box-shadow: 0 0 3px #000
}
.medium-editor-toolbar li button {
	background-color: #242424;
	background: -webkit-linear-gradient(top, #242424, rgba(36, 36, 36, .89));
	background: linear-gradient(to bottom, #242424, rgba(36, 36, 36, .89));
	border: 0;
	border-right: 1px solid #000;
	border-left: 1px solid #333;
	border-left: 1px solid rgba(255, 255, 255, .1);
	box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
	color: #fff;
	height: 50px;
	min-width: 50px;
	-webkit-transition: background-color .2s ease-in;
	transition: background-color .2s ease-in
}
.medium-editor-toolbar li button:hover {
	background-color: #000;
	color: #ff0
}
.medium-editor-toolbar li .medium-editor-button-first {
	border-bottom-left-radius: 5px;
	border-top-left-radius: 5px
}
.medium-editor-toolbar li .medium-editor-button-last {
	border-bottom-right-radius: 5px;
	border-top-right-radius: 5px
}
.medium-editor-toolbar li .medium-editor-button-active {
	background-color: #000;
	background: -webkit-linear-gradient(top, #242424, rgba(0, 0, 0, .89));
	background: linear-gradient(to bottom, #242424, rgba(0, 0, 0, .89));
	color: #fff
}
.medium-editor-toolbar-form {
	background: #242424;
	border-radius: 5px;
	color: #999
}
.medium-editor-toolbar-form .medium-editor-toolbar-input {
	background: #242424;
	box-sizing: border-box;
	color: #ccc;
	height: 50px
}
.medium-editor-toolbar-form a {
	color: #fff
}
.medium-editor-toolbar-anchor-preview {
	background: #242424;
	border-radius: 5px;
	color: #fff
}
.medium-editor-placeholder:after {
	color: #b3b3b1
}
@keyframes fadeIn {
	from {
		opacity: 0
	}
	to {
		opacity: 1
	}
}
.fadeIn {
	animation-name: fadeIn
}
@keyframes fadeInRight {
	from {
		opacity: 0;
		transform: translate3d(100%, 0, 0)
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0)
	}
}
.fadeInRight {
	animation-name: fadeInRight
}
@keyframes fadeInLeft {
	from {
		opacity: 0;
		transform: translate3d(-100%, 0, 0)
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0)
	}
}
.fadeInLeft {
	animation-name: fadeInLeft
}
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translate3d(0, 100%, 0)
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0)
	}
}
.fadeInUp {
	animation-name: fadeInUp
}
@keyframes zoomIn {
	from {
		opacity: 0;
		transform: scale3d(.3, .3, .3)
	}
	50% {
		opacity: 1
	}
}
.zoomIn {
	animation-name: zoomIn
}
@keyframes slideInRight {
	from {
		transform: translate3d(100%, 0, 0);
		visibility: visible
	}
	to {
		transform: translate3d(0, 0, 0)
	}
}
.slideInRight {
	animation-name: slideInRight
}
@keyframes slideInLeft {
	from {
		transform: translate3d(-100%, 0, 0);
		visibility: visible
	}
	to {
		transform: translate3d(0, 0, 0)
	}
}
.slideInLeft {
	animation-name: slideInLeft
}
.emoji--1 {
	background-position: -5px -5px
}
.emoji-alien {
	background-position: -45px -5px
}
.emoji-angel {
	background-position: -85px -5px
}
.emoji-angry {
	background-position: -125px -5px
}
.emoji-anguished {
	background-position: -165px -5px
}
.emoji-astonished {
	background-position: -205px -5px
}
.emoji-athletic_shoe {
	background-position: -245px -5px
}
.emoji-baby {
	background-position: -285px -5px
}
.emoji-bikini {
	background-position: -325px -5px
}
.emoji-blush {
	background-position: -365px -5px
}
.emoji-boot {
	background-position: -405px -5px
}
.emoji-bow {
	background-position: -445px -5px
}
.emoji-boy {
	background-position: -485px -5px
}
.emoji-bride_with_veil {
	background-position: -5px -45px
}
.emoji-briefcase {
	background-position: -45px -45px
}
.emoji-bust_in_silhouette {
	background-position: -85px -45px
}
.emoji-busts_in_silhouette {
	background-position: -125px -45px
}
.emoji-clap {
	background-position: -165px -45px
}
.emoji-closed_umbrella {
	background-position: -205px -45px
}
.emoji-cold_sweat {
	background-position: -245px -45px
}
.emoji-confounded {
	background-position: -285px -45px
}
.emoji-confused {
	background-position: -325px -45px
}
.emoji-construction_worker {
	background-position: -365px -45px
}
.emoji-cop {
	background-position: -405px -45px
}
.emoji-couple {
	background-position: -445px -45px
}
.emoji-couple_with_heart {
	background-position: -485px -45px
}
.emoji-couplekiss {
	background-position: -5px -85px
}
.emoji-crown {
	background-position: -45px -85px
}
.emoji-cry {
	background-position: -85px -85px
}
.emoji-crying_cat_face {
	background-position: -125px -85px
}
.emoji-dancer {
	background-position: -165px -85px
}
.emoji-dancers {
	background-position: -205px -85px
}
.emoji-dark_sunglasses {
	background-position: -245px -85px
}
.emoji-disappointed {
	background-position: -285px -85px
}
.emoji-disappointed_relieved {
	background-position: -325px -85px
}
.emoji-dizzy_face {
	background-position: -365px -85px
}
.emoji-dress {
	background-position: -405px -85px
}
.emoji-ear {
	background-position: -445px -85px
}
.emoji-expressionless {
	background-position: -485px -85px
}
.emoji-eye {
	background-position: -5px -125px
}
.emoji-eyeglasses {
	background-position: -45px -125px
}
.emoji-eyes {
	background-position: -85px -125px
}
.emoji-face_with_head_bandage {
	background-position: -125px -125px
}
.emoji-face_with_rolling_eyes {
	background-position: -165px -125px
}
.emoji-face_with_thermometer {
	background-position: -205px -125px
}
.emoji-facepunch {
	background-position: -245px -125px
}
.emoji-family {
	background-position: -285px -125px
}
.emoji-fearful {
	background-position: -325px -125px
}
.emoji-fist {
	background-position: -365px -125px
}
.emoji-flushed {
	background-position: -405px -125px
}
.emoji-footprints {
	background-position: -445px -125px
}
.emoji-frowning {
	background-position: -485px -125px
}
.emoji-ghost {
	background-position: -5px -165px
}
.emoji-girl {
	background-position: -45px -165px
}
.emoji-grimacing {
	background-position: -85px -165px
}
.emoji-grin {
	background-position: -125px -165px
}
.emoji-grinning {
	background-position: -165px -165px
}
.emoji-guardsman {
	background-position: -205px -165px
}
.emoji-haircut {
	background-position: -245px -165px
}
.emoji-hand {
	background-position: -285px -165px
}
.emoji-handbag {
	background-position: -325px -165px
}
.emoji-hankey {
	background-position: -365px -165px
}
.emoji-heart_eyes {
	background-position: -405px -165px
}
.emoji-heart_eyes_cat {
	background-position: -445px -165px
}
.emoji-helmet_with_white_cross {
	background-position: -485px -165px
}
.emoji-high_heel {
	background-position: -5px -205px
}
.emoji-hugging_face {
	background-position: -45px -205px
}
.emoji-hushed {
	background-position: -85px -205px
}
.emoji-imp {
	background-position: -125px -205px
}
.emoji-information_desk_person {
	background-position: -165px -205px
}
.emoji-innocent {
	background-position: -205px -205px
}
.emoji-japanese_goblin {
	background-position: -245px -205px
}
.emoji-japanese_ogre {
	background-position: -285px -205px
}
.emoji-jeans {
	background-position: -325px -205px
}
.emoji-joy {
	background-position: -365px -205px
}
.emoji-joy_cat {
	background-position: -405px -205px
}
.emoji-kimono {
	background-position: -445px -205px
}
.emoji-kiss {
	background-position: -485px -205px
}
.emoji-kissing {
	background-position: -5px -245px
}
.emoji-kissing_cat {
	background-position: -45px -245px
}
.emoji-kissing_closed_eyes {
	background-position: -85px -245px
}
.emoji-kissing_heart {
	background-position: -125px -245px
}
.emoji-kissing_smiling_eyes {
	background-position: -165px -245px
}
.emoji-laughing {
	background-position: -205px -245px
}
.emoji-lips {
	background-position: -245px -245px
}
.emoji-lipstick {
	background-position: -285px -245px
}
.emoji-man {
	background-position: -325px -245px
}
.emoji-man_with_gua_pi_mao {
	background-position: -365px -245px
}
.emoji-man_with_turban {
	background-position: -405px -245px
}
.emoji-mans_shoe {
	background-position: -445px -245px
}
.emoji-mask {
	background-position: -485px -245px
}
.emoji-massage {
	background-position: -5px -285px
}
.emoji-middle_finger {
	background-position: -45px -285px
}
.emoji-money_mouth_face {
	background-position: -85px -285px
}
.emoji-mortar_board {
	background-position: -125px -285px
}
.emoji-muscle {
	background-position: -165px -285px
}
.emoji-nail_care {
	background-position: -205px -285px
}
.emoji-necktie {
	background-position: -245px -285px
}
.emoji-nerd_face {
	background-position: -285px -285px
}
.emoji-neutral_face {
	background-position: -325px -285px
}
.emoji-no_good {
	background-position: -365px -285px
}
.emoji-no_mouth {
	background-position: -405px -285px
}
.emoji-nose {
	background-position: -445px -285px
}
.emoji-ok_hand {
	background-position: -485px -285px
}
.emoji-ok_woman {
	background-position: -5px -325px
}
.emoji-older_man {
	background-position: -45px -325px
}
.emoji-older_woman {
	background-position: -85px -325px
}
.emoji-open_hands {
	background-position: -125px -325px
}
.emoji-open_mouth {
	background-position: -165px -325px
}
.emoji-pensive {
	background-position: -205px -325px
}
.emoji-persevere {
	background-position: -245px -325px
}
.emoji-person_frowning {
	background-position: -285px -325px
}
.emoji-person_with_blond_hair {
	background-position: -325px -325px
}
.emoji-person_with_pouting_face {
	background-position: -365px -325px
}
.emoji-plus1 {
	background-position: -405px -325px
}
.emoji-point_down {
	background-position: -445px -325px
}
.emoji-point_left {
	background-position: -485px -325px
}
.emoji-point_right {
	background-position: -5px -365px
}
.emoji-point_up {
	background-position: -45px -365px
}
.emoji-point_up_2 {
	background-position: -85px -365px
}
.emoji-pouch {
	background-position: -125px -365px
}
.emoji-pouting_cat {
	background-position: -165px -365px
}
.emoji-pray {
	background-position: -205px -365px
}
.emoji-princess {
	background-position: -245px -365px
}
.emoji-purse {
	background-position: -285px -365px
}
.emoji-rage {
	background-position: -325px -365px
}
.emoji-raised_hand_with_fingers_splayed {
	background-position: -365px -365px
}
.emoji-raised_hands {
	background-position: -405px -365px
}
.emoji-raising_hand {
	background-position: -445px -365px
}
.emoji-relieved {
	background-position: -485px -365px
}
.emoji-ring {
	background-position: -5px -405px
}
.emoji-robot_face {
	background-position: -45px -405px
}
.emoji-runner {
	background-position: -85px -405px
}
.emoji-sandal {
	background-position: -125px -405px
}
.emoji-santa {
	background-position: -165px -405px
}
.emoji-school_satchel {
	background-position: -205px -405px
}
.emoji-scream {
	background-position: -245px -405px
}
.emoji-scream_cat {
	background-position: -285px -405px
}
.emoji-shirt {
	background-position: -325px -405px
}
.emoji-skull {
	background-position: -365px -405px
}
.emoji-sleeping {
	background-position: -405px -405px
}
.emoji-sleepy {
	background-position: -445px -405px
}
.emoji-sleuth_or_spy {
	background-position: -485px -405px
}
.emoji-slightly_frowning_face {
	background-position: -5px -445px
}
.emoji-slightly_smiling_face {
	background-position: -45px -445px
}
.emoji-smile {
	background-position: -85px -445px
}
.emoji-smile_cat {
	background-position: -125px -445px
}
.emoji-smiley {
	background-position: -165px -445px
}
.emoji-smiley_cat {
	background-position: -205px -445px
}
.emoji-smiling_imp {
	background-position: -245px -445px
}
.emoji-smirk {
	background-position: -285px -445px
}
.emoji-smirk_cat {
	background-position: -325px -445px
}
.emoji-sob {
	background-position: -365px -445px
}
.emoji-speaking_head_in_silhouette {
	background-position: -405px -445px
}
.emoji-spock-hand {
	background-position: -445px -445px
}
.emoji-stuck_out_tongue {
	background-position: -485px -445px
}
.emoji-stuck_out_tongue_closed_eyes {
	background-position: -5px -485px
}
.emoji-stuck_out_tongue_winking_eye {
	background-position: -45px -485px
}
.emoji-sunglasses {
	background-position: -85px -485px
}
.emoji-sweat {
	background-position: -125px -485px
}
.emoji-sweat_smile {
	background-position: -165px -485px
}
.emoji-the_horns {
	background-position: -205px -485px
}
.emoji-thinking_face {
	background-position: -245px -485px
}
.emoji-tired_face {
	background-position: -285px -485px
}
.emoji-tongue {
	background-position: -325px -485px
}
.emoji-tophat {
	background-position: -365px -485px
}
.emoji-triumph {
	background-position: -405px -485px
}
.emoji-two_men_holding_hands {
	background-position: -445px -485px
}
.emoji-two_women_holding_hands {
	background-position: -485px -485px
}
.emoji-unamused {
	background-position: -525px -5px
}
.emoji-upside_down_face {
	background-position: -525px -45px
}
.emoji-v {
	background-position: -525px -85px
}
.emoji-walking {
	background-position: -525px -125px
}
.emoji-wave {
	background-position: -525px -165px
}
.emoji-weary {
	background-position: -525px -205px
}
.emoji-white_frowning_face {
	background-position: -525px -245px
}
.emoji-wink {
	background-position: -525px -285px
}
.emoji-woman {
	background-position: -525px -325px
}
.emoji-womans_clothes {
	background-position: -525px -365px
}
.emoji-womans_hat {
	background-position: -525px -405px
}
.emoji-worried {
	background-position: -525px -445px
}
.emoji-writing_hand {
	background-position: -525px -485px
}
.emoji-yum {
	background-position: -5px -525px
}
.emoji-zipper_mouth_face {
	background-position: -45px -525px
}
.emoji-zzz {
	background-position: -85px -525px
}
.emoji-bamboo {
	background-position: -5px -5px
}
.emoji-barely_sunny {
	background-position: -45px -5px
}
.emoji-blossom {
	background-position: -85px -5px
}
.emoji-boom {
	background-position: -125px -5px
}
.emoji-bouquet {
	background-position: -165px -5px
}
.emoji-cherry_blossom {
	background-position: -205px -5px
}
.emoji-chestnut {
	background-position: -245px -5px
}
.emoji-christmas_tree {
	background-position: -285px -5px
}
.emoji-cloud {
	background-position: -5px -45px
}
.emoji-comet {
	background-position: -45px -45px
}
.emoji-crescent_moon {
	background-position: -85px -45px
}
.emoji-dash {
	background-position: -125px -45px
}
.emoji-deciduous_tree {
	background-position: -165px -45px
}
.emoji-dizzy {
	background-position: -205px -45px
}
.emoji-droplet {
	background-position: -245px -45px
}
.emoji-ear_of_rice {
	background-position: -285px -45px
}
.emoji-earth_africa {
	background-position: -5px -85px
}
.emoji-earth_americas {
	background-position: -45px -85px
}
.emoji-earth_asia {
	background-position: -85px -85px
}
.emoji-evergreen_tree {
	background-position: -125px -85px
}
.emoji-fallen_leaf {
	background-position: -165px -85px
}
.emoji-fire {
	background-position: -205px -85px
}
.emoji-first_quarter_moon {
	background-position: -245px -85px
}
.emoji-first_quarter_moon_with_face {
	background-position: -285px -85px
}
.emoji-fog {
	background-position: -5px -125px
}
.emoji-four_leaf_clover {
	background-position: -45px -125px
}
.emoji-full_moon {
	background-position: -85px -125px
}
.emoji-full_moon_with_face {
	background-position: -125px -125px
}
.emoji-hear_no_evil {
	background-position: -165px -125px
}
.emoji-herb {
	background-position: -205px -125px
}
.emoji-hibiscus {
	background-position: -245px -125px
}
.emoji-jack_o_lantern {
	background-position: -285px -125px
}
.emoji-last_quarter_moon {
	background-position: -5px -165px
}
.emoji-last_quarter_moon_with_face {
	background-position: -45px -165px
}
.emoji-leaves {
	background-position: -85px -165px
}
.emoji-lightning {
	background-position: -125px -165px
}
.emoji-maple_leaf {
	background-position: -165px -165px
}
.emoji-moon {
	background-position: -205px -165px
}
.emoji-mostly_sunny {
	background-position: -245px -165px
}
.emoji-mushroom {
	background-position: -285px -165px
}
.emoji-new_moon {
	background-position: -5px -205px
}
.emoji-new_moon_with_face {
	background-position: -45px -205px
}
.emoji-ocean {
	background-position: -85px -205px
}
.emoji-palm_tree {
	background-position: -125px -205px
}
.emoji-partly_sunny {
	background-position: -165px -205px
}
.emoji-partly_sunny_rain {
	background-position: -205px -205px
}
.emoji-rain_cloud {
	background-position: -245px -205px
}
.emoji-rose {
	background-position: -285px -205px
}
.emoji-see_no_evil {
	background-position: -5px -245px
}
.emoji-seedling {
	background-position: -45px -245px
}
.emoji-shamrock {
	background-position: -85px -245px
}
.emoji-shell {
	background-position: -125px -245px
}
.emoji-snow_cloud {
	background-position: -165px -245px
}
.emoji-snowflake {
	background-position: -205px -245px
}
.emoji-snowman {
	background-position: -245px -245px
}
.emoji-sparkles {
	background-position: -285px -245px
}
.emoji-speak_no_evil {
	background-position: -5px -285px
}
.emoji-spider_web {
	background-position: -45px -285px
}
.emoji-star {
	background-position: -85px -285px
}
.emoji-star2 {
	background-position: -125px -285px
}
.emoji-sun_with_face {
	background-position: -165px -285px
}
.emoji-sunflower {
	background-position: -205px -285px
}
.emoji-sunny {
	background-position: -245px -285px
}
.emoji-sweat_drops {
	background-position: -285px -285px
}
.emoji-tanabata_tree {
	background-position: -325px -5px
}
.emoji-thunder_cloud_and_rain {
	background-position: -325px -45px
}
.emoji-tornado {
	background-position: -325px -85px
}
.emoji-tulip {
	background-position: -325px -125px
}
.emoji-umbrella {
	background-position: -325px -165px
}
.emoji-waning_crescent_moon {
	background-position: -325px -205px
}
.emoji-waning_gibbous_moon {
	background-position: -325px -245px
}
.emoji-waxing_crescent_moon {
	background-position: -325px -285px
}
.emoji-wind_blowing_face {
	background-position: -5px -325px
}
.emoji-zap {
	background-position: -45px -325px
}
.emoji-apple {
	background-position: -45px -5px
}
.emoji-baby_bottle {
	background-position: -125px -5px
}
.emoji-banana {
	background-position: -165px -5px
}
.emoji-beer {
	background-position: -205px -5px
}
.emoji-beers {
	background-position: -245px -5px
}
.emoji-bento {
	background-position: -285px -5px
}
.emoji-birthday {
	background-position: -325px -5px
}
.emoji-bread {
	background-position: -45px -45px
}
.emoji-burrito {
	background-position: -85px -45px
}
.emoji-cake {
	background-position: -125px -45px
}
.emoji-candy {
	background-position: -165px -45px
}
.emoji-champagne {
	background-position: -205px -45px
}
.emoji-cheese_wedge {
	background-position: -245px -45px
}
.emoji-cherries {
	background-position: -285px -45px
}
.emoji-chocolate_bar {
	background-position: -325px -45px
}
.emoji-cocktail {
	background-position: -85px -85px
}
.emoji-coffee {
	background-position: -125px -85px
}
.emoji-cookie {
	background-position: -165px -85px
}
.emoji-curry {
	background-position: -205px -85px
}
.emoji-custard {
	background-position: -245px -85px
}
.emoji-dango {
	background-position: -285px -85px
}
.emoji-doughnut {
	background-position: -5px -125px
}
.emoji-egg {
	background-position: -45px -125px
}
.emoji-eggplant {
	background-position: -85px -125px
}
.emoji-fish_cake {
	background-position: -125px -125px
}
.emoji-fork_and_knife {
	background-position: -165px -125px
}
.emoji-fried_shrimp {
	background-position: -205px -125px
}
.emoji-fries {
	background-position: -245px -125px
}
.emoji-grapes {
	background-position: -325px -125px
}
.emoji-green_apple {
	background-position: -5px -165px
}
.emoji-hamburger {
	background-position: -85px -165px
}
.emoji-honey_pot {
	background-position: -165px -165px
}
.emoji-hot_pepper {
	background-position: -205px -165px
}
.emoji-hotdog {
	background-position: -245px -165px
}
.emoji-ice_cream {
	background-position: -285px -165px
}
.emoji-icecream {
	background-position: -325px -165px
}
.emoji-knife_fork_plate {
	background-position: -5px -205px
}
.emoji-lemon {
	background-position: -45px -205px
}
.emoji-lollipop {
	background-position: -85px -205px
}
.emoji-meat_on_bone {
	background-position: -125px -205px
}
.emoji-melon {
	background-position: -205px -205px
}
.emoji-oden {
	background-position: -5px -245px
}
.emoji-peach {
	background-position: -45px -245px
}
.emoji-pear {
	background-position: -85px -245px
}
.emoji-pineapple {
	background-position: -165px -245px
}
.emoji-pizza {
	background-position: -205px -245px
}
.emoji-popcorn {
	background-position: -245px -245px
}
.emoji-poultry_leg {
	background-position: -285px -245px
}
.emoji-ramen {
	background-position: -325px -245px
}
.emoji-rice {
	background-position: -45px -285px
}
.emoji-rice_ball {
	background-position: -85px -285px
}
.emoji-rice_cracker {
	background-position: -125px -285px
}
.emoji-sake {
	background-position: -245px -285px
}
.emoji-shaved_ice {
	background-position: -325px -285px
}
.emoji-spaghetti {
	background-position: -85px -325px
}
.emoji-stew {
	background-position: -165px -325px
}
.emoji-strawberry {
	background-position: -205px -325px
}
.emoji-sushi {
	background-position: -245px -325px
}
.emoji-sweet_potato {
	background-position: -285px -325px
}
.emoji-taco {
	background-position: -325px -325px
}
.emoji-tangerine {
	background-position: -365px -5px
}
.emoji-tea {
	background-position: -365px -45px
}
.emoji-tomato {
	background-position: -365px -125px
}
.emoji-tropical_drink {
	background-position: -365px -205px
}
.emoji-watermelon {
	background-position: -5px -365px
}
.emoji-wine_glass {
	background-position: -45px -365px
}
.emoji-8ball {
	background-position: -5px -5px
}
.emoji-admission_tickets {
	background-position: -45px -5px
}
.emoji-art {
	background-position: -85px -5px
}
.emoji-badminton_racquet_and_shuttlecock {
	background-position: -125px -5px
}
.emoji-baseball {
	background-position: -165px -5px
}
.emoji-basketball {
	background-position: -205px -5px
}
.emoji-bath {
	background-position: -245px -5px
}
.emoji-bicyclist {
	background-position: -5px -45px
}
.emoji-bow_and_arrow {
	background-position: -45px -45px
}
.emoji-bowling {
	background-position: -85px -45px
}
.emoji-circus_tent {
	background-position: -125px -45px
}
.emoji-clapper {
	background-position: -165px -45px
}
.emoji-cricket_bat_and_ball {
	background-position: -205px -45px
}
.emoji-dart {
	background-position: -245px -45px
}
.emoji-field_hockey_stick_and_ball {
	background-position: -5px -85px
}
.emoji-fishing_pole_and_fish {
	background-position: -45px -85px
}
.emoji-football {
	background-position: -85px -85px
}
.emoji-game_die {
	background-position: -125px -85px
}
.emoji-golf {
	background-position: -165px -85px
}
.emoji-golfer {
	background-position: -205px -85px
}
.emoji-guitar {
	background-position: -245px -85px
}
.emoji-headphones {
	background-position: -5px -125px
}
.emoji-horse_racing {
	background-position: -45px -125px
}
.emoji-ice_hockey_stick_and_puck {
	background-position: -85px -125px
}
.emoji-ice_skate {
	background-position: -125px -125px
}
.emoji-man_in_business_suit_levitating {
	background-position: -165px -125px
}
.emoji-medal {
	background-position: -205px -125px
}
.emoji-microphone {
	background-position: -245px -125px
}
.emoji-mountain_bicyclist {
	background-position: -5px -165px
}
.emoji-musical_keyboard {
	background-position: -45px -165px
}
.emoji-musical_score {
	background-position: -85px -165px
}
.emoji-performing_arts {
	background-position: -125px -165px
}
.emoji-person_with_ball {
	background-position: -165px -165px
}
.emoji-reminder_ribbon {
	background-position: -205px -165px
}
.emoji-rosette {
	background-position: -245px -165px
}
.emoji-rowboat {
	background-position: -5px -205px
}
.emoji-rugby_football {
	background-position: -45px -205px
}
.emoji-running_shirt_with_sash {
	background-position: -85px -205px
}
.emoji-saxophone {
	background-position: -125px -205px
}
.emoji-ski {
	background-position: -165px -205px
}
.emoji-skier {
	background-position: -205px -205px
}
.emoji-slot_machine {
	background-position: -245px -205px
}
.emoji-snowboarder {
	background-position: -5px -245px
}
.emoji-soccer {
	background-position: -45px -245px
}
.emoji-space_invader {
	background-position: -85px -245px
}
.emoji-sports_medal {
	background-position: -125px -245px
}
.emoji-surfer {
	background-position: -165px -245px
}
.emoji-swimmer {
	background-position: -205px -245px
}
.emoji-table_tennis_paddle_and_ball {
	background-position: -245px -245px
}
.emoji-tennis {
	background-position: -285px -5px
}
.emoji-ticket {
	background-position: -285px -45px
}
.emoji-trophy {
	background-position: -285px -85px
}
.emoji-trumpet {
	background-position: -285px -125px
}
.emoji-video_game {
	background-position: -285px -165px
}
.emoji-violin {
	background-position: -285px -205px
}
.emoji-volleyball {
	background-position: -285px -245px
}
.emoji-weight_lifter {
	background-position: -5px -285px
}
.emoji-aerial_tramway {
	background-position: -5px -5px
}
.emoji-airplane {
	background-position: -45px -5px
}
.emoji-airplane_arriving {
	background-position: -85px -5px
}
.emoji-airplane_departure {
	background-position: -125px -5px
}
.emoji-ambulance {
	background-position: -165px -5px
}
.emoji-anchor {
	background-position: -205px -5px
}
.emoji-articulated_lorry {
	background-position: -245px -5px
}
.emoji-bank {
	background-position: -285px -5px
}
.emoji-beach_with_umbrella {
	background-position: -325px -5px
}
.emoji-bike {
	background-position: -365px -5px
}
.emoji-blue_car {
	background-position: -5px -45px
}
.emoji-boat {
	background-position: -45px -45px
}
.emoji-bridge_at_night {
	background-position: -85px -45px
}
.emoji-building_construction {
	background-position: -125px -45px
}
.emoji-bullettrain_front {
	background-position: -165px -45px
}
.emoji-bullettrain_side {
	background-position: -205px -45px
}
.emoji-bus {
	background-position: -245px -45px
}
.emoji-busstop {
	background-position: -285px -45px
}
.emoji-camping {
	background-position: -325px -45px
}
.emoji-car {
	background-position: -365px -45px
}
.emoji-carousel_horse {
	background-position: -5px -85px
}
.emoji-checkered_flag {
	background-position: -45px -85px
}
.emoji-church {
	background-position: -85px -85px
}
.emoji-city_sunrise {
	background-position: -125px -85px
}
.emoji-city_sunset {
	background-position: -165px -85px
}
.emoji-cityscape {
	background-position: -205px -85px
}
.emoji-classical_building {
	background-position: -245px -85px
}
.emoji-construction {
	background-position: -285px -85px
}
.emoji-convenience_store {
	background-position: -325px -85px
}
.emoji-department_store {
	background-position: -365px -85px
}
.emoji-derelict_house_building {
	background-position: -5px -125px
}
.emoji-desert {
	background-position: -45px -125px
}
.emoji-desert_island {
	background-position: -85px -125px
}
.emoji-european_castle {
	background-position: -125px -125px
}
.emoji-european_post_office {
	background-position: -165px -125px
}
.emoji-factory {
	background-position: -205px -125px
}
.emoji-ferris_wheel {
	background-position: -245px -125px
}
.emoji-ferry {
	background-position: -285px -125px
}
.emoji-fire_engine {
	background-position: -325px -125px
}
.emoji-fireworks {
	background-position: -365px -125px
}
.emoji-foggy {
	background-position: -5px -165px
}
.emoji-fountain {
	background-position: -45px -165px
}
.emoji-fuelpump {
	background-position: -85px -165px
}
.emoji-helicopter {
	background-position: -125px -165px
}
.emoji-hospital {
	background-position: -165px -165px
}
.emoji-hotel {
	background-position: -205px -165px
}
.emoji-house {
	background-position: -245px -165px
}
.emoji-house_buildings {
	background-position: -285px -165px
}
.emoji-house_with_garden {
	background-position: -325px -165px
}
.emoji-japan {
	background-position: -365px -165px
}
.emoji-japanese_castle {
	background-position: -5px -205px
}
.emoji-kaaba {
	background-position: -45px -205px
}
.emoji-light_rail {
	background-position: -85px -205px
}
.emoji-love_hotel {
	background-position: -125px -205px
}
.emoji-metro {
	background-position: -165px -205px
}
.emoji-milky_way {
	background-position: -205px -205px
}
.emoji-minibus {
	background-position: -245px -205px
}
.emoji-monorail {
	background-position: -285px -205px
}
.emoji-mosque {
	background-position: -325px -205px
}
.emoji-motor_boat {
	background-position: -365px -205px
}
.emoji-motorway {
	background-position: -5px -245px
}
.emoji-mount_fuji {
	background-position: -45px -245px
}
.emoji-mountain {
	background-position: -85px -245px
}
.emoji-mountain_cableway {
	background-position: -125px -245px
}
.emoji-mountain_railway {
	background-position: -165px -245px
}
.emoji-national_park {
	background-position: -205px -245px
}
.emoji-night_with_stars {
	background-position: -245px -245px
}
.emoji-office {
	background-position: -285px -245px
}
.emoji-oncoming_automobile {
	background-position: -325px -245px
}
.emoji-oncoming_bus {
	background-position: -365px -245px
}
.emoji-oncoming_police_car {
	background-position: -5px -285px
}
.emoji-oncoming_taxi {
	background-position: -45px -285px
}
.emoji-passenger_ship {
	background-position: -85px -285px
}
.emoji-police_car {
	background-position: -125px -285px
}
.emoji-post_office {
	background-position: -165px -285px
}
.emoji-racing_car {
	background-position: -205px -285px
}
.emoji-racing_motorcycle {
	background-position: -245px -285px
}
.emoji-railway_car {
	background-position: -285px -285px
}
.emoji-railway_track {
	background-position: -325px -285px
}
.emoji-rainbow {
	background-position: -365px -285px
}
.emoji-rice_scene {
	background-position: -5px -325px
}
.emoji-rocket {
	background-position: -45px -325px
}
.emoji-roller_coaster {
	background-position: -85px -325px
}
.emoji-rotating_light {
	background-position: -125px -325px
}
.emoji-satellite_antenna {
	background-position: -165px -325px
}
.emoji-school {
	background-position: -205px -325px
}
.emoji-seat {
	background-position: -245px -325px
}
.emoji-shinto_shrine {
	background-position: -285px -325px
}
.emoji-ship {
	background-position: -325px -325px
}
.emoji-small_airplane {
	background-position: -365px -325px
}
.emoji-snow_capped_mountain {
	background-position: -5px -365px
}
.emoji-sparkler {
	background-position: -45px -365px
}
.emoji-speedboat {
	background-position: -85px -365px
}
.emoji-stadium {
	background-position: -125px -365px
}
.emoji-stars {
	background-position: -165px -365px
}
.emoji-station {
	background-position: -205px -365px
}
.emoji-statue_of_liberty {
	background-position: -245px -365px
}
.emoji-steam_locomotive {
	background-position: -285px -365px
}
.emoji-sunrise {
	background-position: -325px -365px
}
.emoji-sunrise_over_mountains {
	background-position: -365px -365px
}
.emoji-suspension_railway {
	background-position: -405px -5px
}
.emoji-synagogue {
	background-position: -405px -45px
}
.emoji-taxi {
	background-position: -405px -85px
}
.emoji-tent {
	background-position: -405px -125px
}
.emoji-tokyo_tower {
	background-position: -405px -165px
}
.emoji-tractor {
	background-position: -405px -205px
}
.emoji-traffic_light {
	background-position: -405px -245px
}
.emoji-train {
	background-position: -405px -285px
}
.emoji-train2 {
	background-position: -405px -325px
}
.emoji-tram {
	background-position: -405px -365px
}
.emoji-trolleybus {
	background-position: -5px -405px
}
.emoji-truck {
	background-position: -45px -405px
}
.emoji-vertical_traffic_light {
	background-position: -85px -405px
}
.emoji-volcano {
	background-position: -125px -405px
}
.emoji-wedding {
	background-position: -165px -405px
}
.emoji-alarm_clock {
	background-position: -5px -5px
}
.emoji-alembic {
	background-position: -45px -5px
}
.emoji-amphora {
	background-position: -85px -5px
}
.emoji-balloon {
	background-position: -125px -5px
}
.emoji-bar_chart {
	background-position: -165px -5px
}
.emoji-barber {
	background-position: -205px -5px
}
.emoji-bathtub {
	background-position: -245px -5px
}
.emoji-battery {
	background-position: -285px -5px
}
.emoji-bed {
	background-position: -325px -5px
}
.emoji-bellhop_bell {
	background-position: -365px -5px
}
.emoji-black_circle_for_record {
	background-position: -405px -5px
}
.emoji-black_left_pointing_double_triangle_with_vertical_bar {
	background-position: -445px -5px
}
.emoji-black_right_pointing_double_triangle_with_vertical_bar {
	background-position: -485px -5px
}
.emoji-black_right_pointing_triangle_with_double_vertical_bar {
	background-position: -5px -45px
}
.emoji-black_square_for_stop {
	background-position: -45px -45px
}
.emoji-blue_book {
	background-position: -85px -45px
}
.emoji-bomb {
	background-position: -125px -45px
}
.emoji-book {
	background-position: -165px -45px
}
.emoji-bookmark {
	background-position: -205px -45px
}
.emoji-bookmark_tabs {
	background-position: -245px -45px
}
.emoji-books {
	background-position: -285px -45px
}
.emoji-bulb {
	background-position: -325px -45px
}
.emoji-calendar {
	background-position: -365px -45px
}
.emoji-calling {
	background-position: -405px -45px
}
.emoji-camera {
	background-position: -445px -45px
}
.emoji-camera_with_flash {
	background-position: -485px -45px
}
.emoji-candle {
	background-position: -5px -85px
}
.emoji-card_file_box {
	background-position: -45px -85px
}
.emoji-card_index {
	background-position: -85px -85px
}
.emoji-card_index_dividers {
	background-position: -125px -85px
}
.emoji-cd {
	background-position: -165px -85px
}
.emoji-chains {
	background-position: -205px -85px
}
.emoji-chart_with_downwards_trend {
	background-position: -245px -85px
}
.emoji-chart_with_upwards_trend {
	background-position: -285px -85px
}
.emoji-clipboard {
	background-position: -325px -85px
}
.emoji-closed_book {
	background-position: -365px -85px
}
.emoji-closed_lock_with_key {
	background-position: -405px -85px
}
.emoji-coffin {
	background-position: -445px -85px
}
.emoji-compression {
	background-position: -485px -85px
}
.emoji-computer {
	background-position: -5px -125px
}
.emoji-confetti_ball {
	background-position: -45px -125px
}
.emoji-control_knobs {
	background-position: -85px -125px
}
.emoji-couch_and_lamp {
	background-position: -125px -125px
}
.emoji-credit_card {
	background-position: -165px -125px
}
.emoji-crossed_flags {
	background-position: -205px -125px
}
.emoji-crossed_swords {
	background-position: -245px -125px
}
.emoji-crystal_ball {
	background-position: -285px -125px
}
.emoji-dagger_knife {
	background-position: -325px -125px
}
.emoji-date {
	background-position: -365px -125px
}
.emoji-desktop_computer {
	background-position: -405px -125px
}
.emoji-dollar {
	background-position: -445px -125px
}
.emoji-dolls {
	background-position: -485px -125px
}
.emoji-door {
	background-position: -5px -165px
}
.emoji-double_vertical_bar {
	background-position: -45px -165px
}
.emoji-dvd {
	background-position: -85px -165px
}
.emoji-e-mail {
	background-position: -125px -165px
}
.emoji-electric_plug {
	background-position: -165px -165px
}
.emoji-email {
	background-position: -205px -165px
}
.emoji-envelope_with_arrow {
	background-position: -245px -165px
}
.emoji-euro {
	background-position: -285px -165px
}
.emoji-fast_forward {
	background-position: -325px -165px
}
.emoji-fax {
	background-position: -365px -165px
}
.emoji-file_cabinet {
	background-position: -405px -165px
}
.emoji-file_folder {
	background-position: -445px -165px
}
.emoji-film_frames {
	background-position: -485px -165px
}
.emoji-film_projector {
	background-position: -5px -205px
}
.emoji-flags {
	background-position: -45px -205px
}
.emoji-flashlight {
	background-position: -85px -205px
}
.emoji-floppy_disk {
	background-position: -125px -205px
}
.emoji-frame_with_picture {
	background-position: -165px -205px
}
.emoji-funeral_urn {
	background-position: -205px -205px
}
.emoji-gear {
	background-position: -245px -205px
}
.emoji-gem {
	background-position: -285px -205px
}
.emoji-gift {
	background-position: -325px -205px
}
.emoji-green_book {
	background-position: -365px -205px
}
.emoji-gun {
	background-position: -405px -205px
}
.emoji-hammer {
	background-position: -445px -205px
}
.emoji-hammer_and_pick {
	background-position: -485px -205px
}
.emoji-hammer_and_wrench {
	background-position: -5px -245px
}
.emoji-hocho {
	background-position: -45px -245px
}
.emoji-hole {
	background-position: -85px -245px
}
.emoji-hourglass {
	background-position: -125px -245px
}
.emoji-hourglass_flowing_sand {
	background-position: -165px -245px
}
.emoji-inbox_tray {
	background-position: -205px -245px
}
.emoji-incoming_envelope {
	background-position: -245px -245px
}
.emoji-iphone {
	background-position: -285px -245px
}
.emoji-izakaya_lantern {
	background-position: -325px -245px
}
.emoji-joystick {
	background-position: -365px -245px
}
.emoji-key {
	background-position: -405px -245px
}
.emoji-keyboard {
	background-position: -445px -245px
}
.emoji-label {
	background-position: -485px -245px
}
.emoji-ledger {
	background-position: -5px -285px
}
.emoji-left_speech_bubble {
	background-position: -45px -285px
}
.emoji-level_slider {
	background-position: -85px -285px
}
.emoji-link {
	background-position: -125px -285px
}
.emoji-linked_paperclips {
	background-position: -165px -285px
}
.emoji-lock {
	background-position: -205px -285px
}
.emoji-lock_with_ink_pen {
	background-position: -245px -285px
}
.emoji-love_letter {
	background-position: -285px -285px
}
.emoji-lower_left_ballpoint_pen {
	background-position: -325px -285px
}
.emoji-lower_left_crayon {
	background-position: -365px -285px
}
.emoji-lower_left_fountain_pen {
	background-position: -405px -285px
}
.emoji-lower_left_paintbrush {
	background-position: -445px -285px
}
.emoji-mag {
	background-position: -485px -285px
}
.emoji-mag_right {
	background-position: -5px -325px
}
.emoji-mailbox {
	background-position: -45px -325px
}
.emoji-mailbox_closed {
	background-position: -85px -325px
}
.emoji-mailbox_with_mail {
	background-position: -125px -325px
}
.emoji-mailbox_with_no_mail {
	background-position: -165px -325px
}
.emoji-mantelpiece_clock {
	background-position: -205px -325px
}
.emoji-memo {
	background-position: -245px -325px
}
.emoji-microscope {
	background-position: -285px -325px
}
.emoji-minidisc {
	background-position: -325px -325px
}
.emoji-money_with_wings {
	background-position: -365px -325px
}
.emoji-moneybag {
	background-position: -405px -325px
}
.emoji-movie_camera {
	background-position: -445px -325px
}
.emoji-moyai {
	background-position: -485px -325px
}
.emoji-newspaper {
	background-position: -5px -365px
}
.emoji-notebook {
	background-position: -45px -365px
}
.emoji-notebook_with_decorative_cover {
	background-position: -85px -365px
}
.emoji-nut_and_bolt {
	background-position: -125px -365px
}
.emoji-oil_drum {
	background-position: -165px -365px
}
.emoji-old_key {
	background-position: -205px -365px
}
.emoji-open_file_folder {
	background-position: -245px -365px
}
.emoji-orange_book {
	background-position: -285px -365px
}
.emoji-outbox_tray {
	background-position: -325px -365px
}
.emoji-package {
	background-position: -365px -365px
}
.emoji-page_facing_up {
	background-position: -405px -365px
}
.emoji-page_with_curl {
	background-position: -445px -365px
}
.emoji-pager {
	background-position: -485px -365px
}
.emoji-paperclip {
	background-position: -5px -405px
}
.emoji-pencil2 {
	background-position: -45px -405px
}
.emoji-phone {
	background-position: -85px -405px
}
.emoji-pick {
	background-position: -125px -405px
}
.emoji-pill {
	background-position: -165px -405px
}
.emoji-postal_horn {
	background-position: -205px -405px
}
.emoji-postbox {
	background-position: -245px -405px
}
.emoji-pound {
	background-position: -285px -405px
}
.emoji-prayer_beads {
	background-position: -325px -405px
}
.emoji-printer {
	background-position: -365px -405px
}
.emoji-pushpin {
	background-position: -405px -405px
}
.emoji-radio {
	background-position: -445px -405px
}
.emoji-ribbon {
	background-position: -485px -405px
}
.emoji-right_anger_bubble {
	background-position: -5px -445px
}
.emoji-rolled_up_newspaper {
	background-position: -45px -445px
}
.emoji-round_pushpin {
	background-position: -85px -445px
}
.emoji-satellite {
	background-position: -125px -445px
}
.emoji-scales {
	background-position: -165px -445px
}
.emoji-scissors {
	background-position: -205px -445px
}
.emoji-scroll {
	background-position: -245px -445px
}
.emoji-shield {
	background-position: -285px -445px
}
.emoji-shopping_bags {
	background-position: -325px -445px
}
.emoji-shower {
	background-position: -365px -445px
}
.emoji-skull_and_crossbones {
	background-position: -405px -445px
}
.emoji-sleeping_accommodation {
	background-position: -445px -445px
}
.emoji-smoking {
	background-position: -485px -445px
}
.emoji-spiral_calendar_pad {
	background-position: -5px -485px
}
.emoji-spiral_note_pad {
	background-position: -45px -485px
}
.emoji-stopwatch {
	background-position: -85px -485px
}
.emoji-straight_ruler {
	background-position: -125px -485px
}
.emoji-studio_microphone {
	background-position: -165px -485px
}
.emoji-syringe {
	background-position: -205px -485px
}
.emoji-tada {
	background-position: -245px -485px
}
.emoji-telephone_receiver {
	background-position: -285px -485px
}
.emoji-telescope {
	background-position: -325px -485px
}
.emoji-thermometer {
	background-position: -365px -485px
}
.emoji-three_button_mouse {
	background-position: -405px -485px
}
.emoji-timer_clock {
	background-position: -445px -485px
}
.emoji-toilet {
	background-position: -485px -485px
}
.emoji-trackball {
	background-position: -525px -5px
}
.emoji-triangular_flag_on_post {
	background-position: -525px -45px
}
.emoji-triangular_ruler {
	background-position: -525px -85px
}
.emoji-tv {
	background-position: -525px -125px
}
.emoji-umbrella_on_ground {
	background-position: -525px -165px
}
.emoji-unlock {
	background-position: -525px -205px
}
.emoji-vhs {
	background-position: -525px -245px
}
.emoji-video_camera {
	background-position: -525px -285px
}
.emoji-wastebasket {
	background-position: -525px -325px
}
.emoji-watch {
	background-position: -525px -365px
}
.emoji-waving_black_flag {
	background-position: -525px -405px
}
.emoji-waving_white_flag {
	background-position: -525px -445px
}
.emoji-wind_chime {
	background-position: -525px -485px
}
.emoji-world_map {
	background-position: -5px -525px
}
.emoji-wrench {
	background-position: -45px -525px
}
.emoji-yen {
	background-position: -85px -525px
}
.emoji-100 {
	background-position: -5px -5px
}
.emoji-1234 {
	background-position: -45px -5px
}
.emoji-a {
	background-position: -85px -5px
}
.emoji-ab {
	background-position: -125px -5px
}
.emoji-abc {
	background-position: -165px -5px
}
.emoji-abcd {
	background-position: -205px -5px
}
.emoji-accept {
	background-position: -245px -5px
}
.emoji-anger {
	background-position: -285px -5px
}
.emoji-aquarius {
	background-position: -325px -5px
}
.emoji-aries {
	background-position: -365px -5px
}
.emoji-arrow_backward {
	background-position: -405px -5px
}
.emoji-arrow_double_down {
	background-position: -445px -5px
}
.emoji-arrow_double_up {
	background-position: -485px -5px
}
.emoji-arrow_down {
	background-position: -525px -5px
}
.emoji-arrow_down_small {
	background-position: -565px -5px
}
.emoji-arrow_forward {
	background-position: -605px -5px
}
.emoji-arrow_heading_down {
	background-position: -5px -45px
}
.emoji-arrow_heading_up {
	background-position: -45px -45px
}
.emoji-arrow_left {
	background-position: -85px -45px
}
.emoji-arrow_lower_left {
	background-position: -125px -45px
}
.emoji-arrow_lower_right {
	background-position: -165px -45px
}
.emoji-arrow_right {
	background-position: -205px -45px
}
.emoji-arrow_right_hook {
	background-position: -245px -45px
}
.emoji-arrow_up {
	background-position: -285px -45px
}
.emoji-arrow_up_down {
	background-position: -325px -45px
}
.emoji-arrow_up_small {
	background-position: -365px -45px
}
.emoji-arrow_upper_left {
	background-position: -405px -45px
}
.emoji-arrow_upper_right {
	background-position: -445px -45px
}
.emoji-arrows_clockwise {
	background-position: -485px -45px
}
.emoji-arrows_counterclockwise {
	background-position: -525px -45px
}
.emoji-atm {
	background-position: -565px -45px
}
.emoji-atom_symbol {
	background-position: -605px -45px
}
.emoji-b {
	background-position: -5px -85px
}
.emoji-baby_symbol {
	background-position: -45px -85px
}
.emoji-back {
	background-position: -85px -85px
}
.emoji-baggage_claim {
	background-position: -125px -85px
}
.emoji-ballot_box_with_check {
	background-position: -165px -85px
}
.emoji-bangbang {
	background-position: -205px -85px
}
.emoji-beginner {
	background-position: -245px -85px
}
.emoji-bell {
	background-position: -285px -85px
}
.emoji-biohazard_sign {
	background-position: -325px -85px
}
.emoji-black_circle {
	background-position: -365px -85px
}
.emoji-black_joker {
	background-position: -405px -85px
}
.emoji-black_large_square {
	background-position: -445px -85px
}
.emoji-black_medium_small_square {
	background-position: -485px -85px
}
.emoji-black_medium_square {
	background-position: -525px -85px
}
.emoji-black_small_square {
	background-position: -565px -85px
}
.emoji-black_square_button {
	background-position: -605px -85px
}
.emoji-blue_heart {
	background-position: -5px -125px
}
.emoji-broken_heart {
	background-position: -45px -125px
}
.emoji-cancer {
	background-position: -85px -125px
}
.emoji-capital_abcd {
	background-position: -125px -125px
}
.emoji-capricorn {
	background-position: -165px -125px
}
.emoji-chart {
	background-position: -205px -125px
}
.emoji-children_crossing {
	background-position: -245px -125px
}
.emoji-cinema {
	background-position: -285px -125px
}
.emoji-cl {
	background-position: -325px -125px
}
.emoji-clock1 {
	background-position: -365px -125px
}
.emoji-clock10 {
	background-position: -405px -125px
}
.emoji-clock1030 {
	background-position: -445px -125px
}
.emoji-clock11 {
	background-position: -485px -125px
}
.emoji-clock1130 {
	background-position: -525px -125px
}
.emoji-clock12 {
	background-position: -565px -125px
}
.emoji-clock1230 {
	background-position: -605px -125px
}
.emoji-clock130 {
	background-position: -5px -165px
}
.emoji-clock2 {
	background-position: -45px -165px
}
.emoji-clock230 {
	background-position: -85px -165px
}
.emoji-clock3 {
	background-position: -125px -165px
}
.emoji-clock330 {
	background-position: -165px -165px
}
.emoji-clock4 {
	background-position: -205px -165px
}
.emoji-clock430 {
	background-position: -245px -165px
}
.emoji-clock5 {
	background-position: -285px -165px
}
.emoji-clock530 {
	background-position: -325px -165px
}
.emoji-clock6 {
	background-position: -365px -165px
}
.emoji-clock630 {
	background-position: -405px -165px
}
.emoji-clock7 {
	background-position: -445px -165px
}
.emoji-clock730 {
	background-position: -485px -165px
}
.emoji-clock8 {
	background-position: -525px -165px
}
.emoji-clock830 {
	background-position: -565px -165px
}
.emoji-clock9 {
	background-position: -605px -165px
}
.emoji-clock930 {
	background-position: -5px -205px
}
.emoji-clubs {
	background-position: -45px -205px
}
.emoji-congratulations {
	background-position: -85px -205px
}
.emoji-cool {
	background-position: -125px -205px
}
.emoji-copyright {
	background-position: -165px -205px
}
.emoji-cupid {
	background-position: -205px -205px
}
.emoji-curly_loop {
	background-position: -245px -205px
}
.emoji-customs {
	background-position: -285px -205px
}
.emoji-cyclone {
	background-position: -325px -205px
}
.emoji-diamond_shape_with_a_dot_inside {
	background-position: -365px -205px
}
.emoji-diamonds {
	background-position: -405px -205px
}
.emoji-do_not_litter {
	background-position: -445px -205px
}
.emoji-eight {
	background-position: -485px -205px
}
.emoji-eight_pointed_black_star {
	background-position: -525px -205px
}
.emoji-eight_spoked_asterisk {
	background-position: -565px -205px
}
.emoji-end {
	background-position: -605px -205px
}
.emoji-exclamation {
	background-position: -5px -245px
}
.emoji-five {
	background-position: -45px -245px
}
.emoji-fleur_de_lis {
	background-position: -85px -245px
}
.emoji-flower_playing_cards {
	background-position: -125px -245px
}
.emoji-four {
	background-position: -165px -245px
}
.emoji-free {
	background-position: -205px -245px
}
.emoji-gemini {
	background-position: -245px -245px
}
.emoji-gift_heart {
	background-position: -285px -245px
}
.emoji-globe_with_meridians {
	background-position: -325px -245px
}
.emoji-green_heart {
	background-position: -365px -245px
}
.emoji-grey_exclamation {
	background-position: -405px -245px
}
.emoji-grey_question {
	background-position: -445px -245px
}
.emoji-hash {
	background-position: -485px -245px
}
.emoji-heart {
	background-position: -525px -245px
}
.emoji-heart_decoration {
	background-position: -565px -245px
}
.emoji-heartbeat {
	background-position: -605px -245px
}
.emoji-heartpulse {
	background-position: -5px -285px
}
.emoji-hearts {
	background-position: -45px -285px
}
.emoji-heavy_check_mark {
	background-position: -85px -285px
}
.emoji-heavy_division_sign {
	background-position: -125px -285px
}
.emoji-heavy_dollar_sign {
	background-position: -165px -285px
}
.emoji-heavy_heart_exclamation_mark_ornament {
	background-position: -205px -285px
}
.emoji-heavy_minus_sign {
	background-position: -245px -285px
}
.emoji-heavy_multiplication_x {
	background-position: -285px -285px
}
.emoji-heavy_plus_sign {
	background-position: -325px -285px
}
.emoji-high_brightness {
	background-position: -365px -285px
}
.emoji-hotsprings {
	background-position: -405px -285px
}
.emoji-id {
	background-position: -445px -285px
}
.emoji-ideograph_advantage {
	background-position: -485px -285px
}
.emoji-information_source {
	background-position: -525px -285px
}
.emoji-interrobang {
	background-position: -565px -285px
}
.emoji-keycap_ten {
	background-position: -605px -285px
}
.emoji-koko {
	background-position: -5px -325px
}
.emoji-large_blue_circle {
	background-position: -45px -325px
}
.emoji-large_blue_diamond {
	background-position: -85px -325px
}
.emoji-large_orange_diamond {
	background-position: -125px -325px
}
.emoji-latin_cross {
	background-position: -165px -325px
}
.emoji-left_luggage {
	background-position: -205px -325px
}
.emoji-left_right_arrow {
	background-position: -245px -325px
}
.emoji-leftwards_arrow_with_hook {
	background-position: -285px -325px
}
.emoji-leo {
	background-position: -325px -325px
}
.emoji-libra {
	background-position: -365px -325px
}
.emoji-loop {
	background-position: -405px -325px
}
.emoji-loud_sound {
	background-position: -445px -325px
}
.emoji-loudspeaker {
	background-position: -485px -325px
}
.emoji-low_brightness {
	background-position: -525px -325px
}
.emoji-m {
	background-position: -565px -325px
}
.emoji-mahjong {
	background-position: -605px -325px
}
.emoji-mega {
	background-position: -5px -365px
}
.emoji-menorah_with_nine_branches {
	background-position: -45px -365px
}
.emoji-mens {
	background-position: -85px -365px
}
.emoji-mobile_phone_off {
	background-position: -125px -365px
}
.emoji-musical_note {
	background-position: -165px -365px
}
.emoji-mute {
	background-position: -205px -365px
}
.emoji-name_badge {
	background-position: -245px -365px
}
.emoji-negative_squared_cross_mark {
	background-position: -285px -365px
}
.emoji-new {
	background-position: -325px -365px
}
.emoji-ng {
	background-position: -365px -365px
}
.emoji-nine {
	background-position: -405px -365px
}
.emoji-no_bell {
	background-position: -445px -365px
}
.emoji-no_bicycles {
	background-position: -485px -365px
}
.emoji-no_entry {
	background-position: -525px -365px
}
.emoji-no_entry_sign {
	background-position: -565px -365px
}
.emoji-no_mobile_phones {
	background-position: -605px -365px
}
.emoji-no_pedestrians {
	background-position: -5px -405px
}
.emoji-no_smoking {
	background-position: -45px -405px
}
.emoji-non-potable_water {
	background-position: -85px -405px
}
.emoji-notes {
	background-position: -125px -405px
}
.emoji-o {
	background-position: -165px -405px
}
.emoji-o2 {
	background-position: -205px -405px
}
.emoji-ok {
	background-position: -245px -405px
}
.emoji-om_symbol {
	background-position: -285px -405px
}
.emoji-on {
	background-position: -325px -405px
}
.emoji-one {
	background-position: -365px -405px
}
.emoji-ophiuchus {
	background-position: -405px -405px
}
.emoji-orthodox_cross {
	background-position: -445px -405px
}
.emoji-parking {
	background-position: -485px -405px
}
.emoji-part_alternation_mark {
	background-position: -525px -405px
}
.emoji-passport_control {
	background-position: -565px -405px
}
.emoji-peace_symbol {
	background-position: -605px -405px
}
.emoji-pisces {
	background-position: -5px -445px
}
.emoji-place_of_worship {
	background-position: -45px -445px
}
.emoji-potable_water {
	background-position: -85px -445px
}
.emoji-purple_heart {
	background-position: -125px -445px
}
.emoji-put_litter_in_its_place {
	background-position: -165px -445px
}
.emoji-question {
	background-position: -205px -445px
}
.emoji-radio_button {
	background-position: -245px -445px
}
.emoji-radioactive_sign {
	background-position: -285px -445px
}
.emoji-recycle {
	background-position: -325px -445px
}
.emoji-red_circle {
	background-position: -365px -445px
}
.emoji-registered {
	background-position: -405px -445px
}
.emoji-repeat {
	background-position: -445px -445px
}
.emoji-repeat_one {
	background-position: -485px -445px
}
.emoji-restroom {
	background-position: -525px -445px
}
.emoji-revolving_hearts {
	background-position: -565px -445px
}
.emoji-rewind {
	background-position: -605px -445px
}
.emoji-sa {
	background-position: -5px -485px
}
.emoji-sagittarius {
	background-position: -45px -485px
}
.emoji-scorpius {
	background-position: -85px -485px
}
.emoji-secret {
	background-position: -125px -485px
}
.emoji-seven {
	background-position: -165px -485px
}
.emoji-signal_strength {
	background-position: -205px -485px
}
.emoji-six {
	background-position: -245px -485px
}
.emoji-six_pointed_star {
	background-position: -285px -485px
}
.emoji-small_blue_diamond {
	background-position: -325px -485px
}
.emoji-small_orange_diamond {
	background-position: -365px -485px
}
.emoji-small_red_triangle {
	background-position: -405px -485px
}
.emoji-small_red_triangle_down {
	background-position: -445px -485px
}
.emoji-soon {
	background-position: -485px -485px
}
.emoji-sos {
	background-position: -525px -485px
}
.emoji-sound {
	background-position: -565px -485px
}
.emoji-spades {
	background-position: -605px -485px
}
.emoji-sparkle {
	background-position: -5px -525px
}
.emoji-sparkling_heart {
	background-position: -45px -525px
}
.emoji-speaker {
	background-position: -85px -525px
}
.emoji-speech_balloon {
	background-position: -125px -525px
}
.emoji-star_and_crescent {
	background-position: -165px -525px
}
.emoji-star_of_david {
	background-position: -205px -525px
}
.emoji-symbols {
	background-position: -245px -525px
}
.emoji-taurus {
	background-position: -285px -525px
}
.emoji-thought_balloon {
	background-position: -325px -525px
}
.emoji-three {
	background-position: -365px -525px
}
.emoji-tm {
	background-position: -405px -525px
}
.emoji-top {
	background-position: -445px -525px
}
.emoji-trident {
	background-position: -485px -525px
}
.emoji-twisted_rightwards_arrows {
	background-position: -525px -525px
}
.emoji-two {
	background-position: -565px -525px
}
.emoji-two_hearts {
	background-position: -605px -525px
}
.emoji-u5272 {
	background-position: -5px -565px
}
.emoji-u5408 {
	background-position: -45px -565px
}
.emoji-u55b6 {
	background-position: -85px -565px
}
.emoji-u6307 {
	background-position: -125px -565px
}
.emoji-u6708 {
	background-position: -165px -565px
}
.emoji-u6709 {
	background-position: -205px -565px
}
.emoji-u6e80 {
	background-position: -245px -565px
}
.emoji-u7121 {
	background-position: -285px -565px
}
.emoji-u7533 {
	background-position: -325px -565px
}
.emoji-u7981 {
	background-position: -365px -565px
}
.emoji-u7a7a {
	background-position: -405px -565px
}
.emoji-underage {
	background-position: -445px -565px
}
.emoji-up {
	background-position: -485px -565px
}
.emoji-vibration_mode {
	background-position: -525px -565px
}
.emoji-virgo {
	background-position: -565px -565px
}
.emoji-vs {
	background-position: -605px -565px
}
.emoji-warning {
	background-position: -5px -605px
}
.emoji-wavy_dash {
	background-position: -45px -605px
}
.emoji-wc {
	background-position: -85px -605px
}
.emoji-wheel_of_dharma {
	background-position: -125px -605px
}
.emoji-wheelchair {
	background-position: -165px -605px
}
.emoji-white_check_mark {
	background-position: -205px -605px
}
.emoji-white_circle {
	background-position: -245px -605px
}
.emoji-white_flower {
	background-position: -285px -605px
}
.emoji-white_large_square {
	background-position: -325px -605px
}
.emoji-white_medium_small_square {
	background-position: -365px -605px
}
.emoji-white_medium_square {
	background-position: -405px -605px
}
.emoji-white_small_square {
	background-position: -445px -605px
}
.emoji-white_square_button {
	background-position: -485px -605px
}
.emoji-womens {
	background-position: -525px -605px
}
.emoji-x {
	background-position: -565px -605px
}
.emoji-yellow_heart {
	background-position: -605px -605px
}
.emoji-yin_yang {
	background-position: -645px -5px
}
.emoji-zero {
	background-position: -645px -45px
}
.emojiPicker {
	position: absolute;
	border: none;
	box-shadow: 0 0 7px #555;
	border-radius: 4px;
	font-family: Helvetica, Arial, sans-serif;
	background: #fff
}
.emojiPicker:after {
	position: absolute;
	display: block;
	content: '';
	clear: both;
	top: 100%;
	right: 17px;
	margin-bottom: -15px;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 15px 15px 0;
	border-color: #eee transparent transparent
}
.emojiPicker div.emoji, .emojiPicker span.emoji {
	width: 30px;
	height: 30px;
	display: inline-block;
	position: relative
}
.emojiPicker span.emoji {
	overflow: hidden;
	text-indent: -9999px;
	vertical-align: middle
}
.emojiPicker section.recent.show-image span.emoji.people, .emojiPicker section.search span.emoji.people, .emojiPicker section.show-image span.emoji.people {
	background-image: url(../sprite-people.png)
}
.emojiPicker section.recent.show-image span.emoji.nature, .emojiPicker section.search span.emoji.nature, .emojiPicker section.show-image span.emoji.nature {
	background-image: url(../sprite-nature.png)
}
.emojiPicker section.recent.show-image span.emoji.food, .emojiPicker section.search span.emoji.food, .emojiPicker section.show-image span.emoji.food {
	background-image: url(../sprite-food.png)
}
.emojiPicker section.recent.show-image span.emoji.activity, .emojiPicker section.search span.emoji.activity, .emojiPicker section.show-image span.emoji.activity {
	background-image: url(../sprite-activity.png)
}
.emojiPicker section.recent.show-image span.emoji.travel, .emojiPicker section.search span.emoji.travel, .emojiPicker section.show-image span.emoji.travel {
	background-image: url(../sprite-travel.png)
}
.emojiPicker section.recent.show-image span.emoji.object, .emojiPicker section.search span.emoji.object, .emojiPicker section.show-image span.emoji.object {
	background-image: url(../sprite-object.png)
}
.emojiPicker section.recent.show-image span.emoji.symbol, .emojiPicker section.search span.emoji.symbol, .emojiPicker section.show-image span.emoji.symbol {
	background-image: url(../sprite-symbol.png)
}
.emojiPicker .hidden {
	display: none
}
.emojiPicker div.searchbar {
	position: relative;
	width: 100%;
	background: #fff
}
.emojiPicker div.searchbar input {
	display: block;
	width: 96%;
	height: 28px;
	margin: 2%;
	padding: 1%;
	font-size: 12px;
	border: 1px solid #ddd;
	border-radius: 4px
}
.emojiPicker nav.footer {
	display: flex;
	position: relative;
	z-index: 0;
	background-color: #eee;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-top: 1px solid #ddd
}
.emojiPicker nav.footer div.tab {
	position: relative;
	flex-grow: 1;
	display: inline-block;
	padding: 5px 6px;
	text-align: center;
	cursor: pointer
}
.emojiPicker nav div.tab:hover, .emojiPicker nav.footer div.tab.active {
	background-color: #ddd
}
.emojiPicker nav.footer div.tab .emoji {
	width: 14px;
	height: 14px
}
.emojiPicker nav.footer div.tab>div.emoji {
	background-image: url(../emoji-palette.svg);
	background-repeat: no-repeat
}
.emojiPicker nav.footer div.tab .emoji-tab-recent {
	background-position: 0 -84px
}
.emojiPicker nav.footer div.tab .emoji-tab-people {
	background-position: 0 -70px
}
.emojiPicker nav.footer div.tab .emoji-tab-nature {
	background-position: 0 -42px
}
.emojiPicker nav.footer div.tab .emoji-tab-food {
	background-position: 0 -28px
}
.emojiPicker nav.footer div.tab .emoji-tab-activity {
	background-position: 0 0
}
.emojiPicker nav.footer div.tab .emoji-tab-travel {
	background-position: 0 -112px
}
.emojiPicker nav.footer div.tab .emoji-tab-object {
	background-position: 0 -56px
}
.emojiPicker nav.footer div.tab .emoji-tab-symbol {
	background-position: 0 -98px
}
.emojiPicker .sections {
	overflow: scroll;
	position: relative;
	background: #fff;
	z-index: 10;
	border-top-right-radius: 4px;
	border-top-left-radius: 4px
}
.emojiPicker section {
	overflow: hidden;
	width: 100%;
	padding-top: 1%
}
.emojiPicker section h1 {
	font-size: 14px;
	margin-left: 10px;
	color: #999;
	font-weight: 100
}
.emojiPicker section em {
	float: left;
	display: inline-block;
	padding: 2%;
	border-radius: 4px;
	cursor: pointer;
	transition: -webkit-transform 60ms ease-out;
	transition: transform 60ms ease-out;
	transition: transform 60ms ease-out, -webkit-transform 60ms ease-out;
	transition-delay: 60ms
}
.emojiPicker section em div.emoji, .emojiPicker section em span.emoji {
	transition: -webkit-transform 60ms ease-out;
	transition: transform 60ms ease-out;
	transition: transform 60ms ease-out, -webkit-transform 60ms ease-out;
	transition-delay: 60ms
}
.emojiPicker section em:hover div.emoji, .emojiPicker section em:hover span.emoji {
	transform: scale(1.1)
}
.emojiPicker section em div {
	width: 40px;
	margin: 1%
}
.emojiPicker section em div:hover {
	cursor: pointer
}
.emojiPicker section .wrap {
	width: 100%
}
.emojiPicker section.search .wrap {
	padding-top: 1%
}
.emojiPicker .shortcode {
	height: 40px;
	background: #eee;
	border-top: 1px solid #ddd;
	vertical-align: middle
}
.emojiPicker .shortcode .info {
	display: none
}
.emojiPicker .shortcode .emoji {
	position: relative;
	top: 4px;
	left: 8px;
	width: 1.9em;
	height: 1.9em;
	margin-right: 20px
}
.emojiPicker .shortcode em {
	position: relative;
	top: -5px;
	color: #444;
	font-size: 12px;
	font-weight: 900;
	font-style: normal
}
.emojiPicker .shortcode em.tabTitle {
	position: relative;
	top: 10px;
	left: 8px;
	font-size: 14px
}
.emojiPicker .shortcode em.tabTitle .count {
	font-size: 12px;
	font-weight: 500
}
.emojiPicker .shortcode .random .tabTitle {
	color: #7d7d7d;
	font-size: 12px
}
.emojiPicker .shortcode .eod {
	float: right;
	padding: 8px 10px 0 0;
	max-width: 200px
}
.emojiPicker .shortcode .eod .emoji {
	top: -10px;
	left: 0;
	margin-right: 10px
}
.emojiPicker .shortcode .eod .emojiName {
	max-width: 70%;
	padding: 5px 0 0;
	font-size: 10px;
	font-weight: 400
}
</style>

<div class="emojiPicker">

<section class="people show-image" data-count="185">
<h1>People</h1><div class="wrap">
<em><span class="emoji people emoji-grinning" title="grinning"></span></em>
<em><span class="emoji people emoji-grin" title="grin"></span></em>
<em><span class="emoji people emoji-grimacing" title="grimacing"></span></em>
<em><span class="emoji people emoji-joy" title="joy"></span></em>
<em><span class="emoji people emoji-smiley" title="smiley"></span></em>
<em><span class="emoji people emoji-smile" title="smile"></span></em>
<em><span class="emoji people emoji-sweat_smile" title="sweat_smile"></span></em>
<em><span class="emoji people emoji-laughing" title="laughing"></span></em>
<em><span class="emoji people emoji-innocent" title="innocent"></span></em>
<em><span class="emoji people emoji-wink" title="wink"></span></em>
<em><span class="emoji people emoji-blush" title="blush"></span></em>
<em><span class="emoji people emoji-slightly_smiling_face" title="slightly_smiling_face"></span></em>
<em><span class="emoji people emoji-upside_down_face" title="upside_down_face"></span></em>
<em><span class="emoji people emoji-yum" title="yum"></span></em>
<em><span class="emoji people emoji-relieved" title="relieved"></span></em>
<em><span class="emoji people emoji-heart_eyes" title="heart_eyes"></span></em>
<em><span class="emoji people emoji-kissing_heart" title="kissing_heart"></span></em>
<em><span class="emoji people emoji-kissing" title="kissing"></span></em>
<em><span class="emoji people emoji-kissing_smiling_eyes" title="kissing_smiling_eyes"></span></em>
<em><span class="emoji people emoji-kissing_closed_eyes" title="kissing_closed_eyes"></span></em>
<em><span class="emoji people emoji-stuck_out_tongue_winking_eye" title="stuck_out_tongue_winking_eye"></span></em>
<em><span class="emoji people emoji-stuck_out_tongue_closed_eyes" title="stuck_out_tongue_closed_eyes"></span></em>
<em><span class="emoji people emoji-stuck_out_tongue" title="stuck_out_tongue"></span></em>
<em><span class="emoji people emoji-money_mouth_face" title="money_mouth_face"></span></em>
<em><span class="emoji people emoji-nerd_face" title="nerd_face"></span></em>
<em><span class="emoji people emoji-sunglasses" title="sunglasses"></span></em>
<em><span class="emoji people emoji-hugging_face" title="hugging_face"></span></em>
<em><span class="emoji people emoji-smirk" title="smirk"></span></em>
<em><span class="emoji people emoji-no_mouth" title="no_mouth"></span></em>
<em><span class="emoji people emoji-neutral_face" title="neutral_face"></span></em>
<em><span class="emoji people emoji-expressionless" title="expressionless"></span></em>
<em><span class="emoji people emoji-unamused" title="unamused"></span></em>
<em><span class="emoji people emoji-face_with_rolling_eyes" title="face_with_rolling_eyes"></span></em>
<em><span class="emoji people emoji-thinking_face" title="thinking_face"></span></em>
<em><span class="emoji people emoji-flushed" title="flushed"></span></em>
<em><span class="emoji people emoji-disappointed" title="disappointed"></span></em>
<em><span class="emoji people emoji-worried" title="worried"></span></em>
<em><span class="emoji people emoji-angry" title="angry"></span></em>
<em><span class="emoji people emoji-rage" title="rage"></span></em>
<em><span class="emoji people emoji-pensive" title="pensive"></span></em>
<em><span class="emoji people emoji-confused" title="confused"></span></em>
<em><span class="emoji people emoji-slightly_frowning_face" title="slightly_frowning_face"></span></em>
<em><span class="emoji people emoji-white_frowning_face" title="white_frowning_face"></span></em>
<em><span class="emoji people emoji-persevere" title="persevere"></span></em>
<em><span class="emoji people emoji-confounded" title="confounded"></span></em>
<em><span class="emoji people emoji-tired_face" title="tired_face"></span></em>
<em><span class="emoji people emoji-weary" title="weary"></span></em>
<em><span class="emoji people emoji-triumph" title="triumph"></span></em>
<em><span class="emoji people emoji-open_mouth" title="open_mouth"></span></em>
<em><span class="emoji people emoji-scream" title="scream"></span></em>
<em><span class="emoji people emoji-fearful" title="fearful"></span></em>
<em><span class="emoji people emoji-cold_sweat" title="cold_sweat"></span></em>
<em><span class="emoji people emoji-hushed" title="hushed"></span></em>
<em><span class="emoji people emoji-frowning" title="frowning"></span></em>
<em><span class="emoji people emoji-anguished" title="anguished"></span></em>
<em><span class="emoji people emoji-cry" title="cry"></span></em>
<em><span class="emoji people emoji-disappointed_relieved" title="disappointed_relieved"></span></em>
<em><span class="emoji people emoji-sleepy" title="sleepy"></span></em>
<em><span class="emoji people emoji-sweat" title="sweat"></span></em>
<em><span class="emoji people emoji-sob" title="sob"></span></em>
<em><span class="emoji people emoji-dizzy_face" title="dizzy_face"></span></em>
<em><span class="emoji people emoji-astonished" title="astonished"></span></em>
<em><span class="emoji people emoji-zipper_mouth_face" title="zipper_mouth_face"></span></em>
<em><span class="emoji people emoji-mask" title="mask"></span></em>
<em><span class="emoji people emoji-face_with_thermometer" title="face_with_thermometer"></span></em>
<em><span class="emoji people emoji-face_with_head_bandage" title="face_with_head_bandage"></span></em>
<em><span class="emoji people emoji-sleeping" title="sleeping"></span></em>
<em><span class="emoji people emoji-zzz" title="zzz"></span></em>
<em><span class="emoji people emoji-hankey" title="hankey"></span></em>
<em><span class="emoji people emoji-smiling_imp" title="smiling_imp"></span></em>
<em><span class="emoji people emoji-imp" title="imp"></span></em>
<em><span class="emoji people emoji-japanese_ogre" title="japanese_ogre"></span></em>
<em><span class="emoji people emoji-japanese_goblin" title="japanese_goblin"></span></em>
<em><span class="emoji people emoji-skull" title="skull"></span></em>
<em><span class="emoji people emoji-ghost" title="ghost"></span></em>
<em><span class="emoji people emoji-alien" title="alien"></span></em>
<em><span class="emoji people emoji-robot_face" title="robot_face"></span></em>
<em><span class="emoji people emoji-smiley_cat" title="smiley_cat"></span></em>
<em><span class="emoji people emoji-smile_cat" title="smile_cat"></span></em>
<em><span class="emoji people emoji-joy_cat" title="joy_cat"></span></em>
<em><span class="emoji people emoji-heart_eyes_cat" title="heart_eyes_cat"></span></em>
<em><span class="emoji people emoji-smirk_cat" title="smirk_cat"></span></em>
<em><span class="emoji people emoji-kissing_cat" title="kissing_cat"></span></em>
<em><span class="emoji people emoji-scream_cat" title="scream_cat"></span></em>
<em><span class="emoji people emoji-crying_cat_face" title="crying_cat_face"></span></em>
<em><span class="emoji people emoji-pouting_cat" title="pouting_cat"></span></em>
<em><span class="emoji people emoji-raised_hands" title="raised_hands"></span></em>
<em><span class="emoji people emoji-clap" title="clap"></span></em>
<em><span class="emoji people emoji-wave" title="wave"></span></em>
<em><span class="emoji people emoji-plus1" title="plus1"></span></em>
<em><span class="emoji people emoji--1" title="-1"></span></em>
<em><span class="emoji people emoji-facepunch" title="facepunch"></span></em>
<em><span class="emoji people emoji-fist" title="fist"></span></em>
<em><span class="emoji people emoji-v" title="v"></span></em>
<em><span class="emoji people emoji-ok_hand" title="ok_hand"></span></em>
<em><span class="emoji people emoji-hand" title="hand"></span></em>
<em><span class="emoji people emoji-open_hands" title="open_hands"></span></em>
<em><span class="emoji people emoji-muscle" title="muscle"></span></em>
<em><span class="emoji people emoji-pray" title="pray"></span></em>
<em><span class="emoji people emoji-point_up" title="point_up"></span></em>
<em><span class="emoji people emoji-point_up_2" title="point_up_2"></span></em>
<em><span class="emoji people emoji-point_down" title="point_down"></span></em>
<em><span class="emoji people emoji-point_left" title="point_left"></span></em>
<em><span class="emoji people emoji-point_right" title="point_right"></span></em>
<em><span class="emoji people emoji-middle_finger" title="middle_finger"></span></em>
<em><span class="emoji people emoji-raised_hand_with_fingers_splayed" title="raised_hand_with_fingers_splayed"></span></em>
<em><span class="emoji people emoji-the_horns" title="the_horns"></span></em>
<em><span class="emoji people emoji-spock-hand" title="spock-hand"></span></em>
<em><span class="emoji people emoji-writing_hand" title="writing_hand"></span></em>
<em><span class="emoji people emoji-nail_care" title="nail_care"></span></em>
<em><span class="emoji people emoji-lips" title="lips"></span></em>
<em><span class="emoji people emoji-tongue" title="tongue"></span></em>
<em><span class="emoji people emoji-ear" title="ear"></span></em>
<em><span class="emoji people emoji-nose" title="nose"></span></em>
<em><span class="emoji people emoji-eye" title="eye"></span></em>
<em><span class="emoji people emoji-eyes" title="eyes"></span></em>
<em><span class="emoji people emoji-bust_in_silhouette" title="bust_in_silhouette"></span></em>
<em><span class="emoji people emoji-busts_in_silhouette" title="busts_in_silhouette"></span></em>
<em><span class="emoji people emoji-speaking_head_in_silhouette" title="speaking_head_in_silhouette"></span></em>
<em><span class="emoji people emoji-baby" title="baby"></span></em>
<em><span class="emoji people emoji-boy" title="boy"></span></em>
<em><span class="emoji people emoji-girl" title="girl"></span></em>
<em><span class="emoji people emoji-man" title="man"></span></em>
<em><span class="emoji people emoji-woman" title="woman"></span></em>
<em><span class="emoji people emoji-person_with_blond_hair" title="person_with_blond_hair"></span></em>
<em><span class="emoji people emoji-older_man" title="older_man"></span></em>
<em><span class="emoji people emoji-older_woman" title="older_woman"></span></em>
<em><span class="emoji people emoji-man_with_gua_pi_mao" title="man_with_gua_pi_mao"></span></em>
<em><span class="emoji people emoji-man_with_turban" title="man_with_turban"></span></em>
<em><span class="emoji people emoji-cop" title="cop"></span></em>
<em><span class="emoji people emoji-construction_worker" title="construction_worker"></span></em>
<em><span class="emoji people emoji-guardsman" title="guardsman"></span></em>
<em><span class="emoji people emoji-sleuth_or_spy" title="sleuth_or_spy"></span></em>
<em><span class="emoji people emoji-santa" title="santa"></span></em>
<em><span class="emoji people emoji-angel" title="angel"></span></em>
<em><span class="emoji people emoji-princess" title="princess"></span></em>
<em><span class="emoji people emoji-bride_with_veil" title="bride_with_veil"></span></em>
<em><span class="emoji people emoji-walking" title="walking"></span></em>
<em><span class="emoji people emoji-runner" title="runner"></span></em>
<em><span class="emoji people emoji-dancer" title="dancer"></span></em>
<em><span class="emoji people emoji-dancers" title="dancers"></span></em>
<em><span class="emoji people emoji-couple" title="couple"></span></em>
<em><span class="emoji people emoji-two_men_holding_hands" title="two_men_holding_hands"></span></em>
<em><span class="emoji people emoji-two_women_holding_hands" title="two_women_holding_hands"></span></em>
<em><span class="emoji people emoji-bow" title="bow"></span></em>
<em><span class="emoji people emoji-information_desk_person" title="information_desk_person"></span></em>
<em><span class="emoji people emoji-no_good" title="no_good"></span></em>
<em><span class="emoji people emoji-ok_woman" title="ok_woman"></span></em>
<em><span class="emoji people emoji-raising_hand" title="raising_hand"></span></em>
<em><span class="emoji people emoji-person_with_pouting_face" title="person_with_pouting_face"></span></em>
<em><span class="emoji people emoji-person_frowning" title="person_frowning"></span></em>
<em><span class="emoji people emoji-haircut" title="haircut"></span></em>
<em><span class="emoji people emoji-massage" title="massage"></span></em>
<em><span class="emoji people emoji-couple_with_heart" title="couple_with_heart"></span></em>
<em><span class="emoji people emoji-couplekiss" title="couplekiss"></span></em>
<em><span class="emoji people emoji-family" title="family"></span></em>
<em><span class="emoji people emoji-womans_clothes" title="womans_clothes"></span></em>
<em><span class="emoji people emoji-shirt" title="shirt"></span></em>
<em><span class="emoji people emoji-jeans" title="jeans"></span></em>
<em><span class="emoji people emoji-necktie" title="necktie"></span></em>
<em><span class="emoji people emoji-dress" title="dress"></span></em>
<em><span class="emoji people emoji-bikini" title="bikini"></span></em>
<em><span class="emoji people emoji-kimono" title="kimono"></span></em>
<em><span class="emoji people emoji-lipstick" title="lipstick"></span></em>
<em><span class="emoji people emoji-kiss" title="kiss"></span></em>
<em><span class="emoji people emoji-footprints" title="footprints"></span></em>
<em><span class="emoji people emoji-high_heel" title="high_heel"></span></em>
<em><span class="emoji people emoji-sandal" title="sandal"></span></em>
<em><span class="emoji people emoji-boot" title="boot"></span></em>
<em><span class="emoji people emoji-mans_shoe" title="mans_shoe"></span></em>
<em><span class="emoji people emoji-athletic_shoe" title="athletic_shoe"></span></em>
<em><span class="emoji people emoji-womans_hat" title="womans_hat"></span></em>
<em><span class="emoji people emoji-tophat" title="tophat"></span></em>
<em><span class="emoji people emoji-helmet_with_white_cross" title="helmet_with_white_cross"></span></em>
<em><span class="emoji people emoji-mortar_board" title="mortar_board"></span></em>
<em><span class="emoji people emoji-crown" title="crown"></span></em>
<em><span class="emoji people emoji-school_satchel" title="school_satchel"></span></em>
<em><span class="emoji people emoji-pouch" title="pouch"></span></em>
<em><span class="emoji people emoji-purse" title="purse"></span></em>
<em><span class="emoji people emoji-handbag" title="handbag"></span></em>
<em><span class="emoji people emoji-briefcase" title="briefcase"></span></em>
<em><span class="emoji people emoji-eyeglasses" title="eyeglasses"></span></em>
<em><span class="emoji people emoji-dark_sunglasses" title="dark_sunglasses"></span></em>
<em><span class="emoji people emoji-ring" title="ring"></span></em>
<em><span class="emoji people emoji-closed_umbrella" title="closed_umbrella"></span></em>
</div></section>
<section class="nature show-image" data-count="74">
<h1>Nature</h1><div class="wrap">
<em><span class="emoji nature emoji-see_no_evil" title="see_no_evil"></span></em>
<em><span class="emoji nature emoji-hear_no_evil" title="hear_no_evil"></span></em>
<em><span class="emoji nature emoji-speak_no_evil" title="speak_no_evil"></span></em>
<em><span class="emoji nature emoji-christmas_tree" title="christmas_tree"></span></em>
<em><span class="emoji nature emoji-evergreen_tree" title="evergreen_tree"></span></em>
<em><span class="emoji nature emoji-deciduous_tree" title="deciduous_tree"></span></em>
<em><span class="emoji nature emoji-palm_tree" title="palm_tree"></span></em>
<em><span class="emoji nature emoji-seedling" title="seedling"></span></em>
<em><span class="emoji nature emoji-herb" title="herb"></span></em>
<em><span class="emoji nature emoji-shamrock" title="shamrock"></span></em>
<em><span class="emoji nature emoji-four_leaf_clover" title="four_leaf_clover"></span></em>
<em><span class="emoji nature emoji-bamboo" title="bamboo"></span></em>
<em><span class="emoji nature emoji-tanabata_tree" title="tanabata_tree"></span></em>
<em><span class="emoji nature emoji-leaves" title="leaves"></span></em>
<em><span class="emoji nature emoji-fallen_leaf" title="fallen_leaf"></span></em>
<em><span class="emoji nature emoji-maple_leaf" title="maple_leaf"></span></em>
<em><span class="emoji nature emoji-ear_of_rice" title="ear_of_rice"></span></em>
<em><span class="emoji nature emoji-hibiscus" title="hibiscus"></span></em>
<em><span class="emoji nature emoji-sunflower" title="sunflower"></span></em>
<em><span class="emoji nature emoji-rose" title="rose"></span></em>
<em><span class="emoji nature emoji-tulip" title="tulip"></span></em>
<em><span class="emoji nature emoji-blossom" title="blossom"></span></em>
<em><span class="emoji nature emoji-cherry_blossom" title="cherry_blossom"></span></em>
<em><span class="emoji nature emoji-bouquet" title="bouquet"></span></em>
<em><span class="emoji nature emoji-mushroom" title="mushroom"></span></em>
<em><span class="emoji nature emoji-chestnut" title="chestnut"></span></em>
<em><span class="emoji nature emoji-jack_o_lantern" title="jack_o_lantern"></span></em>
<em><span class="emoji nature emoji-shell" title="shell"></span></em>
<em><span class="emoji nature emoji-spider_web" title="spider_web"></span></em>
<em><span class="emoji nature emoji-earth_americas" title="earth_americas"></span></em>
<em><span class="emoji nature emoji-earth_africa" title="earth_africa"></span></em>
<em><span class="emoji nature emoji-earth_asia" title="earth_asia"></span></em>
<em><span class="emoji nature emoji-full_moon" title="full_moon"></span></em>
<em><span class="emoji nature emoji-waning_gibbous_moon" title="waning_gibbous_moon"></span></em>
<em><span class="emoji nature emoji-last_quarter_moon" title="last_quarter_moon"></span></em>
<em><span class="emoji nature emoji-waning_crescent_moon" title="waning_crescent_moon"></span></em>
<em><span class="emoji nature emoji-new_moon" title="new_moon"></span></em>
<em><span class="emoji nature emoji-waxing_crescent_moon" title="waxing_crescent_moon"></span></em>
<em><span class="emoji nature emoji-first_quarter_moon" title="first_quarter_moon"></span></em>
<em><span class="emoji nature emoji-moon" title="moon"></span></em>
<em><span class="emoji nature emoji-new_moon_with_face" title="new_moon_with_face"></span></em>
<em><span class="emoji nature emoji-first_quarter_moon_with_face" title="first_quarter_moon_with_face"></span></em>
<em><span class="emoji nature emoji-last_quarter_moon_with_face" title="last_quarter_moon_with_face"></span></em>
<em><span class="emoji nature emoji-full_moon_with_face" title="full_moon_with_face"></span></em>
<em><span class="emoji nature emoji-crescent_moon" title="crescent_moon"></span></em>
<em><span class="emoji nature emoji-sun_with_face" title="sun_with_face"></span></em>
<em><span class="emoji nature emoji-star" title="star"></span></em>
<em><span class="emoji nature emoji-star2" title="star2"></span></em>
<em><span class="emoji nature emoji-dizzy" title="dizzy"></span></em>
<em><span class="emoji nature emoji-sparkles" title="sparkles"></span></em>
<em><span class="emoji nature emoji-comet" title="comet"></span></em>
<em><span class="emoji nature emoji-sunny" title="sunny"></span></em>
<em><span class="emoji nature emoji-mostly_sunny" title="mostly_sunny"></span></em>
<em><span class="emoji nature emoji-partly_sunny" title="partly_sunny"></span></em>
<em><span class="emoji nature emoji-barely_sunny" title="barely_sunny"></span></em>
<em><span class="emoji nature emoji-partly_sunny_rain" title="partly_sunny_rain"></span></em>
<em><span class="emoji nature emoji-cloud" title="cloud"></span></em>
<em><span class="emoji nature emoji-rain_cloud" title="rain_cloud"></span></em>
<em><span class="emoji nature emoji-thunder_cloud_and_rain" title="thunder_cloud_and_rain"></span></em>
<em><span class="emoji nature emoji-lightning" title="lightning"></span></em>
<em><span class="emoji nature emoji-zap" title="zap"></span></em>
<em><span class="emoji nature emoji-fire" title="fire"></span></em>
<em><span class="emoji nature emoji-boom" title="boom"></span></em>
<em><span class="emoji nature emoji-snowflake" title="snowflake"></span></em>
<em><span class="emoji nature emoji-snow_cloud" title="snow_cloud"></span></em>
<em><span class="emoji nature emoji-snowman" title="snowman"></span></em>
<em><span class="emoji nature emoji-wind_blowing_face" title="wind_blowing_face"></span></em>
<em><span class="emoji nature emoji-dash" title="dash"></span></em>
<em><span class="emoji nature emoji-tornado" title="tornado"></span></em>
<em><span class="emoji nature emoji-fog" title="fog"></span></em>
<em><span class="emoji nature emoji-umbrella" title="umbrella"></span></em>
<em><span class="emoji nature emoji-droplet" title="droplet"></span></em>
<em><span class="emoji nature emoji-sweat_drops" title="sweat_drops"></span></em>
<em><span class="emoji nature emoji-ocean" title="ocean"></span></em>
</div></section>
<section class="food show-image" data-count="66">
<h1>Food</h1><div class="wrap">
<em><span class="emoji food emoji-green_apple" title="green_apple"></span></em>
<em><span class="emoji food emoji-apple" title="apple"></span></em>
<em><span class="emoji food emoji-pear" title="pear"></span></em>
<em><span class="emoji food emoji-tangerine" title="tangerine"></span></em>
<em><span class="emoji food emoji-lemon" title="lemon"></span></em>
<em><span class="emoji food emoji-banana" title="banana"></span></em>
<em><span class="emoji food emoji-watermelon" title="watermelon"></span></em>
<em><span class="emoji food emoji-grapes" title="grapes"></span></em>
<em><span class="emoji food emoji-strawberry" title="strawberry"></span></em>
<em><span class="emoji food emoji-melon" title="melon"></span></em>
<em><span class="emoji food emoji-cherries" title="cherries"></span></em>
<em><span class="emoji food emoji-peach" title="peach"></span></em>
<em><span class="emoji food emoji-pineapple" title="pineapple"></span></em>
<em><span class="emoji food emoji-tomato" title="tomato"></span></em>
<em><span class="emoji food emoji-eggplant" title="eggplant"></span></em>
<em><span class="emoji food emoji-hot_pepper" title="hot_pepper"></span></em>
<em><span class="emoji food emoji-sweet_potato" title="sweet_potato"></span></em>
<em><span class="emoji food emoji-honey_pot" title="honey_pot"></span></em>
<em><span class="emoji food emoji-bread" title="bread"></span></em>
<em><span class="emoji food emoji-cheese_wedge" title="cheese_wedge"></span></em>
<em><span class="emoji food emoji-poultry_leg" title="poultry_leg"></span></em>
<em><span class="emoji food emoji-meat_on_bone" title="meat_on_bone"></span></em>
<em><span class="emoji food emoji-fried_shrimp" title="fried_shrimp"></span></em>
<em><span class="emoji food emoji-egg" title="egg"></span></em>
<em><span class="emoji food emoji-hamburger" title="hamburger"></span></em>
<em><span class="emoji food emoji-fries" title="fries"></span></em>
<em><span class="emoji food emoji-hotdog" title="hotdog"></span></em>
<em><span class="emoji food emoji-pizza" title="pizza"></span></em>
<em><span class="emoji food emoji-spaghetti" title="spaghetti"></span></em>
<em><span class="emoji food emoji-taco" title="taco"></span></em>
<em><span class="emoji food emoji-burrito" title="burrito"></span></em>
<em><span class="emoji food emoji-ramen" title="ramen"></span></em>
<em><span class="emoji food emoji-stew" title="stew"></span></em>
<em><span class="emoji food emoji-fish_cake" title="fish_cake"></span></em>
<em><span class="emoji food emoji-sushi" title="sushi"></span></em>
<em><span class="emoji food emoji-bento" title="bento"></span></em>
<em><span class="emoji food emoji-curry" title="curry"></span></em>
<em><span class="emoji food emoji-rice_ball" title="rice_ball"></span></em>
<em><span class="emoji food emoji-rice" title="rice"></span></em>
<em><span class="emoji food emoji-rice_cracker" title="rice_cracker"></span></em>
<em><span class="emoji food emoji-oden" title="oden"></span></em>
<em><span class="emoji food emoji-dango" title="dango"></span></em>
<em><span class="emoji food emoji-shaved_ice" title="shaved_ice"></span></em>
<em><span class="emoji food emoji-ice_cream" title="ice_cream"></span></em>
<em><span class="emoji food emoji-icecream" title="icecream"></span></em>
<em><span class="emoji food emoji-cake" title="cake"></span></em>
<em><span class="emoji food emoji-birthday" title="birthday"></span></em>
<em><span class="emoji food emoji-custard" title="custard"></span></em>
<em><span class="emoji food emoji-candy" title="candy"></span></em>
<em><span class="emoji food emoji-lollipop" title="lollipop"></span></em>
<em><span class="emoji food emoji-chocolate_bar" title="chocolate_bar"></span></em>
<em><span class="emoji food emoji-popcorn" title="popcorn"></span></em>
<em><span class="emoji food emoji-cookie" title="cookie"></span></em>
<em><span class="emoji food emoji-doughnut" title="doughnut"></span></em>
<em><span class="emoji food emoji-beer" title="beer"></span></em>
<em><span class="emoji food emoji-beers" title="beers"></span></em>
<em><span class="emoji food emoji-wine_glass" title="wine_glass"></span></em>
<em><span class="emoji food emoji-cocktail" title="cocktail"></span></em>
<em><span class="emoji food emoji-tropical_drink" title="tropical_drink"></span></em>
<em><span class="emoji food emoji-champagne" title="champagne"></span></em>
<em><span class="emoji food emoji-sake" title="sake"></span></em>
<em><span class="emoji food emoji-tea" title="tea"></span></em>
<em><span class="emoji food emoji-coffee" title="coffee"></span></em>
<em><span class="emoji food emoji-baby_bottle" title="baby_bottle"></span></em>
<em><span class="emoji food emoji-fork_and_knife" title="fork_and_knife"></span></em>
<em><span class="emoji food emoji-knife_fork_plate" title="knife_fork_plate"></span></em>
</div></section>
<section class="activity show-image" data-count="57">
<h1>Activities</h1><div class="wrap">
<em><span class="emoji activity emoji-soccer" title="soccer"></span></em>
<em><span class="emoji activity emoji-basketball" title="basketball"></span></em>
<em><span class="emoji activity emoji-football" title="football"></span></em>
<em><span class="emoji activity emoji-baseball" title="baseball"></span></em>
<em><span class="emoji activity emoji-tennis" title="tennis"></span></em>
<em><span class="emoji activity emoji-volleyball" title="volleyball"></span></em>
<em><span class="emoji activity emoji-rugby_football" title="rugby_football"></span></em>
<em><span class="emoji activity emoji-8ball" title="8ball"></span></em>
<em><span class="emoji activity emoji-golf" title="golf"></span></em>
<em><span class="emoji activity emoji-golfer" title="golfer"></span></em>
<em><span class="emoji activity emoji-table_tennis_paddle_and_ball" title="table_tennis_paddle_and_ball"></span></em>
<em><span class="emoji activity emoji-badminton_racquet_and_shuttlecock" title="badminton_racquet_and_shuttlecock"></span></em>
<em><span class="emoji activity emoji-ice_hockey_stick_and_puck" title="ice_hockey_stick_and_puck"></span></em>
<em><span class="emoji activity emoji-field_hockey_stick_and_ball" title="field_hockey_stick_and_ball"></span></em>
<em><span class="emoji activity emoji-cricket_bat_and_ball" title="cricket_bat_and_ball"></span></em>
<em><span class="emoji activity emoji-ski" title="ski"></span></em>
<em><span class="emoji activity emoji-skier" title="skier"></span></em>
<em><span class="emoji activity emoji-snowboarder" title="snowboarder"></span></em>
<em><span class="emoji activity emoji-ice_skate" title="ice_skate"></span></em>
<em><span class="emoji activity emoji-bow_and_arrow" title="bow_and_arrow"></span></em>
<em><span class="emoji activity emoji-fishing_pole_and_fish" title="fishing_pole_and_fish"></span></em>
<em><span class="emoji activity emoji-rowboat" title="rowboat"></span></em>
<em><span class="emoji activity emoji-swimmer" title="swimmer"></span></em>
<em><span class="emoji activity emoji-surfer" title="surfer"></span></em>
<em><span class="emoji activity emoji-bath" title="bath"></span></em>
<em><span class="emoji activity emoji-person_with_ball" title="person_with_ball"></span></em>
<em><span class="emoji activity emoji-weight_lifter" title="weight_lifter"></span></em>
<em><span class="emoji activity emoji-bicyclist" title="bicyclist"></span></em>
<em><span class="emoji activity emoji-mountain_bicyclist" title="mountain_bicyclist"></span></em>
<em><span class="emoji activity emoji-horse_racing" title="horse_racing"></span></em>
<em><span class="emoji activity emoji-man_in_business_suit_levitating" title="man_in_business_suit_levitating"></span></em>
<em><span class="emoji activity emoji-trophy" title="trophy"></span></em>
<em><span class="emoji activity emoji-running_shirt_with_sash" title="running_shirt_with_sash"></span></em>
<em><span class="emoji activity emoji-sports_medal" title="sports_medal"></span></em>
<em><span class="emoji activity emoji-medal" title="medal"></span></em>
<em><span class="emoji activity emoji-reminder_ribbon" title="reminder_ribbon"></span></em>
<em><span class="emoji activity emoji-rosette" title="rosette"></span></em>
<em><span class="emoji activity emoji-ticket" title="ticket"></span></em>
<em><span class="emoji activity emoji-admission_tickets" title="admission_tickets"></span></em>
<em><span class="emoji activity emoji-performing_arts" title="performing_arts"></span></em>
<em><span class="emoji activity emoji-art" title="art"></span></em>
<em><span class="emoji activity emoji-circus_tent" title="circus_tent"></span></em>
<em><span class="emoji activity emoji-microphone" title="microphone"></span></em>
<em><span class="emoji activity emoji-headphones" title="headphones"></span></em>
<em><span class="emoji activity emoji-musical_score" title="musical_score"></span></em>
<em><span class="emoji activity emoji-musical_keyboard" title="musical_keyboard"></span></em>
<em><span class="emoji activity emoji-saxophone" title="saxophone"></span></em>
<em><span class="emoji activity emoji-trumpet" title="trumpet"></span></em>
<em><span class="emoji activity emoji-guitar" title="guitar"></span></em>
<em><span class="emoji activity emoji-violin" title="violin"></span></em>
<em><span class="emoji activity emoji-clapper" title="clapper"></span></em>
<em><span class="emoji activity emoji-video_game" title="video_game"></span></em>
<em><span class="emoji activity emoji-space_invader" title="space_invader"></span></em>
<em><span class="emoji activity emoji-dart" title="dart"></span></em>
<em><span class="emoji activity emoji-game_die" title="game_die"></span></em>
<em><span class="emoji activity emoji-slot_machine" title="slot_machine"></span></em>
<em><span class="emoji activity emoji-bowling" title="bowling"></span></em>
</div></section>
<section class="travel show-image" data-count="115">
<h1>Travel &amp; Places</h1><div class="wrap">
<em><span class="emoji travel emoji-car" title="car"></span></em>
<em><span class="emoji travel emoji-taxi" title="taxi"></span></em>
<em><span class="emoji travel emoji-blue_car" title="blue_car"></span></em>
<em><span class="emoji travel emoji-bus" title="bus"></span></em>
<em><span class="emoji travel emoji-trolleybus" title="trolleybus"></span></em>
<em><span class="emoji travel emoji-racing_car" title="racing_car"></span></em>
<em><span class="emoji travel emoji-police_car" title="police_car"></span></em>
<em><span class="emoji travel emoji-ambulance" title="ambulance"></span></em>
<em><span class="emoji travel emoji-fire_engine" title="fire_engine"></span></em>
<em><span class="emoji travel emoji-minibus" title="minibus"></span></em>
<em><span class="emoji travel emoji-truck" title="truck"></span></em>
<em><span class="emoji travel emoji-articulated_lorry" title="articulated_lorry"></span></em>
<em><span class="emoji travel emoji-tractor" title="tractor"></span></em>
<em><span class="emoji travel emoji-racing_motorcycle" title="racing_motorcycle"></span></em>
<em><span class="emoji travel emoji-bike" title="bike"></span></em>
<em><span class="emoji travel emoji-rotating_light" title="rotating_light"></span></em>
<em><span class="emoji travel emoji-oncoming_police_car" title="oncoming_police_car"></span></em>
<em><span class="emoji travel emoji-oncoming_bus" title="oncoming_bus"></span></em>
<em><span class="emoji travel emoji-oncoming_automobile" title="oncoming_automobile"></span></em>
<em><span class="emoji travel emoji-oncoming_taxi" title="oncoming_taxi"></span></em>
<em><span class="emoji travel emoji-aerial_tramway" title="aerial_tramway"></span></em>
<em><span class="emoji travel emoji-mountain_cableway" title="mountain_cableway"></span></em>
<em><span class="emoji travel emoji-suspension_railway" title="suspension_railway"></span></em>
<em><span class="emoji travel emoji-railway_car" title="railway_car"></span></em>
<em><span class="emoji travel emoji-train" title="train"></span></em>
<em><span class="emoji travel emoji-monorail" title="monorail"></span></em>
<em><span class="emoji travel emoji-bullettrain_side" title="bullettrain_side"></span></em>
<em><span class="emoji travel emoji-bullettrain_front" title="bullettrain_front"></span></em>
<em><span class="emoji travel emoji-light_rail" title="light_rail"></span></em>
<em><span class="emoji travel emoji-mountain_railway" title="mountain_railway"></span></em>
<em><span class="emoji travel emoji-steam_locomotive" title="steam_locomotive"></span></em>
<em><span class="emoji travel emoji-train2" title="train2"></span></em>
<em><span class="emoji travel emoji-metro" title="metro"></span></em>
<em><span class="emoji travel emoji-tram" title="tram"></span></em>
<em><span class="emoji travel emoji-station" title="station"></span></em>
<em><span class="emoji travel emoji-helicopter" title="helicopter"></span></em>
<em><span class="emoji travel emoji-small_airplane" title="small_airplane"></span></em>
<em><span class="emoji travel emoji-airplane" title="airplane"></span></em>
<em><span class="emoji travel emoji-airplane_departure" title="airplane_departure"></span></em>
<em><span class="emoji travel emoji-airplane_arriving" title="airplane_arriving"></span></em>
<em><span class="emoji travel emoji-boat" title="boat"></span></em>
<em><span class="emoji travel emoji-motor_boat" title="motor_boat"></span></em>
<em><span class="emoji travel emoji-speedboat" title="speedboat"></span></em>
<em><span class="emoji travel emoji-ferry" title="ferry"></span></em>
<em><span class="emoji travel emoji-passenger_ship" title="passenger_ship"></span></em>
<em><span class="emoji travel emoji-rocket" title="rocket"></span></em>
<em><span class="emoji travel emoji-satellite_antenna" title="satellite_antenna"></span></em>
<em><span class="emoji travel emoji-seat" title="seat"></span></em>
<em><span class="emoji travel emoji-anchor" title="anchor"></span></em>
<em><span class="emoji travel emoji-construction" title="construction"></span></em>
<em><span class="emoji travel emoji-fuelpump" title="fuelpump"></span></em>
<em><span class="emoji travel emoji-busstop" title="busstop"></span></em>
<em><span class="emoji travel emoji-vertical_traffic_light" title="vertical_traffic_light"></span></em>
<em><span class="emoji travel emoji-traffic_light" title="traffic_light"></span></em>
<em><span class="emoji travel emoji-checkered_flag" title="checkered_flag"></span></em>
<em><span class="emoji travel emoji-ship" title="ship"></span></em>
<em><span class="emoji travel emoji-ferris_wheel" title="ferris_wheel"></span></em>
<em><span class="emoji travel emoji-roller_coaster" title="roller_coaster"></span></em>
<em><span class="emoji travel emoji-carousel_horse" title="carousel_horse"></span></em>
<em><span class="emoji travel emoji-building_construction" title="building_construction"></span></em>
<em><span class="emoji travel emoji-foggy" title="foggy"></span></em>
<em><span class="emoji travel emoji-tokyo_tower" title="tokyo_tower"></span></em>
<em><span class="emoji travel emoji-factory" title="factory"></span></em>
<em><span class="emoji travel emoji-fountain" title="fountain"></span></em>
<em><span class="emoji travel emoji-rice_scene" title="rice_scene"></span></em>
<em><span class="emoji travel emoji-mountain" title="mountain"></span></em>
<em><span class="emoji travel emoji-snow_capped_mountain" title="snow_capped_mountain"></span></em>
<em><span class="emoji travel emoji-mount_fuji" title="mount_fuji"></span></em>
<em><span class="emoji travel emoji-volcano" title="volcano"></span></em>
<em><span class="emoji travel emoji-japan" title="japan"></span></em>
<em><span class="emoji travel emoji-camping" title="camping"></span></em>
<em><span class="emoji travel emoji-tent" title="tent"></span></em>
<em><span class="emoji travel emoji-national_park" title="national_park"></span></em>
<em><span class="emoji travel emoji-motorway" title="motorway"></span></em>
<em><span class="emoji travel emoji-railway_track" title="railway_track"></span></em>
<em><span class="emoji travel emoji-sunrise" title="sunrise"></span></em>
<em><span class="emoji travel emoji-sunrise_over_mountains" title="sunrise_over_mountains"></span></em>
<em><span class="emoji travel emoji-desert" title="desert"></span></em>
<em><span class="emoji travel emoji-beach_with_umbrella" title="beach_with_umbrella"></span></em>
<em><span class="emoji travel emoji-desert_island" title="desert_island"></span></em>
<em><span class="emoji travel emoji-city_sunrise" title="city_sunrise"></span></em>
<em><span class="emoji travel emoji-city_sunset" title="city_sunset"></span></em>
<em><span class="emoji travel emoji-cityscape" title="cityscape"></span></em>
<em><span class="emoji travel emoji-night_with_stars" title="night_with_stars"></span></em>
<em><span class="emoji travel emoji-bridge_at_night" title="bridge_at_night"></span></em>
<em><span class="emoji travel emoji-milky_way" title="milky_way"></span></em>
<em><span class="emoji travel emoji-stars" title="stars"></span></em>
<em><span class="emoji travel emoji-sparkler" title="sparkler"></span></em>
<em><span class="emoji travel emoji-fireworks" title="fireworks"></span></em>
<em><span class="emoji travel emoji-rainbow" title="rainbow"></span></em>
<em><span class="emoji travel emoji-house_buildings" title="house_buildings"></span></em>
<em><span class="emoji travel emoji-european_castle" title="european_castle"></span></em>
<em><span class="emoji travel emoji-japanese_castle" title="japanese_castle"></span></em>
<em><span class="emoji travel emoji-stadium" title="stadium"></span></em>
<em><span class="emoji travel emoji-statue_of_liberty" title="statue_of_liberty"></span></em>
<em><span class="emoji travel emoji-house" title="house"></span></em>
<em><span class="emoji travel emoji-house_with_garden" title="house_with_garden"></span></em>
<em><span class="emoji travel emoji-derelict_house_building" title="derelict_house_building"></span></em>
<em><span class="emoji travel emoji-office" title="office"></span></em>
<em><span class="emoji travel emoji-department_store" title="department_store"></span></em>
<em><span class="emoji travel emoji-post_office" title="post_office"></span></em>
<em><span class="emoji travel emoji-european_post_office" title="european_post_office"></span></em>
<em><span class="emoji travel emoji-hospital" title="hospital"></span></em>
<em><span class="emoji travel emoji-bank" title="bank"></span></em>
<em><span class="emoji travel emoji-hotel" title="hotel"></span></em>
<em><span class="emoji travel emoji-convenience_store" title="convenience_store"></span></em>
<em><span class="emoji travel emoji-school" title="school"></span></em>
<em><span class="emoji travel emoji-love_hotel" title="love_hotel"></span></em>
<em><span class="emoji travel emoji-wedding" title="wedding"></span></em>
<em><span class="emoji travel emoji-classical_building" title="classical_building"></span></em>
<em><span class="emoji travel emoji-church" title="church"></span></em>
<em><span class="emoji travel emoji-mosque" title="mosque"></span></em>
<em><span class="emoji travel emoji-synagogue" title="synagogue"></span></em>
<em><span class="emoji travel emoji-kaaba" title="kaaba"></span></em>
<em><span class="emoji travel emoji-shinto_shrine" title="shinto_shrine"></span></em>
</div></section>
<section class="object show-image" data-count="185">
<h1>Objects</h1><div class="wrap">
<em><span class="emoji object emoji-watch" title="watch"></span></em>
<em><span class="emoji object emoji-iphone" title="iphone"></span></em>
<em><span class="emoji object emoji-calling" title="calling"></span></em>
<em><span class="emoji object emoji-computer" title="computer"></span></em>
<em><span class="emoji object emoji-keyboard" title="keyboard"></span></em>
<em><span class="emoji object emoji-desktop_computer" title="desktop_computer"></span></em>
<em><span class="emoji object emoji-printer" title="printer"></span></em>
<em><span class="emoji object emoji-three_button_mouse" title="three_button_mouse"></span></em>
<em><span class="emoji object emoji-trackball" title="trackball"></span></em>
<em><span class="emoji object emoji-joystick" title="joystick"></span></em>
<em><span class="emoji object emoji-compression" title="compression"></span></em>
<em><span class="emoji object emoji-minidisc" title="minidisc"></span></em>
<em><span class="emoji object emoji-floppy_disk" title="floppy_disk"></span></em>
<em><span class="emoji object emoji-cd" title="cd"></span></em>
<em><span class="emoji object emoji-dvd" title="dvd"></span></em>
<em><span class="emoji object emoji-vhs" title="vhs"></span></em>
<em><span class="emoji object emoji-camera" title="camera"></span></em>
<em><span class="emoji object emoji-camera_with_flash" title="camera_with_flash"></span></em>
<em><span class="emoji object emoji-video_camera" title="video_camera"></span></em>
<em><span class="emoji object emoji-movie_camera" title="movie_camera"></span></em>
<em><span class="emoji object emoji-film_projector" title="film_projector"></span></em>
<em><span class="emoji object emoji-film_frames" title="film_frames"></span></em>
<em><span class="emoji object emoji-telephone_receiver" title="telephone_receiver"></span></em>
<em><span class="emoji object emoji-phone" title="phone"></span></em>
<em><span class="emoji object emoji-pager" title="pager"></span></em>
<em><span class="emoji object emoji-fax" title="fax"></span></em>
<em><span class="emoji object emoji-tv" title="tv"></span></em>
<em><span class="emoji object emoji-radio" title="radio"></span></em>
<em><span class="emoji object emoji-studio_microphone" title="studio_microphone"></span></em>
<em><span class="emoji object emoji-level_slider" title="level_slider"></span></em>
<em><span class="emoji object emoji-control_knobs" title="control_knobs"></span></em>
<em><span class="emoji object emoji-stopwatch" title="stopwatch"></span></em>
<em><span class="emoji object emoji-timer_clock" title="timer_clock"></span></em>
<em><span class="emoji object emoji-alarm_clock" title="alarm_clock"></span></em>
<em><span class="emoji object emoji-mantelpiece_clock" title="mantelpiece_clock"></span></em>
<em><span class="emoji object emoji-hourglass_flowing_sand" title="hourglass_flowing_sand"></span></em>
<em><span class="emoji object emoji-hourglass" title="hourglass"></span></em>
<em><span class="emoji object emoji-satellite" title="satellite"></span></em>
<em><span class="emoji object emoji-battery" title="battery"></span></em>
<em><span class="emoji object emoji-electric_plug" title="electric_plug"></span></em>
<em><span class="emoji object emoji-bulb" title="bulb"></span></em>
<em><span class="emoji object emoji-flashlight" title="flashlight"></span></em>
<em><span class="emoji object emoji-candle" title="candle"></span></em>
<em><span class="emoji object emoji-wastebasket" title="wastebasket"></span></em>
<em><span class="emoji object emoji-oil_drum" title="oil_drum"></span></em>
<em><span class="emoji object emoji-money_with_wings" title="money_with_wings"></span></em>
<em><span class="emoji object emoji-dollar" title="dollar"></span></em>
<em><span class="emoji object emoji-yen" title="yen"></span></em>
<em><span class="emoji object emoji-euro" title="euro"></span></em>
<em><span class="emoji object emoji-pound" title="pound"></span></em>
<em><span class="emoji object emoji-moneybag" title="moneybag"></span></em>
<em><span class="emoji object emoji-credit_card" title="credit_card"></span></em>
<em><span class="emoji object emoji-gem" title="gem"></span></em>
<em><span class="emoji object emoji-scales" title="scales"></span></em>
<em><span class="emoji object emoji-wrench" title="wrench"></span></em>
<em><span class="emoji object emoji-hammer" title="hammer"></span></em>
<em><span class="emoji object emoji-hammer_and_pick" title="hammer_and_pick"></span></em>
<em><span class="emoji object emoji-hammer_and_wrench" title="hammer_and_wrench"></span></em>
<em><span class="emoji object emoji-pick" title="pick"></span></em>
<em><span class="emoji object emoji-nut_and_bolt" title="nut_and_bolt"></span></em>
<em><span class="emoji object emoji-gear" title="gear"></span></em>
<em><span class="emoji object emoji-chains" title="chains"></span></em>
<em><span class="emoji object emoji-gun" title="gun"></span></em>
<em><span class="emoji object emoji-bomb" title="bomb"></span></em>
<em><span class="emoji object emoji-hocho" title="hocho"></span></em>
<em><span class="emoji object emoji-dagger_knife" title="dagger_knife"></span></em>
<em><span class="emoji object emoji-crossed_swords" title="crossed_swords"></span></em>
<em><span class="emoji object emoji-shield" title="shield"></span></em>
<em><span class="emoji object emoji-smoking" title="smoking"></span></em>
<em><span class="emoji object emoji-skull_and_crossbones" title="skull_and_crossbones"></span></em>
<em><span class="emoji object emoji-coffin" title="coffin"></span></em>
<em><span class="emoji object emoji-funeral_urn" title="funeral_urn"></span></em>
<em><span class="emoji object emoji-amphora" title="amphora"></span></em>
<em><span class="emoji object emoji-crystal_ball" title="crystal_ball"></span></em>
<em><span class="emoji object emoji-prayer_beads" title="prayer_beads"></span></em>
<em><span class="emoji object emoji-barber" title="barber"></span></em>
<em><span class="emoji object emoji-alembic" title="alembic"></span></em>
<em><span class="emoji object emoji-telescope" title="telescope"></span></em>
<em><span class="emoji object emoji-microscope" title="microscope"></span></em>
<em><span class="emoji object emoji-hole" title="hole"></span></em>
<em><span class="emoji object emoji-pill" title="pill"></span></em>
<em><span class="emoji object emoji-syringe" title="syringe"></span></em>
<em><span class="emoji object emoji-thermometer" title="thermometer"></span></em>
<em><span class="emoji object emoji-label" title="label"></span></em>
<em><span class="emoji object emoji-bookmark" title="bookmark"></span></em>
<em><span class="emoji object emoji-toilet" title="toilet"></span></em>
<em><span class="emoji object emoji-shower" title="shower"></span></em>
<em><span class="emoji object emoji-bathtub" title="bathtub"></span></em>
<em><span class="emoji object emoji-key" title="key"></span></em>
<em><span class="emoji object emoji-old_key" title="old_key"></span></em>
<em><span class="emoji object emoji-couch_and_lamp" title="couch_and_lamp"></span></em>
<em><span class="emoji object emoji-sleeping_accommodation" title="sleeping_accommodation"></span></em>
<em><span class="emoji object emoji-bed" title="bed"></span></em>
<em><span class="emoji object emoji-door" title="door"></span></em>
<em><span class="emoji object emoji-bellhop_bell" title="bellhop_bell"></span></em>
<em><span class="emoji object emoji-frame_with_picture" title="frame_with_picture"></span></em>
<em><span class="emoji object emoji-world_map" title="world_map"></span></em>
<em><span class="emoji object emoji-umbrella_on_ground" title="umbrella_on_ground"></span></em>
<em><span class="emoji object emoji-moyai" title="moyai"></span></em>
<em><span class="emoji object emoji-shopping_bags" title="shopping_bags"></span></em>
<em><span class="emoji object emoji-balloon" title="balloon"></span></em>
<em><span class="emoji object emoji-flags" title="flags"></span></em>
<em><span class="emoji object emoji-ribbon" title="ribbon"></span></em>
<em><span class="emoji object emoji-gift" title="gift"></span></em>
<em><span class="emoji object emoji-confetti_ball" title="confetti_ball"></span></em>
<em><span class="emoji object emoji-tada" title="tada"></span></em>
<em><span class="emoji object emoji-dolls" title="dolls"></span></em>
<em><span class="emoji object emoji-wind_chime" title="wind_chime"></span></em>
<em><span class="emoji object emoji-crossed_flags" title="crossed_flags"></span></em>
<em><span class="emoji object emoji-izakaya_lantern" title="izakaya_lantern"></span></em>
<em><span class="emoji object emoji-email" title="email"></span></em>
<em><span class="emoji object emoji-envelope_with_arrow" title="envelope_with_arrow"></span></em>
<em><span class="emoji object emoji-incoming_envelope" title="incoming_envelope"></span></em>
<em><span class="emoji object emoji-e-mail" title="e-mail"></span></em>
<em><span class="emoji object emoji-love_letter" title="love_letter"></span></em>
<em><span class="emoji object emoji-postbox" title="postbox"></span></em>
<em><span class="emoji object emoji-mailbox_closed" title="mailbox_closed"></span></em>
<em><span class="emoji object emoji-mailbox" title="mailbox"></span></em>
<em><span class="emoji object emoji-mailbox_with_mail" title="mailbox_with_mail"></span></em>
<em><span class="emoji object emoji-mailbox_with_no_mail" title="mailbox_with_no_mail"></span></em>
<em><span class="emoji object emoji-package" title="package"></span></em>
<em><span class="emoji object emoji-postal_horn" title="postal_horn"></span></em>
<em><span class="emoji object emoji-inbox_tray" title="inbox_tray"></span></em>
<em><span class="emoji object emoji-outbox_tray" title="outbox_tray"></span></em>
<em><span class="emoji object emoji-scroll" title="scroll"></span></em>
<em><span class="emoji object emoji-page_with_curl" title="page_with_curl"></span></em>
<em><span class="emoji object emoji-bookmark_tabs" title="bookmark_tabs"></span></em>
<em><span class="emoji object emoji-bar_chart" title="bar_chart"></span></em>
<em><span class="emoji object emoji-chart_with_upwards_trend" title="chart_with_upwards_trend"></span></em>
<em><span class="emoji object emoji-chart_with_downwards_trend" title="chart_with_downwards_trend"></span></em>
<em><span class="emoji object emoji-page_facing_up" title="page_facing_up"></span></em>
<em><span class="emoji object emoji-date" title="date"></span></em>
<em><span class="emoji object emoji-calendar" title="calendar"></span></em>
<em><span class="emoji object emoji-spiral_calendar_pad" title="spiral_calendar_pad"></span></em>
<em><span class="emoji object emoji-card_index" title="card_index"></span></em>
<em><span class="emoji object emoji-card_file_box" title="card_file_box"></span></em>
<em><span class="emoji object emoji-file_cabinet" title="file_cabinet"></span></em>
<em><span class="emoji object emoji-clipboard" title="clipboard"></span></em>
<em><span class="emoji object emoji-spiral_note_pad" title="spiral_note_pad"></span></em>
<em><span class="emoji object emoji-file_folder" title="file_folder"></span></em>
<em><span class="emoji object emoji-open_file_folder" title="open_file_folder"></span></em>
<em><span class="emoji object emoji-card_index_dividers" title="card_index_dividers"></span></em>
<em><span class="emoji object emoji-rolled_up_newspaper" title="rolled_up_newspaper"></span></em>
<em><span class="emoji object emoji-newspaper" title="newspaper"></span></em>
<em><span class="emoji object emoji-notebook" title="notebook"></span></em>
<em><span class="emoji object emoji-closed_book" title="closed_book"></span></em>
<em><span class="emoji object emoji-green_book" title="green_book"></span></em>
<em><span class="emoji object emoji-blue_book" title="blue_book"></span></em>
<em><span class="emoji object emoji-orange_book" title="orange_book"></span></em>
<em><span class="emoji object emoji-notebook_with_decorative_cover" title="notebook_with_decorative_cover"></span></em>
<em><span class="emoji object emoji-ledger" title="ledger"></span></em>
<em><span class="emoji object emoji-books" title="books"></span></em>
<em><span class="emoji object emoji-book" title="book"></span></em>
<em><span class="emoji object emoji-link" title="link"></span></em>
<em><span class="emoji object emoji-paperclip" title="paperclip"></span></em>
<em><span class="emoji object emoji-linked_paperclips" title="linked_paperclips"></span></em>
<em><span class="emoji object emoji-scissors" title="scissors"></span></em>
<em><span class="emoji object emoji-triangular_ruler" title="triangular_ruler"></span></em>
<em><span class="emoji object emoji-straight_ruler" title="straight_ruler"></span></em>
<em><span class="emoji object emoji-pushpin" title="pushpin"></span></em>
<em><span class="emoji object emoji-round_pushpin" title="round_pushpin"></span></em>
<em><span class="emoji object emoji-triangular_flag_on_post" title="triangular_flag_on_post"></span></em>
<em><span class="emoji object emoji-waving_white_flag" title="waving_white_flag"></span></em>
<em><span class="emoji object emoji-waving_black_flag" title="waving_black_flag"></span></em>
<em><span class="emoji object emoji-closed_lock_with_key" title="closed_lock_with_key"></span></em>
<em><span class="emoji object emoji-lock" title="lock"></span></em>
<em><span class="emoji object emoji-unlock" title="unlock"></span></em>
<em><span class="emoji object emoji-lock_with_ink_pen" title="lock_with_ink_pen"></span></em>
<em><span class="emoji object emoji-lower_left_ballpoint_pen" title="lower_left_ballpoint_pen"></span></em>
<em><span class="emoji object emoji-lower_left_fountain_pen" title="lower_left_fountain_pen"></span></em>
<em><span class="emoji object emoji-memo" title="memo"></span></em>
<em><span class="emoji object emoji-pencil2" title="pencil2"></span></em>
<em><span class="emoji object emoji-lower_left_crayon" title="lower_left_crayon"></span></em>
<em><span class="emoji object emoji-lower_left_paintbrush" title="lower_left_paintbrush"></span></em>
<em><span class="emoji object emoji-mag" title="mag"></span></em>
<em><span class="emoji object emoji-mag_right" title="mag_right"></span></em>
<em><span class="emoji object emoji-double_vertical_bar" title="double_vertical_bar"></span></em>
<em><span class="emoji object emoji-black_right_pointing_triangle_with_double_vertical_bar" title="black_right_pointing_triangle_with_double_vertical_bar"></span></em>
<em><span class="emoji object emoji-black_square_for_stop" title="black_square_for_stop"></span></em>
<em><span class="emoji object emoji-black_circle_for_record" title="black_circle_for_record"></span></em>
<em><span class="emoji object emoji-black_right_pointing_double_triangle_with_vertical_bar" title="black_right_pointing_double_triangle_with_vertical_bar"></span></em>
<em><span class="emoji object emoji-black_left_pointing_double_triangle_with_vertical_bar" title="black_left_pointing_double_triangle_with_vertical_bar"></span></em>
<em><span class="emoji object emoji-fast_forward" title="fast_forward"></span></em>
<em><span class="emoji object emoji-right_anger_bubble" title="right_anger_bubble"></span></em>
<em><span class="emoji object emoji-left_speech_bubble" title="left_speech_bubble"></span></em>
</div></section>
<section class="symbol show-image" data-count="258">
<h1>Symbols</h1><div class="wrap">
<em><span class="emoji symbol emoji-heart" title="heart"></span></em>
<em><span class="emoji symbol emoji-yellow_heart" title="yellow_heart"></span></em>
<em><span class="emoji symbol emoji-green_heart" title="green_heart"></span></em>
<em><span class="emoji symbol emoji-blue_heart" title="blue_heart"></span></em>
<em><span class="emoji symbol emoji-purple_heart" title="purple_heart"></span></em>
<em><span class="emoji symbol emoji-broken_heart" title="broken_heart"></span></em>
<em><span class="emoji symbol emoji-heavy_heart_exclamation_mark_ornament" title="heavy_heart_exclamation_mark_ornament"></span></em>
<em><span class="emoji symbol emoji-two_hearts" title="two_hearts"></span></em>
<em><span class="emoji symbol emoji-revolving_hearts" title="revolving_hearts"></span></em>
<em><span class="emoji symbol emoji-heartbeat" title="heartbeat"></span></em>
<em><span class="emoji symbol emoji-heartpulse" title="heartpulse"></span></em>
<em><span class="emoji symbol emoji-sparkling_heart" title="sparkling_heart"></span></em>
<em><span class="emoji symbol emoji-cupid" title="cupid"></span></em>
<em><span class="emoji symbol emoji-gift_heart" title="gift_heart"></span></em>
<em><span class="emoji symbol emoji-heart_decoration" title="heart_decoration"></span></em>
<em><span class="emoji symbol emoji-peace_symbol" title="peace_symbol"></span></em>
<em><span class="emoji symbol emoji-latin_cross" title="latin_cross"></span></em>
<em><span class="emoji symbol emoji-star_and_crescent" title="star_and_crescent"></span></em>
<em><span class="emoji symbol emoji-om_symbol" title="om_symbol"></span></em>
<em><span class="emoji symbol emoji-wheel_of_dharma" title="wheel_of_dharma"></span></em>
<em><span class="emoji symbol emoji-star_of_david" title="star_of_david"></span></em>
<em><span class="emoji symbol emoji-six_pointed_star" title="six_pointed_star"></span></em>
<em><span class="emoji symbol emoji-menorah_with_nine_branches" title="menorah_with_nine_branches"></span></em>
<em><span class="emoji symbol emoji-yin_yang" title="yin_yang"></span></em>
<em><span class="emoji symbol emoji-orthodox_cross" title="orthodox_cross"></span></em>
<em><span class="emoji symbol emoji-place_of_worship" title="place_of_worship"></span></em>
<em><span class="emoji symbol emoji-ophiuchus" title="ophiuchus"></span></em>
<em><span class="emoji symbol emoji-aries" title="aries"></span></em>
<em><span class="emoji symbol emoji-taurus" title="taurus"></span></em>
<em><span class="emoji symbol emoji-gemini" title="gemini"></span></em>
<em><span class="emoji symbol emoji-cancer" title="cancer"></span></em>
<em><span class="emoji symbol emoji-leo" title="leo"></span></em>
<em><span class="emoji symbol emoji-virgo" title="virgo"></span></em>
<em><span class="emoji symbol emoji-libra" title="libra"></span></em>
<em><span class="emoji symbol emoji-scorpius" title="scorpius"></span></em>
<em><span class="emoji symbol emoji-sagittarius" title="sagittarius"></span></em>
<em><span class="emoji symbol emoji-capricorn" title="capricorn"></span></em>
<em><span class="emoji symbol emoji-aquarius" title="aquarius"></span></em>
<em><span class="emoji symbol emoji-pisces" title="pisces"></span></em>
<em><span class="emoji symbol emoji-id" title="id"></span></em>
<em><span class="emoji symbol emoji-atom_symbol" title="atom_symbol"></span></em>
<em><span class="emoji symbol emoji-u7a7a" title="u7a7a"></span></em>
<em><span class="emoji symbol emoji-u5272" title="u5272"></span></em>
<em><span class="emoji symbol emoji-radioactive_sign" title="radioactive_sign"></span></em>
<em><span class="emoji symbol emoji-biohazard_sign" title="biohazard_sign"></span></em>
<em><span class="emoji symbol emoji-mobile_phone_off" title="mobile_phone_off"></span></em>
<em><span class="emoji symbol emoji-vibration_mode" title="vibration_mode"></span></em>
<em><span class="emoji symbol emoji-u6709" title="u6709"></span></em>
<em><span class="emoji symbol emoji-u7121" title="u7121"></span></em>
<em><span class="emoji symbol emoji-u7533" title="u7533"></span></em>
<em><span class="emoji symbol emoji-u55b6" title="u55b6"></span></em>
<em><span class="emoji symbol emoji-u6708" title="u6708"></span></em>
<em><span class="emoji symbol emoji-eight_pointed_black_star" title="eight_pointed_black_star"></span></em>
<em><span class="emoji symbol emoji-vs" title="vs"></span></em>
<em><span class="emoji symbol emoji-accept" title="accept"></span></em>
<em><span class="emoji symbol emoji-white_flower" title="white_flower"></span></em>
<em><span class="emoji symbol emoji-ideograph_advantage" title="ideograph_advantage"></span></em>
<em><span class="emoji symbol emoji-secret" title="secret"></span></em>
<em><span class="emoji symbol emoji-congratulations" title="congratulations"></span></em>
<em><span class="emoji symbol emoji-u5408" title="u5408"></span></em>
<em><span class="emoji symbol emoji-u6e80" title="u6e80"></span></em>
<em><span class="emoji symbol emoji-u7981" title="u7981"></span></em>
<em><span class="emoji symbol emoji-a" title="a"></span></em>
<em><span class="emoji symbol emoji-b" title="b"></span></em>
<em><span class="emoji symbol emoji-ab" title="ab"></span></em>
<em><span class="emoji symbol emoji-cl" title="cl"></span></em>
<em><span class="emoji symbol emoji-o2" title="o2"></span></em>
<em><span class="emoji symbol emoji-sos" title="sos"></span></em>
<em><span class="emoji symbol emoji-no_entry" title="no_entry"></span></em>
<em><span class="emoji symbol emoji-name_badge" title="name_badge"></span></em>
<em><span class="emoji symbol emoji-no_entry_sign" title="no_entry_sign"></span></em>
<em><span class="emoji symbol emoji-x" title="x"></span></em>
<em><span class="emoji symbol emoji-o" title="o"></span></em>
<em><span class="emoji symbol emoji-anger" title="anger"></span></em>
<em><span class="emoji symbol emoji-hotsprings" title="hotsprings"></span></em>
<em><span class="emoji symbol emoji-no_pedestrians" title="no_pedestrians"></span></em>
<em><span class="emoji symbol emoji-do_not_litter" title="do_not_litter"></span></em>
<em><span class="emoji symbol emoji-no_bicycles" title="no_bicycles"></span></em>
<em><span class="emoji symbol emoji-non-potable_water" title="non-potable_water"></span></em>
<em><span class="emoji symbol emoji-underage" title="underage"></span></em>
<em><span class="emoji symbol emoji-no_mobile_phones" title="no_mobile_phones"></span></em>
<em><span class="emoji symbol emoji-no_smoking" title="no_smoking"></span></em>
<em><span class="emoji symbol emoji-exclamation" title="exclamation"></span></em>
<em><span class="emoji symbol emoji-grey_exclamation" title="grey_exclamation"></span></em>
<em><span class="emoji symbol emoji-question" title="question"></span></em>
<em><span class="emoji symbol emoji-grey_question" title="grey_question"></span></em>
<em><span class="emoji symbol emoji-bangbang" title="bangbang"></span></em>
<em><span class="emoji symbol emoji-interrobang" title="interrobang"></span></em>
<em><span class="emoji symbol emoji-100" title="100"></span></em>
<em><span class="emoji symbol emoji-low_brightness" title="low_brightness"></span></em>
<em><span class="emoji symbol emoji-high_brightness" title="high_brightness"></span></em>
<em><span class="emoji symbol emoji-trident" title="trident"></span></em>
<em><span class="emoji symbol emoji-fleur_de_lis" title="fleur_de_lis"></span></em>
<em><span class="emoji symbol emoji-part_alternation_mark" title="part_alternation_mark"></span></em>
<em><span class="emoji symbol emoji-warning" title="warning"></span></em>
<em><span class="emoji symbol emoji-children_crossing" title="children_crossing"></span></em>
<em><span class="emoji symbol emoji-beginner" title="beginner"></span></em>
<em><span class="emoji symbol emoji-recycle" title="recycle"></span></em>
<em><span class="emoji symbol emoji-u6307" title="u6307"></span></em>
<em><span class="emoji symbol emoji-chart" title="chart"></span></em>
<em><span class="emoji symbol emoji-sparkle" title="sparkle"></span></em>
<em><span class="emoji symbol emoji-eight_spoked_asterisk" title="eight_spoked_asterisk"></span></em>
<em><span class="emoji symbol emoji-negative_squared_cross_mark" title="negative_squared_cross_mark"></span></em>
<em><span class="emoji symbol emoji-white_check_mark" title="white_check_mark"></span></em>
<em><span class="emoji symbol emoji-diamond_shape_with_a_dot_inside" title="diamond_shape_with_a_dot_inside"></span></em>
<em><span class="emoji symbol emoji-cyclone" title="cyclone"></span></em>
<em><span class="emoji symbol emoji-loop" title="loop"></span></em>
<em><span class="emoji symbol emoji-globe_with_meridians" title="globe_with_meridians"></span></em>
<em><span class="emoji symbol emoji-m" title="m"></span></em>
<em><span class="emoji symbol emoji-atm" title="atm"></span></em>
<em><span class="emoji symbol emoji-sa" title="sa"></span></em>
<em><span class="emoji symbol emoji-passport_control" title="passport_control"></span></em>
<em><span class="emoji symbol emoji-customs" title="customs"></span></em>
<em><span class="emoji symbol emoji-baggage_claim" title="baggage_claim"></span></em>
<em><span class="emoji symbol emoji-left_luggage" title="left_luggage"></span></em>
<em><span class="emoji symbol emoji-wheelchair" title="wheelchair"></span></em>
<em><span class="emoji symbol emoji-wc" title="wc"></span></em>
<em><span class="emoji symbol emoji-parking" title="parking"></span></em>
<em><span class="emoji symbol emoji-potable_water" title="potable_water"></span></em>
<em><span class="emoji symbol emoji-mens" title="mens"></span></em>
<em><span class="emoji symbol emoji-womens" title="womens"></span></em>
<em><span class="emoji symbol emoji-baby_symbol" title="baby_symbol"></span></em>
<em><span class="emoji symbol emoji-restroom" title="restroom"></span></em>
<em><span class="emoji symbol emoji-put_litter_in_its_place" title="put_litter_in_its_place"></span></em>
<em><span class="emoji symbol emoji-cinema" title="cinema"></span></em>
<em><span class="emoji symbol emoji-signal_strength" title="signal_strength"></span></em>
<em><span class="emoji symbol emoji-koko" title="koko"></span></em>
<em><span class="emoji symbol emoji-ng" title="ng"></span></em>
<em><span class="emoji symbol emoji-ok" title="ok"></span></em>
<em><span class="emoji symbol emoji-up" title="up"></span></em>
<em><span class="emoji symbol emoji-cool" title="cool"></span></em>
<em><span class="emoji symbol emoji-new" title="new"></span></em>
<em><span class="emoji symbol emoji-free" title="free"></span></em>
<em><span class="emoji symbol emoji-zero" title="zero"></span></em>
<em><span class="emoji symbol emoji-one" title="one"></span></em>
<em><span class="emoji symbol emoji-two" title="two"></span></em>
<em><span class="emoji symbol emoji-three" title="three"></span></em>
<em><span class="emoji symbol emoji-four" title="four"></span></em>
<em><span class="emoji symbol emoji-five" title="five"></span></em>
<em><span class="emoji symbol emoji-six" title="six"></span></em>
<em><span class="emoji symbol emoji-seven" title="seven"></span></em>
<em><span class="emoji symbol emoji-eight" title="eight"></span></em>
<em><span class="emoji symbol emoji-nine" title="nine"></span></em>
<em><span class="emoji symbol emoji-keycap_ten" title="keycap_ten"></span></em>
<em><span class="emoji symbol emoji-1234" title="1234"></span></em>
<em><span class="emoji symbol emoji-arrow_forward" title="arrow_forward"></span></em>
<em><span class="emoji symbol emoji-rewind" title="rewind"></span></em>
<em><span class="emoji symbol emoji-twisted_rightwards_arrows" title="twisted_rightwards_arrows"></span></em>
<em><span class="emoji symbol emoji-repeat" title="repeat"></span></em>
<em><span class="emoji symbol emoji-repeat_one" title="repeat_one"></span></em>
<em><span class="emoji symbol emoji-arrow_backward" title="arrow_backward"></span></em>
<em><span class="emoji symbol emoji-arrow_up_small" title="arrow_up_small"></span></em>
<em><span class="emoji symbol emoji-arrow_down_small" title="arrow_down_small"></span></em>
<em><span class="emoji symbol emoji-arrow_double_up" title="arrow_double_up"></span></em>
<em><span class="emoji symbol emoji-arrow_double_down" title="arrow_double_down"></span></em>
<em><span class="emoji symbol emoji-arrow_right" title="arrow_right"></span></em>
<em><span class="emoji symbol emoji-arrow_left" title="arrow_left"></span></em>
<em><span class="emoji symbol emoji-arrow_up" title="arrow_up"></span></em>
<em><span class="emoji symbol emoji-arrow_down" title="arrow_down"></span></em>
<em><span class="emoji symbol emoji-arrow_upper_right" title="arrow_upper_right"></span></em>
<em><span class="emoji symbol emoji-arrow_lower_right" title="arrow_lower_right"></span></em>
<em><span class="emoji symbol emoji-arrow_lower_left" title="arrow_lower_left"></span></em>
<em><span class="emoji symbol emoji-arrow_upper_left" title="arrow_upper_left"></span></em>
<em><span class="emoji symbol emoji-arrow_up_down" title="arrow_up_down"></span></em>
<em><span class="emoji symbol emoji-left_right_arrow" title="left_right_arrow"></span></em>
<em><span class="emoji symbol emoji-arrows_counterclockwise" title="arrows_counterclockwise"></span></em>
<em><span class="emoji symbol emoji-arrow_right_hook" title="arrow_right_hook"></span></em>
<em><span class="emoji symbol emoji-leftwards_arrow_with_hook" title="leftwards_arrow_with_hook"></span></em>
<em><span class="emoji symbol emoji-arrow_heading_up" title="arrow_heading_up"></span></em>
<em><span class="emoji symbol emoji-arrow_heading_down" title="arrow_heading_down"></span></em>
<em><span class="emoji symbol emoji-arrows_clockwise" title="arrows_clockwise"></span></em>
<em><span class="emoji symbol emoji-hash" title="hash"></span></em>
<em><span class="emoji symbol emoji-information_source" title="information_source"></span></em>
<em><span class="emoji symbol emoji-abc" title="abc"></span></em>
<em><span class="emoji symbol emoji-abcd" title="abcd"></span></em>
<em><span class="emoji symbol emoji-capital_abcd" title="capital_abcd"></span></em>
<em><span class="emoji symbol emoji-symbols" title="symbols"></span></em>
<em><span class="emoji symbol emoji-musical_note" title="musical_note"></span></em>
<em><span class="emoji symbol emoji-notes" title="notes"></span></em>
<em><span class="emoji symbol emoji-wavy_dash" title="wavy_dash"></span></em>
<em><span class="emoji symbol emoji-curly_loop" title="curly_loop"></span></em>
<em><span class="emoji symbol emoji-heavy_check_mark" title="heavy_check_mark"></span></em>
<em><span class="emoji symbol emoji-heavy_plus_sign" title="heavy_plus_sign"></span></em>
<em><span class="emoji symbol emoji-heavy_minus_sign" title="heavy_minus_sign"></span></em>
<em><span class="emoji symbol emoji-heavy_multiplication_x" title="heavy_multiplication_x"></span></em>
<em><span class="emoji symbol emoji-heavy_division_sign" title="heavy_division_sign"></span></em>
<em><span class="emoji symbol emoji-heavy_dollar_sign" title="heavy_dollar_sign"></span></em>
<em><span class="emoji symbol emoji-copyright" title="copyright"></span></em>
<em><span class="emoji symbol emoji-registered" title="registered"></span></em>
<em><span class="emoji symbol emoji-tm" title="tm"></span></em>
<em><span class="emoji symbol emoji-end" title="end"></span></em>
<em><span class="emoji symbol emoji-back" title="back"></span></em>
<em><span class="emoji symbol emoji-on" title="on"></span></em>
<em><span class="emoji symbol emoji-top" title="top"></span></em>
<em><span class="emoji symbol emoji-soon" title="soon"></span></em>
<em><span class="emoji symbol emoji-ballot_box_with_check" title="ballot_box_with_check"></span></em>
<em><span class="emoji symbol emoji-radio_button" title="radio_button"></span></em>
<em><span class="emoji symbol emoji-white_circle" title="white_circle"></span></em>
<em><span class="emoji symbol emoji-black_circle" title="black_circle"></span></em>
<em><span class="emoji symbol emoji-red_circle" title="red_circle"></span></em>
<em><span class="emoji symbol emoji-large_blue_circle" title="large_blue_circle"></span></em>
<em><span class="emoji symbol emoji-small_orange_diamond" title="small_orange_diamond"></span></em>
<em><span class="emoji symbol emoji-small_blue_diamond" title="small_blue_diamond"></span></em>
<em><span class="emoji symbol emoji-large_orange_diamond" title="large_orange_diamond"></span></em>
<em><span class="emoji symbol emoji-large_blue_diamond" title="large_blue_diamond"></span></em>
<em><span class="emoji symbol emoji-small_red_triangle" title="small_red_triangle"></span></em>
<em><span class="emoji symbol emoji-black_small_square" title="black_small_square"></span></em>
<em><span class="emoji symbol emoji-white_small_square" title="white_small_square"></span></em>
<em><span class="emoji symbol emoji-black_large_square" title="black_large_square"></span></em>
<em><span class="emoji symbol emoji-white_large_square" title="white_large_square"></span></em>
<em><span class="emoji symbol emoji-small_red_triangle_down" title="small_red_triangle_down"></span></em>
<em><span class="emoji symbol emoji-black_medium_square" title="black_medium_square"></span></em>
<em><span class="emoji symbol emoji-white_medium_square" title="white_medium_square"></span></em>
<em><span class="emoji symbol emoji-black_medium_small_square" title="black_medium_small_square"></span></em>
<em><span class="emoji symbol emoji-white_medium_small_square" title="white_medium_small_square"></span></em>
<em><span class="emoji symbol emoji-black_square_button" title="black_square_button"></span></em>
<em><span class="emoji symbol emoji-white_square_button" title="white_square_button"></span></em>
<em><span class="emoji symbol emoji-speaker" title="speaker"></span></em>
<em><span class="emoji symbol emoji-sound" title="sound"></span></em>
<em><span class="emoji symbol emoji-loud_sound" title="loud_sound"></span></em>
<em><span class="emoji symbol emoji-mute" title="mute"></span></em>
<em><span class="emoji symbol emoji-mega" title="mega"></span></em>
<em><span class="emoji symbol emoji-loudspeaker" title="loudspeaker"></span></em>
<em><span class="emoji symbol emoji-bell" title="bell"></span></em>
<em><span class="emoji symbol emoji-no_bell" title="no_bell"></span></em>
<em><span class="emoji symbol emoji-black_joker" title="black_joker"></span></em>
<em><span class="emoji symbol emoji-mahjong" title="mahjong"></span></em>
<em><span class="emoji symbol emoji-spades" title="spades"></span></em>
<em><span class="emoji symbol emoji-clubs" title="clubs"></span></em>
<em><span class="emoji symbol emoji-hearts" title="hearts"></span></em>
<em><span class="emoji symbol emoji-diamonds" title="diamonds"></span></em>
<em><span class="emoji symbol emoji-flower_playing_cards" title="flower_playing_cards"></span></em>
<em><span class="emoji symbol emoji-thought_balloon" title="thought_balloon"></span></em>
<em><span class="emoji symbol emoji-speech_balloon" title="speech_balloon"></span></em>
<em><span class="emoji symbol emoji-clock1" title="clock1"></span></em>
<em><span class="emoji symbol emoji-clock2" title="clock2"></span></em>
<em><span class="emoji symbol emoji-clock3" title="clock3"></span></em>
<em><span class="emoji symbol emoji-clock4" title="clock4"></span></em>
<em><span class="emoji symbol emoji-clock5" title="clock5"></span></em>
<em><span class="emoji symbol emoji-clock6" title="clock6"></span></em>
<em><span class="emoji symbol emoji-clock7" title="clock7"></span></em>
<em><span class="emoji symbol emoji-clock8" title="clock8"></span></em>
<em><span class="emoji symbol emoji-clock9" title="clock9"></span></em>
<em><span class="emoji symbol emoji-clock10" title="clock10"></span></em>
<em><span class="emoji symbol emoji-clock11" title="clock11"></span></em>
<em><span class="emoji symbol emoji-clock12" title="clock12"></span></em>
<em><span class="emoji symbol emoji-clock130" title="clock130"></span></em>
<em><span class="emoji symbol emoji-clock230" title="clock230"></span></em>
<em><span class="emoji symbol emoji-clock330" title="clock330"></span></em>
<em><span class="emoji symbol emoji-clock430" title="clock430"></span></em>
<em><span class="emoji symbol emoji-clock530" title="clock530"></span></em>
<em><span class="emoji symbol emoji-clock630" title="clock630"></span></em>
<em><span class="emoji symbol emoji-clock730" title="clock730"></span></em>
<em><span class="emoji symbol emoji-clock830" title="clock830"></span></em>
<em><span class="emoji symbol emoji-clock930" title="clock930"></span></em>
<em><span class="emoji symbol emoji-clock1030" title="clock1030"></span></em>
<em><span class="emoji symbol emoji-clock1130" title="clock1130"></span></em>
<em><span class="emoji symbol emoji-clock1230" title="clock1230"></span></em>
</div></section>
</div>
<nav class="footer">
<div class="tab" data-tab="recent"><div class="emoji emoji-tab-recent"></div></div>
<div class="tab" data-tab="people"><div class="emoji emoji-tab-people"></div></div>
<div class="tab" data-tab="nature"><div class="emoji emoji-tab-nature"></div></div>
<div class="tab" data-tab="food"><div class="emoji emoji-tab-food"></div></div>
<div class="tab" data-tab="activity"><div class="emoji emoji-tab-activity"></div></div>
<div class="tab" data-tab="travel"><div class="emoji emoji-tab-travel"></div></div>
<div class="tab" data-tab="object"><div class="emoji emoji-tab-object"></div></div>
<div class="tab" data-tab="symbol"><div class="emoji emoji-tab-symbol"></div></div>
</nav>
