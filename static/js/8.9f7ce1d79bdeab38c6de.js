webpackJsonp([8],{z3sd:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("markdown-wrapper",[a("h1",{attrs:{id:"tooltip"}},[t._v("Tooltip "),a("a",{staticClass:"header-anchor",attrs:{href:"#tooltip","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("h2",{attrs:{id:"example"}},[t._v("Example "),a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("The first element appear in "),a("code",{pre:!0},[t._v("<tooltip>")]),t._v(" node will be the trigger element. You can also use "),a("code",{pre:!0},[t._v("target")]),t._v(" to reference it from outside the component.")]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": Tooltips with zero-length texts are never displayed.")]),t._v(" "),a("p",[t._v("Hover over the button below to toggle tooltips:")]),t._v(" "),a("tooltip-example",{ref:"tooltip-example"}),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"btn"')]),t._v(">")]),t._v("Hover me!"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("tooltip")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"Static tooltip content goes here"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("target")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"#btn"')]),t._v("/>")]),t._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("\x3c!-- tooltip-example.vue --\x3e")]),t._v("\n")])]),t._v(" "),a("h3",{attrs:{id:"trigger-target"}},[t._v("Trigger target "),a("a",{staticClass:"header-anchor",attrs:{href:"#trigger-target","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("Order to decide the tooltip trigger:")]),t._v(" "),a("ol",[a("li",[t._v("Use "),a("code",{pre:!0},[t._v("target")]),t._v(" if exist.")]),t._v(" "),a("li",[t._v("Use element in default slot with "),a("code",{pre:!0},[t._v('data-role="trigger"')]),t._v(" attribute if exist.")]),t._v(" "),a("li",[t._v("Use the first element present in default slot.")])]),t._v(" "),a("p",[t._v("A "),a("code",{pre:!0},[t._v("target")]),t._v(" can be:")]),t._v(" "),a("ul",[a("li",[t._v("Selector that can be recognized by "),a("code",{pre:!0},[t._v("querySelect")]),t._v(".")]),t._v(" "),a("li",[t._v("Reference to Element.")]),t._v(" "),a("li",[t._v("Reference to Component.")])]),t._v(" "),a("h2",{attrs:{id:"directive"}},[t._v("Directive "),a("a",{staticClass:"header-anchor",attrs:{href:"#directive","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("You can also simply use tooltips via "),a("code",{pre:!0},[t._v("v-tooltip")]),t._v(" directive:")]),t._v(" "),a("tooltip-directive",{ref:"tooltip-directive"}),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-tooltip")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"'Static tooltip content goes here'\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Hover me!"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("\x3c!-- tooltip-directive.vue --\x3e")]),t._v("\n")])]),t._v(" "),a("h2",{attrs:{id:"placements"}},[t._v("Placements "),a("a",{staticClass:"header-anchor",attrs:{href:"#placements","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("Supported placements:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("top")]),t._v(" (Default)")]),t._v(" "),a("li",[a("strong",[t._v("right")])]),t._v(" "),a("li",[a("strong",[t._v("bottom")])]),t._v(" "),a("li",[a("strong",[t._v("left")])])]),t._v(" "),a("tooltip-placements",{ref:"tooltip-placements"}),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-tooltip.left")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"'Tooltip content on left'\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Left"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-tooltip.top")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"'Tooltip content on top'\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Top"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-tooltip.bottom")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"'Tooltip content on bottom'\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Bottom"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-tooltip.right")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"'Tooltip content on right'\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Right"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("\x3c!-- tooltip-placements.vue --\x3e")]),t._v("\n")])]),t._v(" "),a("h2",{attrs:{id:"auto-placement"}},[t._v("Auto placement "),a("a",{staticClass:"header-anchor",attrs:{href:"#auto-placement","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("Tooltips will try to find the best placement for displaying while "),a("code",{pre:!0},[t._v("auto-placement")]),t._v(" is set to "),a("code",{pre:!0},[t._v("true")]),t._v(" (by default) base on the default placement setting. Useful while there does not have enough space to show the entire tooltip content.")]),t._v(" "),a("p",[a("code",{pre:!0},[t._v("auto-placement")]),t._v(" try order: right -> bottom -> left -> top, and use the set one if none of these matched.")]),t._v(" "),a("h2",{attrs:{id:"triggers"}},[t._v("Triggers "),a("a",{staticClass:"header-anchor",attrs:{href:"#triggers","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("Supported triggers:")]),t._v(" "),a("ul",[a("li",[a("code",{pre:!0},[t._v("hover")]),t._v(" show on mouseenter, hide on mouseleave.")]),t._v(" "),a("li",[a("code",{pre:!0},[t._v("focus")]),t._v(" show on focus, hide on blur.")]),t._v(" "),a("li",[a("code",{pre:!0},[t._v("hover-focus")]),t._v(" (Default) combination of hover and focus trigger.")]),t._v(" "),a("li",[a("code",{pre:!0},[t._v("click")]),t._v(" toggle on trigger click.")]),t._v(" "),a("li",[a("code",{pre:!0},[t._v("outside-click")]),t._v(" same as click, but not close on tooltip click and close on outside click.")])]),t._v(" "),a("tooltip-triggers",{ref:"tooltip-triggers"}),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-tooltip")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"'Static tooltip content'\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Hover-Focus (Default)"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-tooltip.hover")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"'Static tooltip content'\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Hover"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-tooltip.focus")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"'Static tooltip content'\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Focus"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-tooltip.click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"'Static tooltip content'\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Click"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-tooltip.outside-click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"'Static tooltip content'\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Outside-Click"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("\x3c!-- tooltip-triggers.vue --\x3e")]),t._v("\n")])]),t._v(" "),a("h2",{attrs:{id:"manual-trigger"}},[t._v("Manual trigger "),a("a",{staticClass:"header-anchor",attrs:{href:"#manual-trigger","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("Set "),a("code",{pre:!0},[t._v("trigger")]),t._v(" prop to "),a("code",{pre:!0},[t._v("manual")]),t._v(" to disable all the event listeners, and controls tooltips show / hide only by "),a("code",{pre:!0},[t._v("v-model")]),t._v(" change.")]),t._v(" "),a("tooltip-manual-trigger",{ref:"tooltip-manual-trigger"}),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("section")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("tooltip")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"Static tooltip content goes here"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("trigger")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"manual"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("You Can't Trigger Tooltip Here..."),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("tooltip")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("hr")]),t._v("/>")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"show = !show"')]),t._v(">")]),t._v("Toggle Tooltip"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("section")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("\x3c!-- tooltip-manual-trigger.vue --\x3e")]),t._v("\n")])]),t._v(" "),a("h2",{attrs:{id:"disable-tooltip"}},[t._v("Disable tooltip "),a("a",{staticClass:"header-anchor",attrs:{href:"#disable-tooltip","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("Set "),a("code",{pre:!0},[t._v("enable")]),t._v(" prop to "),a("code",{pre:!0},[t._v("false")]),t._v(" to disable a tooltip.")]),t._v(" "),a("tooltip-disable",{ref:"tooltip-disable"}),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("tooltip")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"Static tooltip content goes here"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":enable")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Disabled Tooltip"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("btn")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("tooltip")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("\x3c!-- tooltip-disable.vue --\x3e")]),t._v("\n")])]),t._v(" "),a("h1",{attrs:{id:"api-reference"}},[t._v("API Reference "),a("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("h2",{attrs:{id:"tooltip-2"}},[a("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/components/tooltip/Tooltip.vue"}},[t._v("Tooltip")]),t._v(" "),a("a",{staticClass:"header-anchor",attrs:{href:"#tooltip-2","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("h3",{attrs:{id:"props"}},[t._v("Props "),a("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[t._v("v-model")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Show / hide the tooltip.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("target")])]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Tooltip trigger, can be a select or reference to Element / Component.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("tag")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("span")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The HTML tag that render the component.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("text")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The tooltip text.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("enable")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Enable the tooltip.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("enterable")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Whether mouse can enter the tooltip.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("placement")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("top")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The tooltip placement, support "),a("code",{pre:!0},[t._v("top")]),t._v(" / "),a("code",{pre:!0},[t._v("bottom")]),t._v(" / "),a("code",{pre:!0},[t._v("left")]),t._v(" / "),a("code",{pre:!0},[t._v("right")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("auto-placement")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Try to auto adjust the placement if the set one does not have enough space to show.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("trigger")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("hover-focus")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The tooltip trigger event, support "),a("code",{pre:!0},[t._v("hover")]),t._v(" / "),a("code",{pre:!0},[t._v("focus")]),t._v(" / "),a("code",{pre:!0},[t._v("hover-focus")]),t._v(" / "),a("code",{pre:!0},[t._v("click")]),t._v(" / "),a("code",{pre:!0},[t._v("outside-click")]),t._v(" / "),a("code",{pre:!0},[t._v("manual")])])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("append-to")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("body")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Element selector that the tooltip append to.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("transition-duration")])]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("150")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The tooltip show / hide transition time in ms.")])])])])]),a("h3",{attrs:{id:"events"}},[t._v("Events "),a("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Params")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[t._v("show")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Fire after tooltip show.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("hide")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Fire after tooltip hide.")])])])])]),a("h3",{attrs:{id:"directive-2"}},[a("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/directives/tooltip/tooltip.js"}},[t._v("Directive")]),t._v(" "),a("a",{staticClass:"header-anchor",attrs:{href:"#directive-2","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("The binding value will be the text content of corresponding tooltip.")]),t._v(" "),a("p",[a("strong",[t._v("Simplest Usage")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[t._v("v-tooltip=\"'tooltip content'\"\n")])]),t._v(" "),a("p",[a("strong",[t._v("Placements Examples")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[t._v("v-tooltip.left=\"'tooltip content'\"\nv-tooltip.right=\"'tooltip content'\"\n")])]),t._v(" "),a("p",[a("strong",[t._v("Triggers Examples")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[t._v("v-tooltip.hover=\"'tooltip content'\"\nv-tooltip.click=\"'tooltip content'\"\n")])]),t._v(" "),a("p",[a("strong",[t._v("Unenterable")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[t._v("v-tooltip.unenterable=\"'tooltip content'\"\n")])]),t._v(" "),a("p",[a("strong",[t._v("Custom append-to")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[t._v("v-tooltip:arg=\"'tooltip content'\"\n")])]),t._v(" "),a("p",[a("code",{pre:!0},[t._v("arg")]),t._v(" is the ID (without prefix "),a("code",{pre:!0},[t._v("#")]),t._v(") of the element to append to, leave it empty to use default value "),a("code",{pre:!0},[t._v("body")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Combination")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[t._v("v-tooltip.left.hover=\"'tooltip content'\"\nv-tooltip:some-id.right.click=\"'tooltip content'\"\n")])])],1)},staticRenderFns:[]},v=a("VU/8")({components:{"tooltip-example":{template:'<div class="markdown-live-example"><btn type="primary" id="btn">Hover me!</btn>\n<tooltip text="Static tooltip content goes here" target="#btn"/>\n\x3c!-- tooltip-example.vue --\x3e</div>'},"tooltip-directive":{template:'<div class="markdown-live-example"><btn v-tooltip="\'Static tooltip content goes here\'" type="primary">Hover me!</btn>\n\x3c!-- tooltip-directive.vue --\x3e</div>'},"tooltip-placements":{template:'<div class="markdown-live-example"><btn v-tooltip.left="\'Tooltip content on left\'" type="primary">Left</btn>\n<btn v-tooltip.top="\'Tooltip content on top\'" type="primary">Top</btn>\n<btn v-tooltip.bottom="\'Tooltip content on bottom\'" type="primary">Bottom</btn>\n<btn v-tooltip.right="\'Tooltip content on right\'" type="primary">Right</btn>\n\x3c!-- tooltip-placements.vue --\x3e</div>'},"tooltip-triggers":{template:'<div class="markdown-live-example"><btn v-tooltip="\'Static tooltip content\'" type="primary">Hover-Focus (Default)</btn>\n<btn v-tooltip.hover="\'Static tooltip content\'" type="primary">Hover</btn>\n<btn v-tooltip.focus="\'Static tooltip content\'" type="primary">Focus</btn>\n<btn v-tooltip.click="\'Static tooltip content\'" type="primary">Click</btn>\n<btn v-tooltip.outside-click="\'Static tooltip content\'" type="primary">Outside-Click</btn>\n\x3c!-- tooltip-triggers.vue --\x3e</div>'},"tooltip-manual-trigger":{template:'<div class="markdown-live-example">\n  <section>\n    <tooltip text="Static tooltip content goes here" trigger="manual" v-model="show">\n      <btn>You Can\'t Trigger Tooltip Here...</btn>\n    </tooltip>\n    <hr/>\n    <btn type="primary" @click="show = !show">Toggle Tooltip</btn>\n  </section>\n</div>',data:function(){return{show:!1}}},"tooltip-disable":{template:'<div class="markdown-live-example"><tooltip text="Static tooltip content goes here" :enable="false">\n  <btn type="primary">Disabled Tooltip</btn>\n</tooltip>\n\x3c!-- tooltip-disable.vue --\x3e</div>'}}},e,!1,null,null,null);s.default=v.exports}});
//# sourceMappingURL=8.9f7ce1d79bdeab38c6de.js.map