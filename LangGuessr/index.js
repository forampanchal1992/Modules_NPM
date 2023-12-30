import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { franc } from "franc";
// const franc = require("franc");
const langs = require("langs");
const colors = require("colors")

//import {franc, francAll} from 'franc'
const input = process.argv[2];
const langCode = franc(input);

if(langCode === 'und'){
    console.log("Sorry, I couldn't figure it out!!!".red)
}
else{
    const language = langs.where("3",langCode);
    console.log(`Our best guess is : ${language.name}`.green)
}

