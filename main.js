(function(){
    window.onload = function(event){

        var btn = document.querySelector(".push-btn");
        btn.addEventListener("click", function(event){
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
             navigator.serviceWorker.controller.postMessage("Service Worker");
        });
        navigator.serviceWorker.addEventListener('message', function(event){
            alert(event.data);
        });
        //register Service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js')
            .then(function(reg){
                console.log(reg);
            }).catch(function(e){
                console.log("Catch : "+e);
            });
        } else {
            console.log(reg);
            window.Demo.debug.log('Service workers aren\'t supported in this browser.');
        }
    };
})();