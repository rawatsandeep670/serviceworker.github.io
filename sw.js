self.addEventListener('install', function(event){
	console.log("install : "+event);
});
self.addEventListener('activate', function(event){
    console.log("activate : "+event);
});

self.addEventListener('fetch', function(event){
  console.log('fetch : '+event.request.url);
  let notificationTitle = 'Hello';
  const notificationOptions = {
    body: 'Thanks for sending this push msg.',
    icon: './images/icon-192x192.png',
    badge: './images/icon-72x72.png',
    tag: 'simple-push-demo-notification',
    data: {
      url: 'https://developers.google.com/web/fundamentals/getting-started/push-notifications/'
    }
  };
  event.waitUntil(
    Promise.all([
      self.registration.showNotification(
        notificationTitle, notificationOptions)
    ])
  );
  // return something for each interception
});