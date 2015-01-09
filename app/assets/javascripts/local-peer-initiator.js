var peer = new SimplePeer({ initiator: true });
 
peer.on('signal', function (data) {
  channel.trigger('client-signal-' + peerUserId, { userId: currentUser.id, data: data });
});
 
peer.on('ready', function () {
  peer.send('hey peer, how is it going?')
});