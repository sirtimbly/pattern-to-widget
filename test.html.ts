#! /usr/bin/env node
import { WidgetBase } from "@dojo/widget-core/WidgetBase";
import { v } from "@types/camel-case@dojo/widget-core/d";
export default class test extends WidgetBase {
  protected render() {
    return v("div.object-container", [
  v("div.form-group.border", [
    v("label", `Input`),
    `
    `,
    v("input", {
      "attributes": {
        "type": "text"
      }
    })
  ]),
  v("ul", [
    v("li", [
      v("a", {
        "attributes": {
          "href": "#"
        }
      }, `A Link`)
    ]),
    v("li", [
      v("a", {
        "attributes": {
          "href": "#"
        }
      }, `A Link 2`)
    ])
  ]),
  v("div.form-actions", [
    v("button.button.button-primary", `Save`)
  ])
])
  }
};

