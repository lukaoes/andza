import React from 'react';
import YouTube from 'react-youtube';

class MusicPlayer extends React.Component {
    _onReady(event) {
        // Access to player in all event handlers via event.target
        event.target.playVideo();
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0, // Set autoplay to 0
            },
        };

        return (
            <div>
                <YouTube
                    videoId="Vg1mpD1BICI"
                    opts={opts}
                    onReady={this._onReady}
                />
                <button onClick={this.playVideo}>Play Video</button>
            </div>
        );
    }

    playVideo = () => {
        // Access the YouTube player instance and play the video
        // You may need to use a ref to access the player instance
        // For example: this.player.playVideo();
    };
}


export default MusicPlayer;
