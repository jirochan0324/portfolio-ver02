window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
        width:"100%",
        height:"400",
        uri: 'spotify:intl-ja:track:320t6FGS5vJ05SSKSEvdsl?si=2e3162cda10c450b'
    };
    const song1='spotify:intl-ja:track:2zrhoHlFKxFTRF5aMyxMoQ?utm_source=generator';
    const song2='spotify:intl-ja:track:3BDVbNDjDPnnR4BFYkTorb?si=bbea4cbbc38749f6';
    const song3='spotify:intl-ja:track:320t6FGS5vJ05SSKSEvdsl?si=2e3162cda10c450b';
    const songList=[song1,song2,song3];
    let index=0;
    let callback = (EmbedController) => {
        const intervalId = setInterval(() => {
            EmbedController.loadUri(songList[index])
            index++;
            // 全ての要素を表示したら停止
            if (index >= songList.length) {
                index=0
            }
        }, 24000);
    }
    IFrameAPI.createController(element, options, callback);
};