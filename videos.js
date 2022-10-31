var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('lesson-main-video', {
    videoId: 'Kp2bYWRQylk',
    events: {
    'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function OpenMainVideo() {
  player.playVideo();
}

function stopVideo() {
  player.stopVideo();
}
