window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
        width:"72%",
        height:"400",
        uri: 'spotify:track:2zrhoHlFKxFTRF5aMyxMoQ?utm_source=generator'
    };
    let callback = (EmbedController) => {
        document.querySelectorAll('.song-change').forEach(songChange => {
                songChange.addEventListener('click', () => {
                    EmbedController.loadUri(songChange.dataset.spotifyId);
                });
            }
        )
    }
    IFrameAPI.createController(element, options, callback);
  };