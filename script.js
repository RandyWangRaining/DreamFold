'use strict';
const videos = [...document.querySelectorAll('video')];
const toolbar = document.getElementById('demo-toolbar');
const status = document.getElementById('playback-status');
const playButton = document.getElementById('play-all');
const restartButton = document.getElementById('restart-all');
let operation = 0;
toolbar.hidden = false;
async function playTogether(restart = false) {
  const currentOperation = ++operation;
  playButton.disabled = restartButton.disabled = true;
  status.textContent = restart ? 'Restarting both videos…' : 'Starting both videos…';
  const results = await Promise.allSettled(videos.map(async (video) => {
    if (restart) video.currentTime = 0;
    await video.play();
  }));
  if (currentOperation !== operation) return;
  playButton.disabled = restartButton.disabled = false;
  status.textContent = results.some(result => result.status === 'rejected')
    ? 'Some videos could not play. Use the individual player controls or open the original video.'
    : 'Both videos are playing. Use each player to adjust its playback position.';
}
function pauseTogether(announce = true) {
  operation++;
  videos.forEach(video => video.pause());
  playButton.disabled = restartButton.disabled = false;
  if (announce) status.textContent = 'Both videos are paused.';
}
playButton.addEventListener('click', () => playTogether());
restartButton.addEventListener('click', () => playTogether(true));
document.getElementById('pause-all').addEventListener('click', () => pauseTogether());
videos.forEach((video, index) => {
  const reportError = () => { status.textContent = `Video ${index === 0 ? 'A' : 'B'} could not load. Refresh the page or use the link below to open it.`; };
  video.addEventListener('error', reportError);
  video.querySelector('source').addEventListener('error', reportError);
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) pauseTogether();
});
