(function(){
    window.onload = function(event){

        var btn = document.querySelector(".push-btn");
        btn.addEventListener("click", function(event){
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