self.addEventListener('install', function(event){
	console.log("install : "+event);
});
self.addEventListener('activate', function(event){
    console.log("activate : "+event);
});

self.addEventListener('fetch', function(event){
  console.log('fetch : '+event.request.url);
  // return something for each interception
});

self.addEventListener('message', function(event){
    self.postMessage("SW Says 'Hello back!' "+event.data);
    if ('Notification' in window) {
       // Check for permission
        if(Notification.permission=='granted') {
            // Get service worker to show notification
            self.registration.showNotification(notificationData.data.title, {  
                body: notificationData.data.body,
                icon: 'favicon.ico' 
            }); 
        }
        else {
          //We need to ask permission
          Notification.requestPermission(function(permission) {
            if(permission=='granted') {
              self.registration.showNotification(notificationData.data.title, {  
                body: notificationData.data.body,
                icon: 'favicon.ico' 
              });  
            }          
          });
        }
    }
});