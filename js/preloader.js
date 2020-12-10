document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('preloader');
        if(!preloader.classList.contains('active')){
            preloader.classList.add('active');
        }
    },500);
}
