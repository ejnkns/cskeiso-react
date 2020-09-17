import React from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import TwoColumns from "./TwoColumns";


function TwoColumnPageContainer({page, Column1, Column2, Rows1, Rows2}) {
    const twoColumnsProps = {
        Column1: Column1,
        Column2: Column2,
        Rows1: Rows1,
        Rows2: Rows2
    }
  return (
    <div className={page}>
        <Header page={page} />
        <TwoColumns {...twoColumnsProps} />
        <Footer />
    </div>
  );
}

export default TwoColumnPageContainer;