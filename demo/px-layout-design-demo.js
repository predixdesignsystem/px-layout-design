/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-layout-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-layout-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-layout-design" description="The Predix UI Layout module defines the 'grid' for Predix UI. Layout items can be autosized, or given a specific width, and layouts reflow responsively on smaller viewports." layer="objects" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-defaults-design&quot;,
    &quot;https://github.com/PredixDev/px-helpers-design&quot;
  ]" selected-options="{{selectedOptions}}">

<!-- 2: Set Options -->
<px-sass-doc-option slot="options" option-name="Gutters" choose-with="dropdown" choices="[
    &quot;flush&quot;,
    &quot;tiny&quot;,
    &quot;small&quot;,
    &quot;regular (default)&quot;,
    &quot;large&quot;,
    &quot;huge&quot;
  ]" default-choice="regular (default)">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Alignment" choose-with="dropdown" choices="[
    &quot;left (default)&quot;,
    &quot;center&quot;,
    &quot;right&quot;
  ]" default-choice="left (default)">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Reverse" choose-with="boolean">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Vertical" choose-with="dropdown" choices="[
    &quot;top (default)&quot;,
    &quot;middle&quot;,
    &quot;bottom&quot;,
    &quot;full&quot;
  ]" default-choice="top (default)">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Vertical (by Item)" choose-with="dropdown" choices="[
    &quot;top (default)&quot;,
    &quot;center&quot;,
    &quot;bottom&quot;
  ]" default-choice="top (default)">
</px-sass-doc-option>

<!-- 3: Make HTML Demo -->
<section slot="demo-html">
<div class\$="{{layoutClasses}}">
  <div class\$="{{layoutItemClasses}}">Layout Item 1</div>
  <div class\$="{{layoutItemClasses}}">Layout Item 2. <br> More text to show functionality.</div>
  <div class\$="{{layoutItemClasses}}">Layout Item 3</div>
</div>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
{{importCode}}
</section>

<!-- 5: Set Usage HTML -->
<section slot="intro">

</section>

<section slot="usage">
<h4>Basics:</h4>
\`\`\`
<!-- Layout - Parent element -->
<div class="layout">
  <!-- Layout Item - Child element(s) -->
  <div class="layout__item"></div>
  ...
  <div class="layout__item"></div>
</div>
\`\`\`
<p>Layout items are automatically sized if a specific width is not defined.</p>

<div class="layout layout--small">
  <div class="layout__item">1</div>
</div>
<div class="layout layout--small">
  <div class="layout__item">1/2</div>
  <div class="layout__item">1/2</div>
</div>
<div class="layout layout--small">
  <div class="layout__item">1/3</div>
  <div class="layout__item">1/3</div>
  <div class="layout__item">1/3</div>
</div>
<div class="layout layout--small">
  <div class="layout__item">1/4</div>
  <div class="layout__item">1/4</div>
  <div class="layout__item">1/4</div>
  <div class="layout__item">1/4</div>
</div>
<div class="layout layout--small">
  <div class="layout__item">1/6</div>
  <div class="layout__item">1/6</div>
  <div class="layout__item">1/6</div>
  <div class="layout__item">1/6</div>
  <div class="layout__item">1/6</div>
  <div class="layout__item">1/6</div>
</div>

<p>A mixture of specific widths and autosizing can also be used. The width classes come from <a href="https://www.predix-ui.com/#/css/px-widths-design/" target="_blank">px-widths-design</a>.</p>

\`\`\`
<div class="layout layout--small">
  <div class="layout__item u-1/6">1/6</div>
  <div class="layout__item">auto</div>
  <div class="layout__item u-1/4">1/4</div>
</div>
\`\`\`

<div class="layout layout--small">
  <div class="layout__item u-1/3">1/3</div>
  <div class="layout__item">auto</div>
</div>
<div class="layout layout--small">
  <div class="layout__item u-1/4">1/4</div>
  <div class="layout__item">auto</div>
  <div class="layout__item">auto</div>
  <div class="layout__item u-1/3">1/3</div>
</div>
<div class="layout layout--small">
  <div class="layout__item u-1/6">1/6</div>
  <div class="layout__item">auto</div>
  <div class="layout__item u-1/4">1/4</div>
</div>

<h4>Gutters:</h4>
\`\`\`
<!-- Layout Tiny - 5px gutters -->
<div class="layout layout--tiny"></div>

<!-- Layout Small - 10px gutters -->
<div class="layout layout--small"></div>

<!-- Layout Large - 20px gutters -->
<div class="layout layout--large"></div>

<!-- Layout Huge - 30px gutters -->
<div class="layout layout--huge"></div>

<!-- Layout Flush - no gutters -->
<div class="layout layout--huge"></div>
\`\`\`

<h4>Order:</h4>
\`\`\`
<!-- Layout Reverse - Reverse rendered order of layout items -->
<div class="layout layout--rev"></div>
\`\`\`

<h4>Overall Alignment:</h4>
\`\`\`
<!-- Layout Middle - Align layout items to the vertical centers of each other. -->
<div class="layout layout--middle"></div>

<!-- Layout Bottom - Align layout items to the vertical bottoms of each other. -->
<div class="layout layout--bottom"></div>

<!-- Layout Full - Align layout items to all be the same height. -->
<div class="layout layout--full"></div>

<!-- Layout Right - Make the layout items fill up from the right hand side. -->
<div class="layout layout--right"></div>

<!-- Layout Center - Make the layout items fill up from the center outward. -->
<div class="layout layout--center"></div>
\`\`\`

<h4>Individual Alignment:</h4>
\`\`\`
<!-- Item Full - Make an individual layout item fill up the height of its layout. -->
<div class="layout layout__item--full"></div>

<!-- Item Center - Make an individual layout item fill up from the center vertically. -->
<div class="layout layout__item--center"></div>

<!-- Item Bottom - Make an individual layout item fill up from the bottom up. -->
<div class="layout layout__item--bottom"></div>
\`\`\`

</section>

</px-sass-doc>
`,

  is: 'px-layout-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated : function(evt) {
    //call functions created below
    this.importCode = this._importCode();
    this.layoutClasses = this._layoutClasses();
    this.layoutItemClasses = this._layoutItemClasses();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _layoutClasses : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts.Gutters === "flush")           strings.push("layout--flush");
    if (opts.Gutters === "tiny")            strings.push("layout--tiny");
    if (opts.Gutters === "small")           strings.push("layout--small");
    if (opts.Gutters === "large")           strings.push("layout--large");
    if (opts.Gutters === "huge")            strings.push("layout--huge");
    if (opts.Reverse === true)              strings.push("layout--rev");
    if (opts.Vertical === "middle")         strings.push("layout--middle");
    if (opts.Vertical === "bottom")         strings.push("layout--bottom");
    if (opts.Vertical === "full")           strings.push("layout--full");
    if (opts.Alignment === "right")         strings.push("layout--right");
    if (opts.Alignment === "center")        strings.push("layout--center");
    return ("layout " + strings.join(" ")).trim();
  },

  _layoutItemClasses : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if(opts["Vertical (by Item)"] === "center")  strings.push("layout__item--center");
    if(opts["Vertical (by Item)"] === "bottom")  strings.push("layout__item--bottom");
    if(opts["Vertical (by Item)"] === "full")    strings.push("layout__item--full");
    return ("layout__item u-1/4 " + strings.join(" ")).trim();
  },

  _importCode : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts.Gutters === "flush")          strings.push("$inuit-enable-layout--flush : true;");
    if (opts.Gutters === "tiny")           strings.push("$inuit-enable-layout--tiny : true;");
    if (opts.Gutters === "small")          strings.push("$inuit-enable-layout--small : true;");
    if (opts.Gutters === "large")          strings.push("$inuit-enable-layout--large : true;");
    if (opts.Gutters === "huge")           strings.push("$inuit-enable-layout--huge : true;");
    if (opts.Reverse === true)             strings.push("$inuit-enable-layout--rev : true;");
    if (opts.Vertical === "middle")        strings.push("$inuit-enable-layout--middle : true;");
    if (opts.Vertical === "bottom")        strings.push("$inuit-enable-layout--bottom : true;");
    if (opts.Vertical === "full")          strings.push("$inuit-enable-layout--full : true;");
    if (opts.Alignment === "right")        strings.push("$inuit-enable-layout--right : true;");
    if (opts.Alignment === "center")       strings.push("$inuit-enable-layout--center : true;");
    return (strings.join("\n") + "\n@import 'px-layout-design/_objects.layout.scss';").trim();
  }
});
