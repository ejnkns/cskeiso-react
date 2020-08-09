import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import img1 from './1_SB_jessie.JPG';
import img2 from './2-SB-jessie1.JPG';
import img3 from './3_SexBriefClipboard0.JPG';
import img4 from './4_SexBriefClipboard1.JPG';
import img5 from './5_SB_jessie0.jpg';
import img6 from './6_Sb_evelyn1.jpg';

function SexBrief() {
    return (
        <div>
            <Menu page="work" />
<Header />
            <p>
                Interview series with sculptural components filmed and exhibited in 2017.  
                <br/>
            </p>
                <img loading="lazy" alt="" src={img1}/>
                <img loading="lazy" alt="" src={img2}/>
                <img loading="lazy" alt="" src={img3}/>
                <img loading="lazy" alt="" src={img4}/>
                <img loading="lazy" alt="" src={img5}/>
                <img loading="lazy" alt="" src={img6}/>
            <Footer />
        </div>
    );
}

export default SexBrief;