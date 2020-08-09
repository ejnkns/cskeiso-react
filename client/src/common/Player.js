import React, { useEffect, Suspense } from 'react';
import '../App.css';

/*
const homePlaceholder = React.lazy(() =>
import('./sibhplaceholder.JPG'));
*/
/* i think i actually don't want this lazy loaded.
    they're almost alwqays immediatly in the view port
    I want the videos to be viewable as soon as possible
const ReactPlayer = React.lazy(() =>
import('react-player'));
*/
import ReactPlayer from 'react-player';

function Player({url}) {
    // after some testing it seems like videos only take marginally longer 
    // to load than the placeholder thumbnails or even a spinner from font awesome 
    // so, won't add it unnecessarily 
    var fallback_div = 
        <div className=" fallback-div center-parent">
            <div className="center-child">Loading...</div>
        </div>;


    // fade-in videos 
    useEffect(() => {
        let els = document.querySelectorAll('.fade-in');
        els.forEach((el) => el.classList.add('solid'));
    });


    return (
        <div className="player fade-in">
            <Suspense fallback={fallback_div}>
                <ReactPlayer
                    className='react-player'
                    url = {url}
                    width = '100%'
                    height = '100%'
                    config={{
                        vimeo: {
                            playerOptions: {
                                title: 1,
                                controls: 1
                            }
                        },
                        file: {
                            attributes: {
                                autoPlay: true,
                                muted: true,
                                controls: false,
                                loop: true
                            }
                        }

                    }}
                />
           </Suspense> 
        </div>
    ) 
}

export default Player;