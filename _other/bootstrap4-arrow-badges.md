---
layout: template
permalink: other/bootstrap4-arrow-badges.html
description: Bootstrap 4 comes with badges, this demo includes CSS to turn them into arrows
title: Bootstrap 4 Arrow Badges
type: demo
localcss:
localjs:
includePrismJs: false
externalcss:
externaljs:
showinnav: true
order:
---

<style>
.theme-blue .badge.badge-primary {
  background-color: #005eaa !important;
}
.theme-blue .badge.badge-primary.badge-right:after {
  border-left-color: #005eaa;
}
.theme-blue .badge.badge-secondary {
  background-color: #88c3ea !important;
}
.theme-blue .badge.badge-secondary.badge-right:after {
  border-left-color: #88c3ea;
}
.theme-blue .badge.badge-tertiary {
  background-color: #c0e9ff !important;
}
.theme-blue .badge.badge-tertiary.badge-right:after {
  border-left-color: #c0e9ff;
}
.theme-blue .badge.badge-quaternary {
  background-color: #edf9ff !important;
}
.theme-blue .badge.badge-quaternary.badge-right:after {
  border-left-color: #edf9ff;
}

.theme-amber .badge.badge-primary {
  background-color: #fbab18 !important;
}
.theme-amber .badge.badge-primary.badge-right:after {
  border-left-color: #fbab18;
}
.theme-amber .badge.badge-secondary {
  background-color: #ffd54f !important;
}
.theme-amber .badge.badge-secondary.badge-right:after {
  border-left-color: #ffd54f;
}
.theme-amber .badge.badge-tertiary {
  background-color: #ffecb3 !important;
}
.theme-amber .badge.badge-tertiary.badge-right:after {
  border-left-color: #ffecb3;
}
.theme-amber .badge.badge-quaternary {
  background-color: #fff7e1 !important;
}
.theme-amber .badge.badge-quaternary.badge-right:after {
  border-left-color: #fff7e1;
}

.badge {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  position: relative;
}
.badge:after, .badge:before {
  position: absolute;
  display: inline-block;
  top: 0;
  content: "";
}
.badge.badge-right {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.badge.badge-right:after {
  border-top: 0.75rem solid transparent;
  border-left: 1rem solid;
  border-bottom: 0.75rem solid transparent;
  right: -1rem;
}
.badge.badge-right.p-2:after {
  border-top: 1rem solid transparent;
  border-left: 1rem solid;
  border-bottom: 1rem solid transparent;
}
.badge.badge-right.p-3:after {
  border-top: 1.5rem solid transparent;
  border-left: 1.5rem solid;
  border-bottom: 1.5rem solid transparent;
  right: -1.5rem;
}
.badge.badge-left {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.badge.badge-left:before {
  border-top: 17px solid transparent;
  border-right: 17px solid;
  border-bottom: 17px solid transparent;
  left: -10px;
}

.badge {
  margin-bottom: 30px;
}

</style>

{%- include breadcrumbs.html -%}

<div class="container d-flex flex-wrap body-wrapper">
	<main class="col-12 order-lg-2" role="main" aria-label="Main Content Area">

		<p>Arrow badges for Bootstrap 4. <a href="https://codepen.io/peterbenoit/pen/GRpLVEw">Original Demo</a>.</p>

		<h2>Right Aligned Arrow Badges</h2>
		<div class="row">
			<div class="col theme-blue">
				<h3>Standard</h3>
				<span class="badge badge-primary badge-right">Primary</span>
				<br>
				<span class="badge badge-secondary badge-right">Secondary</span>
				<br>
				<span class="badge badge-tertiary badge-right">Tertiary</span>

				<h3>Padding <code>.p-1</code></h3>
				<span class="badge badge-primary badge-right p-1">Primary</span>
				<br>
				<span class="badge badge-secondary badge-right p-1">Secondary</span>
				<br>
				<span class="badge badge-tertiary badge-right p-1">Tertiary</span>

				<h3>Padding <code>.p-2</code></h3>
				<span class="badge badge-primary badge-right p-2">Primary</span>
				<br>
				<span class="badge badge-secondary badge-right p-2">Secondary</span>
				<br>
				<span class="badge badge-tertiary badge-right p-2">Tertiary</span>


				<h3>Padding <code></code>.p-3</h3>
				<span class="badge badge-primary badge-right p-3">Primary</span>
				<br>
				<span class="badge badge-secondary badge-right p-3">Secondary</span>
				<br>
				<span class="badge badge-tertiary badge-right p-3">Tertiary</span>
			</div>
			<div class="col theme-amber">
				<h3>Standard</h3>
				<span class="badge badge-primary badge-right">Primary</span>
				<br>
				<span class="badge badge-secondary badge-right">Secondary</span>
				<br>
				<span class="badge badge-tertiary badge-right">Tertiary</span>

				<h3>Padding <code>.p-1</code></h3>
				<span class="badge badge-primary badge-right p-1">Primary</span>
				<br>
				<span class="badge badge-secondary badge-right p-1">Secondary</span>
				<br>
				<span class="badge badge-tertiary badge-right p-1">Tertiary</span>

				<h3>Padding <code>.p-2</code></h3>
				<span class="badge badge-primary badge-right p-2">Primary</span>
				<br>
				<span class="badge badge-secondary badge-right p-2">Secondary</span>
				<br>
				<span class="badge badge-tertiary badge-right p-2">Tertiary</span>


				<h3>Padding <code></code>.p-3</h3>
				<span class="badge badge-primary badge-right p-3">Primary</span>
				<br>
				<span class="badge badge-secondary badge-right p-3">Secondary</span>
				<br>
				<span class="badge badge-tertiary badge-right p-3">Tertiary</span>
			</div>
		</div>
	</main>
</div>

<div aria-multiselectable="true" class="accordion indicator-plus accordion-white mb-3 mt-3" id="accordion-4" role="tabpanel">
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-3" data-toggle="collapse" id="accordion-4-card-3" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-3">Notes</a>
		</div>
		<div aria-labelledby="accordion-4-card-3" class="collapse show" id="accordion-4-collapse-3" role="tabpanel">
			<div class="card-body">
				<p>Some info on this demo.</p>
				<p>{{- page.description -}}</p>
			</div>
		</div>
	</div>
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-1" data-toggle="collapse" id="accordion-4-card-1" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-1">CSS</a>
		</div>
		<div aria-labelledby="accordion-4-card-1" class="collapse" id="accordion-4-collapse-1" role="tabpanel">
			<div class="card-body">
				<div class="row">
					<div class="col">
						<pre><code class="language-css line-numbers"><script type="prism-html-markup">.theme-blue .badge.badge-primary {
							background-color: #005eaa !important;
						  }
						  .theme-blue .badge.badge-primary.badge-right:after {
							border-left-color: #005eaa;
						  }
						  .theme-blue .badge.badge-secondary {
							background-color: #88c3ea !important;
						  }
						  .theme-blue .badge.badge-secondary.badge-right:after {
							border-left-color: #88c3ea;
						  }
						  .theme-blue .badge.badge-tertiary {
							background-color: #c0e9ff !important;
						  }
						  .theme-blue .badge.badge-tertiary.badge-right:after {
							border-left-color: #c0e9ff;
						  }
						  .theme-blue .badge.badge-quaternary {
							background-color: #edf9ff !important;
						  }
						  .theme-blue .badge.badge-quaternary.badge-right:after {
							border-left-color: #edf9ff;
						  }

						  .theme-amber .badge.badge-primary {
							background-color: #fbab18 !important;
						  }
						  .theme-amber .badge.badge-primary.badge-right:after {
							border-left-color: #fbab18;
						  }
						  .theme-amber .badge.badge-secondary {
							background-color: #ffd54f !important;
						  }
						  .theme-amber .badge.badge-secondary.badge-right:after {
							border-left-color: #ffd54f;
						  }
						  .theme-amber .badge.badge-tertiary {
							background-color: #ffecb3 !important;
						  }
						  .theme-amber .badge.badge-tertiary.badge-right:after {
							border-left-color: #ffecb3;
						  }
						  .theme-amber .badge.badge-quaternary {
							background-color: #fff7e1 !important;
						  }
						  .theme-amber .badge.badge-quaternary.badge-right:after {
							border-left-color: #fff7e1;
						  }

						  .badge {
							font-family: 'Open Sans', sans-serif;
							font-size: 1rem;
							font-weight: normal;
							position: relative;
						  }
						  .badge:after, .badge:before {
							position: absolute;
							display: inline-block;
							top: 0;
							content: "";
						  }
						  .badge.badge-right {
							border-top-right-radius: 0;
							border-bottom-right-radius: 0;
						  }
						  .badge.badge-right:after {
							border-top: 0.75rem solid transparent;
							border-left: 1rem solid;
							border-bottom: 0.75rem solid transparent;
							right: -1rem;
						  }
						  .badge.badge-right.p-2:after {
							border-top: 1rem solid transparent;
							border-left: 1rem solid;
							border-bottom: 1rem solid transparent;
						  }
						  .badge.badge-right.p-3:after {
							border-top: 1.5rem solid transparent;
							border-left: 1.5rem solid;
							border-bottom: 1.5rem solid transparent;
							right: -1.5rem;
						  }
						  .badge.badge-left {
							border-top-left-radius: 0;
							border-bottom-left-radius: 0;
						  }
						  .badge.badge-left:before {
							border-top: 17px solid transparent;
							border-right: 17px solid;
							border-bottom: 17px solid transparent;
							left: -10px;
						  }

						  .badge {
							margin-bottom: 30px;
						  }</script></code>
						</pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
