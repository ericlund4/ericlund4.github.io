// Scroll events
    window.addEventListener('scroll', function(e){
        var scrollTop = window.scrollY
        if(scrollTop > (skillsdiv.offsetTop - skillsdiv.offsetHeight/2)&&!icons[0].classList.contains('slide-in')){
            var i = 0;
            icons.forEach(function(icon){
                setTimeout(function(){
                    icon.classList.add('slide-in');
                }, 150 * i++)
            })
        }
    })
})();