navigator.getUserMedia({ video: true, audio: true }, function(stream) {
  currentUser.stream = stream;
}, function() {});
 
 
peer = new SimplePeer({ stream: currentUser.stream });
 
peer.on('stream', function(stream) {
  var video = document.querySelector("video");
  video.src = window.URL.createObjectURL(stream);
});