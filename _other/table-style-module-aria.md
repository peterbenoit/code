---
layout: template
permalink: other/table-style-module-aria.html
description:
title: Table Style Module with ARIA attributes
type: demo
localcss:
localjs:
includePrismJs: false
externalcss:
externaljs:
showinnav: true
order:
---

{%- include breadcrumbs.html -%}


<div class="step-table m-3" role="table" aria-label="Table Style" aria-describedby="table_desc">
    <div id="table_desc" class="sr-only">This table style description is only available to screen readers</div>
    <div role="rowgroup">
        <div class="row" role="row">
            <div class="d-none d-md-flex col-md-4 ccc column-header align-items-center p-3 bg-gray-d1">
                <div class="flex-fill">
                    <div class="font-weight-bold m-0 open">
                        <p role="columnheader">Icon</p>
                    </div>
                </div>
            </div>
            <div class="d-none d-md-flex col-md-4 ccc column-header align-items-center p-3 bg-gray-d1">
                <div class="flex-fill">
                    <div class="font-weight-bold m-0 open">
                        <p role="columnheader">Description</p>
                    </div>
                </div>
            </div>
            <div class="d-none d-md-flex col-md-4 ccc column-header align-items-center p-3 bg-gray-d1">
                <div class="flex-fill">
                    <div class="font-weight-bold m-0 open">
                        <p role="columnheader">When to Use</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div role="rowgroup">
        <div class="row bg-gray-l3" role="row">
            <div class="col-md-4 p-3 pt-3" role="cell">
                <div class="d-md-none font-weight-bold mt-0 open column-header">
                    <p>Icon</p>
                </div><span class="sr-only">medical icon</span><span aria-hidden="true" class="fi cdc-icon-medical_02 x64 inline-block fill-cyan-p"></span>
            </div>
            <div class="col-md-4 p-3 pt-3" role="cell">
                <div class="d-md-none font-weight-bold mt-0 open column-header">
                    <p>Description</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="col-md-4 p-3 pt-3" role="cell">
                <div class="d-md-none font-weight-bold mt-0 open column-header">
                    <p>When to Use</p>
                </div>
                <ul class="false">
                    <li>Lorem ipsum.</li>
                    <li>Dolor sit amet.</li>
                </ul>
            </div>
        </div>
        <div class="row" role="row">
            <div class="col-md-4 p-3 pt-3" role="cell">
                <div class="d-md-none font-weight-bold mt-0 open column-header">
                    <p>Icon</p>
                </div><span class="sr-only">medical icon</span><span aria-hidden="true" class="fi cdc-icon-medical_04 x64 inline-block fill-cyan-p"></span>
            </div>
            <div class="col-md-4 p-3 pt-3" role="cell">
                <div class="d-md-none font-weight-bold mt-0 open column-header">
                    <p>Description</p>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="col-md-4 p-3 pt-3" role="cell">
                <div class="d-md-none font-weight-bold mt-0 open column-header">
                    <p>When to Use</p>
                </div>
                <ul class="false">
                    <li>Lorem ipsum.</li>
                    <li>Dolore magna.</li>
                </ul>
            </div>
        </div>
        <div class="row bg-gray-l3" role="row">
            <div class="col-md-4 p-3 pt-3" role="cell">
                <div class="d-md-none font-weight-bold mt-0 open column-header">
                    <p>Icon</p>
                </div><span class="sr-only">mask icon</span><span aria-hidden="true" class="fi cdc-icon-mask x64 inline-block fill-cyan-p"></span>
            </div>
            <div class="col-md-4 p-3 pt-3" role="cell">
                <div class="d-md-none font-weight-bold mt-0 open column-header">
                    <p>Description</p>
                </div>
                <p>Sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="col-md-4 p-3 pt-3" role="cell">
                <div class="d-md-none font-weight-bold mt-0 open column-header">
                    <p>When to Use</p>
                </div>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
    </div>
</div>