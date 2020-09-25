import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
/*
import { getSheetRows } from "./common/GoogleSheets"
import { GoogleSpreadsheetRow } from "google-spreadsheet";
const CskeisoSpreadSheetID = "1O2V8Ms0aF0tGaijfQEDeU7r21aC_jBqq_B0deGxDarA"
const FiveWaysSheetID = "0";
// load in latest data from spreadsheet
async function handleSheet() {
  let rows: GoogleSpreadsheetRow[] | undefined = await getSheetRows(CskeisoSpreadSheetID, FiveWaysSheetID);
  if (rows) {
      for (let i = 0; i < rows.length; i++) {
      }
  }
}
//handleSheet()
*/

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
