import React, { Suspense, useRef } from "react";
import ReactPlayer from "react-player";
import "../App.css";
/*
const homePlaceholder = React.lazy(() =>
import('./sibhplaceholder.JPG'));
*/
/* i think i actually don't want this lazy loaded.
    they're almost alwqays immediatly in the view port
    I want the videos to be viewable as soon as possible

    */
//const ReactPlayer = React.lazy(() => import("react-player"));
import { PlayerProps } from "./propTypes";

function Player({ url }: PlayerProps) {
  // after some testing it seems like videos only take marginally longer
  // to load than the placeholder thumbnails or even a spinner from font awesome
  // so, won't ad it unnecessarily
  var fallback_div = (
    <div className=" fallback-div center-parent">
      <div className="center-child">Loading...</div>
    </div>
  );

  // fade-in videos
  let playerRef = useRef(null);
  function handleReady() {
    // null case handled below but typescript still doesn't like it, so made it type any
    // This is a known typescript issue, see: https://github.com/Microsoft/TypeScript/issues/12176
    //let current: ((instance: ReactPlayer | null) => void) | React.RefObject<ReactPlayer> | null | undefined = playerRef.current;
    let current: any = playerRef.current;
    if (current !== null) {
      if (current.getInternalPlayer()) {
        // fade in the player
        let playerEls = document.querySelectorAll(".fade-in");
        playerEls.forEach((el) => el.classList.add("solid"));
        // fade out the border
        let borderEls = document.querySelectorAll(".border");
        borderEls.forEach((el) => el.classList.add("border-fade-out"));
      }
    }
  }

  return (
    <div className="border">
      <div className="player fade-in">
        <Suspense fallback={fallback_div}>
          <ReactPlayer
            ref={playerRef}
            onReady={handleReady}
            className="react-player"
            url={url}
            width="100%"
            height="100%"
            config={{
              vimeo: {
                playerOptions: {
                  title: 1,
                  controls: 1,
                },
              },
              file: {
                attributes: {
                  autoPlay: true,
                  muted: true,
                  controls: false,
                  loop: true,
                },
              },
            }}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default Player;
