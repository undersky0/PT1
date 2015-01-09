var peer = undefined;
channel.bind('client-signal-' + currentUser.id, function(signal) {
  if (peer === undefined) {
    peer = new SimplePeer();
 
    peer.on('signal', function (data) {
      channel.trigger('client-signal-' + signal.userId, { userId: currentUser.id, data: data });
    });
 
    peer.on('message', function (data) {
      console.log('got a message from remote peer: ' + data);
    });
  }
 
  peer.signal(signal.data)
});