import React from "react";
import { A } from "hookrouter";
import "../App.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import TwoColumns from "../common/TwoColumns";

function Work() {
  return (
    <div className="work">
      <Header page="work" />
      <TwoColumns
        Column1="Exhibition"
        Column2="Curation"
        Rows1={Rows1}
        Rows2={Rows2}
      />
      <Footer />
    </div>
  );
}

function Rows1() {
  return (
    <div className="row-data">
      <p>
        <i>
          <A href="/work/Casting-Couch">Casting Couch</A>
          <br />
          <br />
          <A href="/work/Muse">Muse</A>
          <br />
          <br />
          <A href="/work/Yea-Shes-Got-Long-Legs-and-Huge">
            Yea, She's Got Long Legs &amp; Huge Tits
          </A>
          <br />
          <br />
          <A href="/work/5-Ways">5 Ways</A>
          <br />
          <br />
          <A href="/work/meowTV">MeowTv</A>
          <br />
          <br />
          <A href="/work/Love-Fascism">
            Love &amp; Fascism In The 21st Century
          </A>
          <br />
          <br />
          <A href="/work/Act-4">Act 4: Fragments</A>
          <br />
          <br />
          <A href="/work/Sex-Brief">Sex Brief</A>
          <br />
          <br />
          <A href="/work/Buster">Buster</A>
          <br />
          <br />
          <A href="/work/iPhone-Notes">iPhone Notes</A>
          <br />
          <br />
          <A href="/work/My-Beige-Girl">My Beige Girl</A>
          <br />
          <br />
          <A href="/work/Bang-Bang-Youre-Mine">Bang Bang You're Mine</A>
          <br />
          <br />
        </i>
      </p>
    </div>
  );
}

function Rows2() {
  return (
    <div className="row-data">
      <p>
        <A href="/work/Something-Drawings-3">
          <i>SOmething Drawings3,</i>
          <span className="right">READTHEROOM</span>
        </A>
        <br />
        <br />
        <A href="/work/Something-Drawings-2">
          <i>SOmething Drawings2,</i>
          <span className="right">READTHEROOM</span>
        </A>
        <br />
        <br />
        <A href="/work/Something-Drawings-1">
          <i>SOmething Drawings1,</i>
          <span className="right">READTHEROOM</span>
        </A>
        <br />
        <br />
        <A href="/work/Toys-R-Us">
          <i>`Toys R Us,</i>
          <span className="right">Second Space Studios</span>
        </A>
        <br />
        <br />
        <A href="/work/Something-Fractions">
          Something Fractions,
          <span className="right">Suicidal Oil Piglet</span>
        </A>
        <br />
        <br />
        <A href="/work/My-Beige-Girl">
          The Beige Show,
          <span className="right">VCA Student Gallery</span>
        </A>
        <br />
        <br />
      </p>
    </div>
  );
}

export default Work;
