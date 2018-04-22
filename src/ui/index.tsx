import * as React from "react";
import { render } from "react-dom";

import "./index.scss";

import App from "./components/App";

declare const require: any;

// tslint:disable-next-line
const Web3 = require("web3");
const web3 = new Web3();

render(<App />, document.getElementById("app"));
