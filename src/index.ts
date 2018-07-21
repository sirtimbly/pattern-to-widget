#! /usr/bin/env node
import { htmlToHs } from "html-to-hyperscript";
import * as commander from "commander";
import * as normalize from "normalize-path";
const camelCase = require("camel-case");

import * as fs from "fs";

const convert = htmlToHs({syntax: "h"});

commander
  .version("0.1.4")
  .usage("[options] inputPath")
  // .option("-w, --watch", "watch the file for changes")
  // .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
  .parse(process.argv);

const inputPath = normalize(commander.args[0]);

fs.readFile(inputPath, (err: NodeJS.ErrnoException, data: Buffer) => {
    const baseName = camelCase(inputPath.replace(".html", ""));
    let output = convert(data.toString());
    const search = "h\(";
    output = output.replace(new RegExp("h\\(", "g"), "v(");
    const tsTemplate = `import { WidgetBase } from "@dojo/widget-core/WidgetBase";
import { v } from "@types/camel-case@dojo/widget-core/d";

export default class ${baseName} extends WidgetBase {
  protected render() {
    return ${output}
  }
};

`;
    fs.writeFileSync(inputPath + ".ts", tsTemplate);
});

