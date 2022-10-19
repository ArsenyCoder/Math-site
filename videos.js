var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('lesson-main-video', {
    videoId: 'OmJ-4B-mS-Y'
  });
}

function OpenMainVideo() {
  player.playVideo();
}

function stopVideo() {
  player.stopVideo();
}