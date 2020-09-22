import React from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import TwoColumns from "./TwoColumns";
import { TwoColumnProps } from "./propTypes";

function TwoColumnPageContainer(props: TwoColumnProps) {
  return (
    <div className={props.page}>
        <Header page={props.page} /> 
        <TwoColumns {...props} />
        <Footer />
    </div>
  );
}

export default TwoColumnPageContainer;