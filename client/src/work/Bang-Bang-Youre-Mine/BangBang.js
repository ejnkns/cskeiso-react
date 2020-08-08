import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Menu from '../../common/Menu';
import Footer from '../../common/Footer';
import Player from '../../common/Player';

function BangBang() {
    var url = "https://vimeo.com/112134680";
    return (
        <div>
            <Menu page="work" />
<Header />
            <Player url={url} />
            <Footer />
        </div>
    )
}

export default BangBang;