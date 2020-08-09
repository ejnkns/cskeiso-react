import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import img1 from "./somethingfractions.jpeg"
import img2 from "./somethingfractions1.jpeg"
import img3 from "./SF1.jpg"

function SomethingFractions() {
    return (
        <div>
            <Menu page="work" />
<Header />
            <p>
                28th April 2017<br/>
                An evening of music and performance at&nbsp;
                <a href="https://suicidaloilpiglet.org/exhibitions">
                    Suicidal Oil Piglet <br/>
                </a>
                Presented by Carmen-Sibha Keiso<br/>
                <br/><br/>
                Readings: Kat Capel<br/>
                Music: Henri &amp; Tyreise KERslake, Isobel D'cruz, Arse'inns Inferno, Coachella<br/>
            </p>
            <img loading="lazy" alt=""  src={img1}/>
            <img loading="lazy" alt=""  src={img2}/>
            <img loading="lazy" alt=""  src={img3}/>
            <Footer />
        </div>
    );
}

export default SomethingFractions;