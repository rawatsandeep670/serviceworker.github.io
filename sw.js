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
    event.ports[0].postMessage("SW Says 'Hello back!' "+event.data);
});