var currentUser = {
  name: 'Tommy',
  id: 42
};
 
var pusher = new Pusher('a8880231a53bf904066d', { 
  authEndpoint: '/pusher/auth',
  auth: {
    params: currentUser
  }
});
 
var channel = pusher.subscribe('test_channel');
 
channel.bind('pusher:subscription_succeeded', function() {
  console.log('Channel members:', channel.members);
});