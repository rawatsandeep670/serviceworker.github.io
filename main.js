(function(){
    window.onload = function(event){
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