(function(){
    window.onload = function(event){

        var btn = document.querySelector(".push-btn");
        btn.addEventListener("click", function(event){
            alert("push");
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