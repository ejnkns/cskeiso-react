import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import img1 from './iphone-notes1.jpg';
import img2 from './iphone-notes2.jpg';

function IPhoneNotes() {
    return (
        <div>
            <Menu page="work" />
<Header />
            <img loading="lazy" alt="" src={img1}/>
            <img loading="lazy" alt="" src={img2}/>
            <Footer />
        </div>
    )
}

export default IPhoneNotes;