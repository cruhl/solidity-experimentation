import * as React from "react";
import { render } from "react-dom";

declare const require: any;

// tslint:disable-next-line
const Web3 = require("web3");

import "./index.scss";

import App from "./components/App";

const web3 = new Web3();

console.log(web3);

render(<App />, document.getElementById("app"));
