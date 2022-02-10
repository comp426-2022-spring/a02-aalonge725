import { flipACoin } from "./modules/coin.mjs";

import {createRequire} from "module";
const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));

args["call"]

if (args.call == "heads" || args.call == "tails") {
    console.log(flipACoin(args.call))
} else if (args.call == undefined) {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
} else {
    console.log("Error: invalid input.\nUsage: node guess-flip --call=[heads|tails]")
}